import fireEvent from './fire-event';

export default function providePlugin(pluginName, pluginInstance) {
    fireEvent(document, `root-consent.plugin.load.${pluginName}`, {
        name: pluginName,
        instance: pluginInstance
    });
};
