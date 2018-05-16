import '../sass/root-consent.scss';

//Polyfills
import './polyfills/find';

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
export function rootConsent(element, options) {

    /**
     * Merged configuration values
     *
     * @type {Object}
     */
    let config = {};

    /**
     * Registered plugin state array
     *
     * @type {Array}
     */
    let plugins = [];

    // Converts jQuery Objects to DOM Node
    if (typeof jQuery !== 'undefined' && element instanceof jQuery) {
        element = element[0];
    }

    /**
     * Generates the consent message template and registered event handlers
     *
     * @private
     */
    function _consentMessageTemplate() {
        const {
            messageTitle,
            messageText,
            approveLabel,
            denyLabel,
            position,
            theme
        } = config;

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

            template.querySelector('.root-consent__btn--approve').addEventListener('click', consentApproved);
            template.querySelector('.root-consent__btn--deny').addEventListener('click', consentDenied);
            return template;
        } catch (err) {

            let template = document.createElement('html');
            template.innerHTML = html;
            template = template.cloneNode(true).querySelector('.root-consent');

            template.querySelector('.root-consent__btn--approve').addEventListener('click', consentApproved);
            template.querySelector('.root-consent__btn--deny').addEventListener('click', consentDenied);
            return template;
        }
    }

    /**
     * Injects template into target element and triggers display animation
     *
     * @private
     */
    function _displayConsentMessage() {
        element.appendChild(_consentMessageTemplate());

        setTimeout(() => {
            document.querySelector('.root-consent').classList.add('root-consent--active');
            fireEvent(element, 'root-consent.display');
        }, config.delay);
    }

    /**
     * Triggers hide animation for message template
     *
     * @private
     */
    function _hideConsentMessage() {
        document.querySelector('.root-consent').classList.remove('root-consent--active');
        fireEvent(element, 'root-consent.hide');
    }

    /**
     * Plugin load callback to update the current state and
     * fire the 'onLoad' method of the plugin.
     *
     * @param {detail}
     * @private
     */
    function _loadPlugin({detail}) {
        const {name, instance} = detail;

        // Find plugin in stack
        const plugin = plugins.find(p => {
            return p.name === name;
        });

        // Update with new information
        plugin.instance = instance;
        plugin.loaded = true;

        // Fire load method
        plugin.instance.onLoad(plugin.options);

        fireEvent(element, `root-consent.plugin.${name}.load`, {
            name,
            instance
        });

        // We need to run this each time to catch up
        // slow loading plugins if the user has
        // already made their choice.
        _actionPlugins();
    }

    /**
     * Loops through each plugin to fire the appropriate method, ignoring
     * those that are not yet loaded or have yet to be actioned.
     *
     * @private
     */
    function _actionPlugins() {
        if (isNewVisitor()) return;

        const fireApprove = hasConsented();

        plugins.filter(plugin => plugin.loaded && !plugin.actioned).forEach(plugin => {
            const {name, instance} = plugin;

            fireApprove ? instance.onApprove() : instance.onDeny();

            fireEvent(element, `root-consent.plugin.${name}.${fireApprove ? 'approve' : 'deny'}`, {
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
    function consentApproved() {
        localStorage.setItem(config.storageKey, JSON.stringify({consent: true, date: Date.now()}));

        fireEvent(element, 'root-consent.approve');

        _hideConsentMessage();

        _actionPlugins();
    }

    /**
     * Stores rejection value in localStorage and fires plugin actions.
     *
     * @returns {Void}
     */
    function consentDenied() {
        localStorage.setItem(config.storageKey, JSON.stringify({consent: false, date: Date.now()}));

        fireEvent(element, 'root-consent.deny');

        _hideConsentMessage();

        _actionPlugins();
    }

    /**
     * Checks whether the localStorage key has been set to identify
     * new visitors to the page.
     *
     * @returns {Boolean}
     */
    function isNewVisitor() {
        const data = JSON.parse(localStorage.getItem(config.storageKey));
        return data  === null;
    }

    /**
     * Checks whether the stored value is the affirmative
     *
     * @returns {Boolean}
     */
    function hasConsented() {
        const data = JSON.parse(localStorage.getItem(config.storageKey));

        if( data ) {
        }

        return data && data.consent && !consentExpired(data.date);
    }

    /**
     * Registers a new plugin with the library and attaches the
     * event listener for the plugin to announce load state.
     *
     * @param {String} name
     * @param {Object} options
     */
    function registerPlugin(name, options = {}) {
        plugins.push({
            name,
            options,
            instance: false,
            loaded: false,
            actioned: false
        });

        document.addEventListener(`root-consent.plugin.load.${name}`, _loadPlugin)
    }

    /**
     * Prepares the library for execution
     *
     * @returns {Void}
     */
    function setup() {
        config = {...defaults, ...options};

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }

        fireEvent(element, 'root-consent.setup');
    }

    /**
     * Removes the localStorage data and resets the consent status
     *
     * @returns {void}
     */
    function destroy() {
        localStorage.removeItem(config.storageKey);

        fireEvent(element, 'root-consent.destroy');
    }

    function consentExpired(date) {

        date = new Date(date);
        const today = new Date();
        const diff = Math.abs(today.getTime() - date.getTime());

        if ((diff / config.expiryFrame) > config.expiry) {
            destroy();
            return true;
        }

    }

    setup();

    return {
        setup,
        consentApproved,
        consentDenied,
        isNewVisitor,
        hasConsented,
        registerPlugin,
        destroy
    }
};
