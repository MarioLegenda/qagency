import {PostsCache} from "../cache/postsCache";
import {LocalStorageCache} from "../cache/localStorageCache";
import {refetchCardsController} from "./refetchCardsController";
import {useHttp} from "../http/useHttp";

export const deleteCardController = () => {
    const buttons = document.getElementsByClassName('delete-button');

    for (const button of buttons) {
        button.addEventListener('click', async (e) => {
            const {deletePost} = useHttp();

            const target = e.target;
            const split = target.dataset.remove.split('-');
            const postId = split[0];
            const userId = split[1];

            target.classList.add('disabled-button');
            target.setAttribute('disabled', true);
            await deletePost(postId);

            const postsCache = new PostsCache();
            const storage = new LocalStorageCache();
            postsCache.remove(postId);
            storage.remove(`user-${userId}`);

            const cardElement = target.parentElement.parentElement;
            cardElement.parentElement.removeChild(cardElement);
            
            if (postsCache.isEmpty()) {
                postsCache.clear();
                refetchCardsController();
            }
        });
    }
}