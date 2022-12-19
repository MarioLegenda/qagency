import {card} from "../templates/card";
import {createElement} from "../dom/createElement";
import {userView} from "./userView";

export function postsView(posts) {
    const createdElements = [];
    for (let i = 0; i < 3; i++) {
        const id = `injectableCard${i+1}`;
        const post = posts[i];

        if (post) {
            const createdElement = createElement(id, card(post.id, post.title, `${post.body.substring(0, 165)}...`, post.userId), 'testimonials__card');

            userView(createdElement, post.userId);

            createdElements.push(createdElement);
        }
    }

    for (let i = 0; i < 3; i++) {
        const id = `injectableCard${i+1}`;
        const element = createdElements[i];

        const newPlaceholder = document.createElement('div');
        newPlaceholder.classList.add(id);
        newPlaceholder.style.display = 'none';
        element.parentNode.appendChild(newPlaceholder);
    }
}