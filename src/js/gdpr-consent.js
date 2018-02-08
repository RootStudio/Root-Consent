import defaults from './defaults';

export function GDPRConsentBarrier(element, options) {

    let config = {};

    let plugins = [];

    if (typeof jQuery !== 'undefined' && element instanceof jQuery) {
        element = element[0];
    }

    /**
     * Private
     */
    function _consentMessageTemplate() {
        const {messageTitle, messageText, approveLabel, denyLabel} = config;

        const html = `
            <div class="gpdr-consent">
                <div class="gpdr-consent__message">
                    <strong class="gpdr-consent__message-title">${messageTitle}</strong>
                    <p class="gpdr-consent__message-text">${messageText}</p>
                </div>
                <div class="gpdr-consent__actions">
                    <button class="gpdr-consent__btn gpdr-consent__btn--approve">${approveLabel}</button>
                    <button class="gpdr-consent__btn gpdr-consent__btn--deny">${denyLabel}</button>
                </div>
            </div>
        `;

        const template = document.createRange().createContextualFragment(html);

        template.querySelector('.gpdr-consent__btn--approve').addEventListener('click', consentApproved);
        template.querySelector('.gpdr-consent__btn--deny').addEventListener('click', consentDenied);

        return template;
    }

    function _displayConsentMessage() {
        element.appendChild(_consentMessageTemplate());
    }

    function _loadPlugin({detail}) {
        const {name, instance} = detail;

        // Find plugin in stack
        const plugin = plugins.find(p => {
            return p.name === name;
        });

        // Update with new information
        plugin.instance = instance;
        plugin.pinged = true;

        // Fire registered method
        plugin.instance.onRegister();

        // We need to run this each time to catch up
        // slow loading plugins if the user has
        // already made their choice.
        _actionPlugins();
    }

    function _actionPlugins() {
        if (isNewVisitor()) return;

        const fireApprove = hasConsented();

        plugins.filter(plugin => plugin.pinged).forEach(({instance}) => {
            fireApprove ? instance.onApprove() : instance.onDeny()
        });
    }

    /**
     * Public
     */

    function consentApproved() {
        localStorage.setItem(config.storageKey, true);

        _actionPlugins();
    }

    function consentDenied() {
        localStorage.setItem(config.storageKey, false);

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

    function registerPlugin(name) {
        plugins.push({
            name,
            instance: false,
            pinged: false
        });

        document.addEventListener(`gdpr_consent.provide.${name}`, _loadPlugin)
    }

    function setup() {
        config = {...defaults, ...options};

        if (!hasConsented() && isNewVisitor()) {
            _displayConsentMessage();
        }
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
