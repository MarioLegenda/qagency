export async function loading(handler) {
    const img = document.createElement('img');
    img.src = 'assets/spinner.svg';
    img.classList.add('animate-loader');
    img.style.width = '24px';
    img.style.height = '24px';
    img.style['align-self'] = 'center';

    const el = document.getElementsByClassName('testimonials__centered-container')[1];
    el.parentElement.style.height = '1200px';
    el.appendChild(img);

    await handler();

    el.removeChild(img);
    el.parentElement.style.height = 'auto';
}