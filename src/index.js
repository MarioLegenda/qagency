import './styles/main.scss';
import {addResponsiveFooterToggle} from "./js/events/addResponsiveFooterToggle";
import {addMenuClickHandler} from "./js/events/addMenuHandler";
import {addCardsController} from "./js/controller/addCardsController";
import {refetchCardsController} from "./js/controller/refetchCardsController";

async function main() {
    addResponsiveFooterToggle();
    addMenuClickHandler();

    await addCardsController();
    document.getElementById('refetch').addEventListener('click', refetchCardsController);
}

document.addEventListener('DOMContentLoaded', () => main());