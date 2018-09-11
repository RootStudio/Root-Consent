import fireEvent from './fire-event';

/**
 * Convenience wrapper for notifying the main library
 * that a plugin has been loaded and is ready for use
 *
 * @param {String} pluginName
 * @param {Object} pluginInstance
 */
export default function providePlugin ( pluginName, pluginInstance ) {

    setTimeout( () => {
        document.addEventListener( `root-consent.plugin.${pluginName}.load`, ( ev ) => {
            pluginInstance.onLoad( ev.detail );

            // Catches plugins that load before RootConsent has been called
            fireEvent( document, `root-consent.plugin.${pluginName}.loaded`, {
                instance: pluginInstance,
                name: pluginName
            } );
        } )

        fireEvent( document, `root-consent.plugin.${pluginName}.registered`, {
            instance: pluginInstance,
            name: pluginName
        } );
    }, 0 )
};
