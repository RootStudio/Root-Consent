import CustomEvent from 'custom-event';

export default function fireEvent(element, type, detail) {
    const event = new CustomEvent(type, {
        bubbles: true,
        cancelable: true,
        detail
    });

    element.dispatchEvent(event);
}
