export function createElement(id, html, className) {
    const rootEl = document.getElementById(id);
    const parent = rootEl.parentNode;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    rootEl.replaceWith(tempDiv.getElementsByClassName(className)[0]);

    const newPlaceholder = document.createElement('div');
    newPlaceholder.id = id;
    newPlaceholder.style.display = 'none';
    parent.appendChild(newPlaceholder)
}