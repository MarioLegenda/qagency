export function addMenuClickHandler() {
    const open = document.getElementById("menuIcon");
    const close = document.getElementById("closeMenuIcon");

    open.addEventListener('click', () => {
        const el = document.getElementById("headerMobileNav");

        el.classList.add('header__mobile__nav__show-nav');
        el.classList.remove('header__mobile__nav__hide-nav');
    });

    close.addEventListener('click', () => {
        const el = document.getElementById("headerMobileNav");

        el.classList.remove('header__mobile__nav__show-nav');
    });
}
