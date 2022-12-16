export function createElement(id, html, className) {
    const rootEl = document.getElementById(id);
    const parent = rootEl.parentNode;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const appendingElement = tempDiv.getElementsByClassName(className)[0];
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

    const newPlaceholder = document.createElement('div');
    newPlaceholder.id = id;
    newPlaceholder.style.display = 'none';
    parent.appendChild(newPlaceholder)
}