import './styles/entry.scss';
import {useHttp} from "./js/http/useHttp";
import {addResponsiveFooterToggle} from "./js/events/addResponsiveFooterToggle";
import {addMenuClickHandler} from "./js/events/addMenuHandler";
import {cardService} from "./js/service/cardService";
import {PostsCache} from "./js/cache/postsCache";
import {postsView} from "./js/view/postsView";
import {loading} from "./js/common/loading";
import {LocalStorageCache} from "./js/cache/localStorageCache";

async function addCards() {
    loading(async () => {
        const posts = await cardService(new PostsCache());
        postsView(posts);
    });
}

async function reloadCards() {
    document.getElementById('refetch').addEventListener('click', () => {
        loading(async () => {
            const cache = new LocalStorageCache();
            cache.clear();

            const cards = document.getElementsByClassName('testimonials__card');

            for (const card of cards) {
                card.parentElement.removeChild(card);
            }

            const newCards = document.getElementsByClassName('testimonials__card');

            for (const card of newCards) {
                card.parentElement.removeChild(card);
            }

            const posts = await cardService(new PostsCache());
            postsView(posts);
        });
    });
}

function main() {
    addResponsiveFooterToggle();
    addMenuClickHandler();

    addCards();
    reloadCards();
}

document.addEventListener('DOMContentLoaded', (event) => {
    main();
});