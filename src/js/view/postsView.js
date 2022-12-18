import {card} from "../templates/card";
import {createElement} from "../dom/createElement";
import {userView} from "./userView";

export function postsView(posts) {
    for (let i = 0; i < 3; i++) {
        const id = `injectableCard${i+1}`;
        const post = posts[i];

        if (post) {
            const createdElement = createElement(id, card(post.id, post.title, `${post.body.substring(0, 165)}...`, post.userId), 'testimonials__card');

            if (i === 1) {
                createdElement.classList.add('testimonials__grid--second-cell');
            }

            userView(createdElement, post.userId);
        }
    }
}