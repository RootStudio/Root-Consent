//Polyfills
import './polyfills/polyfill';

import fireEvent from './utils/fire-event';
import defaults from './defaults';

/**
 * RootConsent library function
 *
 * @author James Wigger <james@rootstudio.co.uk>
 *
 * @param {Element} element
 * @param {Object} options
 * @returns {Object}
 * @constructor
 */
export class RootConsent {

    constructor(element, options) {

        if (element instanceof Element) {
            this.element = element
        } else {
            this.element = this.element.querySelector(element);
        }

        // Converts jQuery Objects to DOM Node
        if (typeof jQuery !== 'undefined' && this.element instanceof jQuery) {
            this.element = this.element[0];
        }

        this.config = {...defaults, ...options};

        if (!this.hasConsented() && this.isNewVisitor()) {
            this._displayConsentMessage();
        }

        this.plugins = [];

        fireEvent(this.element, 'root-consent.setup');

    }

    /**
     * Generates the consent message template and registered event handlers
     *
     * @private
     */
    _consentMessageTemplate() {
        const {
            messageTitle,
            messageText,
            approveLabel,
            denyLabel,
            position,
            theme
        } = this.config;

        const html = `
            <div class="root-consent root-consent--${position} root-consent--${theme}">
                <div class="root-consent__message">
                    <strong class="root-consent__message-title">${messageTitle}</strong>
                    <p class="root-consent__message-text">${messageText}</p>
                </div>
                <div class="root-consent__actions">
                    <button class="root-consent__btn root-consent__btn--approve">${approveLabel}</button>
                    <button class="root-consent__btn root-consent__btn--deny">${denyLabel}</button>
                </div>
            </div>
        `;

        try {
            const template = document.createRange().createContextualFragment(html);

            template.querySelector('.root-consent__btn--approve').addEventListener('click', () => {
                this.consentApproved()
            });
            template.querySelector('.root-consent__btn--deny').addEventListener('click', () => {
                this.consentDenied()
            });
            return template;
        } catch (err) {

            let template = document.createElement('html');
            template.innerHTML = html;
            template = template.cloneNode(true).querySelector('.root-consent');

            template.querySelector('.root-consent__btn--approve').addEventListener('click', () => {
                this.consentApproved()
            });
            template.querySelector('.root-consent__btn--deny').addEventListener('click', () => {
                this.consentDenied()
            });
            return template;
        }
    }

    /**
     * Injects template into target element and triggers display animation
     *
     * @private
     */
    _displayConsentMessage() {
        this.element.appendChild(this._consentMessageTemplate());

        setTimeout(() => {
            this.element.querySelector('.root-consent').classList.add('root-consent--active');
            fireEvent(this.element, 'root-consent.display');
        }, this.config.delay);
    }

    /**
     * Triggers hide animation for message template
     *
     * @private
     */
    _hideConsentMessage() {
        const $el = this.element.querySelector('.root-consent').classList.remove('root-consent--active');
        fireEvent(this.element, 'root-consent.hide');
        setTimeout( () => {
            $el.remove();
        }, 200)
    }

    /**
     * Plugin load callback to update the current state and
     * fire the 'onLoad' method of the plugin.
     *
     * @param {detail}
     * @private
     */
    _loadPlugin({detail}) {
        const {instance, name} = detail;

        // Find plugin in stack
        const plugin = this.plugins.find(p => {
            return p.name === name;
        });

        // Update with new information
        plugin.instance = instance;
        plugin.loaded = true;

        this._actionPlugins();
    }

    /**
     * Loops through each plugin to fire the appropriate method, ignoring
     * those that are not yet loaded or have yet to be actioned.
     *
     * @private
     */
    _actionPlugins() {
        if (this.isNewVisitor()) return;

        const fireApprove = this.hasConsented();

        this.plugins.filter(plugin => plugin.loaded && !plugin.actioned).forEach(plugin => {
            const {name, instance} = plugin;
            fireApprove ? instance.onApprove() : instance.onDeny();
            fireEvent(this.element, `root-consent.plugin.${name}.${fireApprove ? 'approve' : 'deny'}`, {
                name,
                instance
            });

            plugin.actioned = true;
        });
    }

    /**
     * Stores approval value in localStorage and fires plugin actions.
     *
     * @returns {Void}
     */
    consentApproved() {
        localStorage.setItem(this.config.storageKey, JSON.stringify({consent: true, date: Date.now()}));

        fireEvent(this.element, 'root-consent.approve');

        this._hideConsentMessage();
        this._actionPlugins();
    }

    /**
     * Stores rejection value in localStorage and fires plugin actions.
     *
     * @returns {Void}
     */
    consentDenied() {
        localStorage.setItem(this.config.storageKey, JSON.stringify({consent: false, date: Date.now()}));

        fireEvent(this.element, 'root-consent.deny');

        this._hideConsentMessage();

        this._actionPlugins();
    }

    /**
     * Checks whether the localStorage key has been set to identify
     * new visitors to the page.
     *
     * @returns {Boolean}
     */
    isNewVisitor() {
        const data = JSON.parse(localStorage.getItem(this.config.storageKey));
        return data === null;
    }

    /**
     * Checks whether the stored value is the affirmative
     *
     * @returns {Boolean}
     */
    hasConsented() {
        const data = JSON.parse(localStorage.getItem(this.config.storageKey));

        return data && data.consent && !this.consentExpired(data.date);
    }

    /**
     * Registers a new plugin with the library and attaches the
     * event listener for the plugin to announce load state.
     *
     * @param {String} name
     * @param {Object} options
     */
    registerPlugin(name, options = {}) {
        this.plugins.push({
            name,
            options,
            instance: false,
            loaded: false,
            actioned: false
        });

        document.addEventListener(`root-consent.plugin.registered.${name}`, ev => {
            fireEvent(this.element, `root-consent.plugin.load.${name}`, options);
        });

        document.addEventListener(`root-consent.plugin.loaded.${name}`, ev => {
            this._loadPlugin(ev);
        });

        fireEvent(this.element, `root-consent.plugin.load.${name}`, options);

    }

    /**
     * Registers multiple plugins to improve readability
     *
     * @param {Array[{name, options}]} plugins
     */
    registerMultiple(plugins) {
        plugins.forEach( plugin => {
            this.registerPlugin(plugin.name, plugin.options)
        })
    }

    /**
     * Removes the localStorage data and resets the consent status
     *
     * @returns {void}
     */
    destroy() {
        localStorage.removeItem(this.config.storageKey);

        fireEvent(this.element, 'root-consent.destroy');
    }

    consentExpired(date) {

        date = new Date(date);
        const today = new Date();
        const diff = Math.abs(today.getTime() - date.getTime());

        if ((diff / this.config.expiryFrame) > this.config.expiry) {
            this.destroy();
            return true;
        }

    }
};

window.rootConsent = (element, options) => {
    return new RootConsent(element, options);
}