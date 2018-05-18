import providePlugin from '../utils/provide-plugin';

/**
 * This is the simplest example of a plugin, it will output the executed
 * methods to the console. It demonstrates the scaffolding all plugins
 * must use in order to work with the main library.
 *
 * @constructor
 */
class Example {

    // Set any default config options here
    constructor() {
    }

    /**
     * The `onLoad()` method is called once the plugin script has been
     * loaded and has notified the main library that it is ready. You
     * should use this to set up any configuration objects.
     *
     * The first parameter of this method contains any configuration
     * parameters passed through when using the `registerPlugin()`
     * API method.
     *
     * Warning! This event is fired *before* any consent status
     * is determined. You should *not* load any data collection
     * scripts within this method.
     */
    onLoad() {
        console.log('PLUGIN REGISTERED');
    };

    /**
     * This method is called when the user has granted consent. This
     * is where you should now begin loading any data collection scripts
     * as you can now be certain the user has expressed explicit permission
     * to do so. Remember, the user may consent at any time and may necessarily
     * interact with the consent screen on first page load.
     *
     * This method will be called on each page load once the consent status
     * has been stored.
     */
    onApprove() {
        console.log('PLUGIN CONSENT GIVEN');
    };

    /**
     * The `onDeny` method is called when a user does not consent to the proposed
     * data collection. You should use this to destroy any already loaded scripts
     * or block any future ones.
     *
     * This method will be called on each page load once the consent status
     * has been stored.
     */
    onDeny() {
        console.log('PLUGIN CONSENT DENIED');
    };
}

/**
 * This is an example of using the `providePlugin` helper
 * to announce the plugin's ready state to the main library.
 *
 * You must include this or an identical event signature otherwise
 * your plugin will never be loaded into the system.
 *
 * Add setTimeout to ensure comparability with jQuery
 *
 */

 providePlugin('example', new Example());