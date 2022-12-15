import './styles/entry.scss';
import {useHttp} from "./js/http/useHttp";
import {addResponsiveFooterToggle} from "./js/events/addResponsiveFooterToggle";
import {addMenuClickHandler} from "./js/events/addMenuHandler";
import {cardService} from "./js/service/cardService";
import {PostsCache} from "./js/cache/postsCache";
import {postsView} from "./js/view/postsView";
import {loading} from "./js/common/loading";

async function addCards() {
    loading(async () => {
        const posts = await cardService(new PostsCache());
        postsView(posts);
    });
}

function main() {
    addResponsiveFooterToggle();
    addMenuClickHandler();

    addCards();
}

document.addEventListener('DOMContentLoaded', (event) => {
    main();
});