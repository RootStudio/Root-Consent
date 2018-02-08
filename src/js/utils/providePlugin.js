export default function providePlugin(pluginName, pluginInstance) {
    document.dispatchEvent(new CustomEvent(`gdpr_consent.provide.${pluginName}`, {
        bubbles: true,
        cancelable: true,
        detail: {
            name: pluginName,
            instance: pluginInstance
        }
    }))
};
