import fireEvent from './fire-event';

/**
 * Convenience wrapper for notifying the main library
 * that a plugin has been loaded and is ready for use
 *
 * @param {String} pluginName
 * @param {Function} pluginInstance
 */
export default function providePlugin(pluginName, pluginInstance) {
    document.addEventListener(`root-consent.plugin.load.${pluginName}`, (ev) => {
        pluginInstance['onLoad'](ev.detail, pluginInstance)
    })
};
