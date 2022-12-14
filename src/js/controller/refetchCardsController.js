import {loading} from "../common/loading";
import {LocalStorageCache} from "../cache/localStorageCache";
import {cardService} from "../service/cardService";
import {PostsCache} from "../cache/postsCache";
import {postsView} from "../view/postsView";
import {deleteCardController} from "./deleteCardController";
import {error} from "../common/error";

export const refetchCardsController = async () => {
    loading(await error(async () => {
        const cache = new LocalStorageCache();
        cache.clear();

        const cards = document.getElementsByClassName('testimonials__card');

        for (const card of [...cards]) {
            card.parentElement.removeChild(card);
        }

        const posts = await cardService(new PostsCache());
        postsView(posts);
        deleteCardController();
    }));
}