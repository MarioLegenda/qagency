export async function loading(handler) {
    const img = document.createElement('img');
    img.src = 'assets/spinner.svg';
    img.classList.add('animate-loader');

    const el = document.getElementsByClassName('testimonials__centered-container')[0];
    el.appendChild(img);

    await handler();

    el.removeChild(img);
}