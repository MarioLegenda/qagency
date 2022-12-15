import {card} from "../templates/card";
import {createElement} from "../dom/createElement";
import {userView} from "./userView";

export function postsView(posts) {
    for (let i = 0; i < 3; i++) {
        const id = `injectableCard${i+1}`;
        const post = posts[i];

        createElement(id, card(post.title, post.body, post.userId), 'testimonials__card');

        userView(post.userId);
    }
}