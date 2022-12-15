export function createElement(id, html, className) {
    const rootEl = document.getElementById(id);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    rootEl.replaceWith(tempDiv.getElementsByClassName(className)[0]);
}