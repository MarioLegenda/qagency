export function createElement(id, html, className, addClassName) {
    const rootEl = document.getElementsByClassName(id)[0];
    const parent = rootEl.parentNode;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const appendingElement = tempDiv.getElementsByClassName(className)[0];
    if (addClassName) {
        appendingElement.classList.add(addClassName);
    }

    rootEl.replaceWith(appendingElement);

    const keyframes = [
        { transform: 'translate3d(0, -5%, 0)', opacity: 0 },
        { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ];

    const timing = {
        duration: 400,
        iterations: 1,
    }

    appendingElement.animate(keyframes, timing)

    return appendingElement;
}