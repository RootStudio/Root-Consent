export default {

    /**
     * Title of the popup message
     *
     * @string {messageTitle}
     */
    messageTitle: 'Your Right to Privacy',

    /**
     * Longer message to explain what consent is being given for
     *
     * @string {messageText}
     */
    messageText: 'This website uses analytics software - do you wish to be included in the collected data? Find out more in our Privacy Policy.',

    /**
     * Approval button text
     *
     * @string {approveLabel}
     */
    approveLabel: 'I accept',

    /**
     * Rejection button text
     *
     * @string {denyLabel}
     */
    denyLabel: 'No thanks',

    /**
     * The localStorage key that consent is stored under
     *
     * @string {storageKey}
     */
    storageKey: 'root-consent',

    /**
     * Delay length from page load to displaying the consent message
     *
     * @integer {delay}
     */
    delay: 1000,

    /**
     * Time Frame to expire consent
     *
     * @integer {expiryFrame}
     */
    expiryFrame: (1000 * 60 * 60 * 24),

    /**
     * Total time frame till consent expires
     *
     * @integer {expiry}
     */
    expiry: 30,

    /**
     * Position of message on screen
     *
     * @string {position}
     */
    position: 'bottom',

    /**
     * Appearance of the consent message
     *
     * @string {theme}
     */
    theme: 'dark',

    /**
     * Always Approved
     *
     * @boolean {alwaysApproved}
     */
    alwaysApproved: false

};
