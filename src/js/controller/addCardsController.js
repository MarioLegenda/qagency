import {cardService} from "../service/cardService";
import {PostsCache} from "../cache/postsCache";
import {postsView} from "../view/postsView";
import {loading} from "../common/loading";
import {deleteCardController} from "./deleteCardController";

export const addCardsController = () => {
    loading(async () => {
        const posts = await cardService(new PostsCache());
        postsView(posts);

        deleteCardController();
    });
}
