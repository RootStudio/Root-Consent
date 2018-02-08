import fireEvent from './utils/fire-event';
import defaults from './defaults';

export function rootConsent(element, options) {

    let config = {};

    let plugins = [];

    /**
     * Convert jQuery objects to standard element
     */

    if (typeof jQuery !== 'undefined' && element instanceof jQuery) {
        element = element[0];
    }

    /**
     * Private
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

        const template = document.createRange().createContextualFragment(html);

        template.querySelector('.root-consent__btn--approve').addEventListener('click', consentApproved);
        template.querySelector('.root-consent__btn--deny').addEventListener('click', consentDenied);

        return template;
    }

    function _displayConsentMessage() {
        element.appendChild(_consentMessageTemplate());

        setTimeout(() => {
            document.querySelector('.root-consent').classList.add('root-consent--active');
            fireEvent(element, 'root-consent.display');
        }, config.delay);
    }

    function _hideConsentMessage() {
        document.querySelector('.root-consent').classList.remove('root-consent--active');
        fireEvent(element, 'root-consent.hide');
    }

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
     * Public
     */

    function consentApproved() {
        localStorage.setItem(config.storageKey, true);

        fireEvent(element, 'root-consent.approve');

        _hideConsentMessage();

        _actionPlugins();
    }

    function consentDenied() {
        localStorage.setItem(config.storageKey, false);

        fireEvent(element, 'root-consent.deny');

        _hideConsentMessage();

        _actionPlugins();
    }

    function isNewVisitor() {
        const consent = localStorage.getItem(config.storageKey);

        return consent === null;
    }

    function hasConsented() {
        const consent = localStorage.getItem(config.storageKey);

        return consent === 'true';
    }

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

    function setup() {
        config = {...defaults, ...options};

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }

        fireEvent(element, 'root-consent.setup');
    }

    setup();

    // API
    return {
        setup,
        consentApproved,
        consentDenied,
        isNewVisitor,
        hasConsented,
        registerPlugin
    }
};
