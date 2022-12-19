import {createElement} from "../dom/createElement";
import {realStories} from "../templates/realStories";

export function realStoriesView() {
    createElement('realStories', realStories(), 'testimonials_real-stories');
}