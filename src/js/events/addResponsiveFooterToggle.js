export function addResponsiveFooterToggle() {
    const icons = document.getElementsByClassName('footer__icon');

    for (const el of icons) {
        el.addEventListener('click', (event) => {
            const target = event.target;
            const list = target.parentNode.parentNode.getElementsByTagName('ul');

            if (target.classList.contains('footer__icon--open')) {
                target.classList.remove('footer__icon--open');
                target.classList.add('footer__icon--close');

                list[0].classList.remove('footer__list--open');

                return;
            }

            if (target.classList.contains('footer__icon--close')) {
                target.classList.remove('footer__icon--close');
                target.classList.add('footer__icon--open');

                list[0].classList.add('footer__list--open');
            }
        })
    }
}