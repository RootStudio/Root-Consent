import fireEvent from './fire-event';

/**
 * Convenience wrapper for notifying the main library
 * that a plugin has been loaded and is ready for use
 *
 * @param {String} pluginName
 * @param {Object} pluginInstance
 */
export default function providePlugin(pluginName, pluginInstance) {

    document.addEventListener(`root-consent.plugin.load.${pluginName}`, (ev) => {
        pluginInstance.onLoad(ev.detail);

        // Catches plugins that load before RootConsent has been called
        fireEvent(document, `root-consent.plugin.loaded.${pluginName}`, {instance: pluginInstance, name: pluginName});
    })

    fireEvent(document, `root-consent.plugin.registered.${pluginName}`, {instance: pluginInstance, name: pluginName});
};
