import {createElement} from "../dom/createElement";
import {card} from "../templates/card";
import {userView} from "./userView";

export function responsivePostsView(posts) {
    for (let i = 0; i < 3; i++) {
        const id = `injectableCardResponsive${i+1}`;
        const post = posts[i];

        if (post) {
            createElement(id, card(post.id, post.title, `${post.body.substring(0, 165)}...`, post.userId), 'testimonials__card');

            userView(post.userId);
        }
    }
}