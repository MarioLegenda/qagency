import './styles/entry.scss';
import {addResponsiveFooterToggle} from "./js/events/addResponsiveFooterToggle";
import {addMenuClickHandler} from "./js/events/addMenuHandler";
import {addCardsController} from "./js/controller/addCardsController";
import {refetchCardsController} from "./js/controller/refetchCardsController";
import {deleteCardController} from "./js/controller/deleteCardController";

async function addCards() {
    addCardsController()
}

async function reloadCards() {
    document.getElementById('refetch').addEventListener('click', refetchCardsController);
}

async function main() {
    addResponsiveFooterToggle();
    addMenuClickHandler();

    await addCards();
    await reloadCards();
}

document.addEventListener('DOMContentLoaded', (event) => {
    main();
});