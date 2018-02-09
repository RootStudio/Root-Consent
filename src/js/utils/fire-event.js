import CustomEvent from 'custom-event';

/**
 * Convenience wrapper for firing a custom event natively
 * across all browsers.
 *
 * @param {Element} element
 * @param {String} type
 * @param {String|Object|Number|Boolean} detail
 */
export default function fireEvent(element, type, detail) {
    const event = new CustomEvent(type, {
        bubbles: true,
        cancelable: true,
        detail
    });

    element.dispatchEvent(event);
}
