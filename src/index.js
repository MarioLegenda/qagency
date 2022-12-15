import './styles/entry.scss';
import {useHttp} from "./http/useHttp";

const http = useHttp();

function addMenuClickHandler() {
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

function addResponsiveFooterToggle() {
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

addResponsiveFooterToggle();
addMenuClickHandler()