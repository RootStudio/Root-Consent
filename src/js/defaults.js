export default {

    /**
     * Title of the popup message
     *
     * @string {messageTitle}
     */
    messageTitle: 'GDPR Consent',

    /**
     * Longer message to explain what consent is being given for
     *
     * @string {messageText}
     */
    messageText: 'Do you want us to track everything you do?',

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
    theme: 'dark'

};
