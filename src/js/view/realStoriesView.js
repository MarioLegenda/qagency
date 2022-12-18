import {card} from "../templates/card";
import {createElement} from "../dom/createElement";
import {userView} from "./userView";
import {realStories} from "../templates/realStories";

export function realStoriesView() {
    createElement('realStories', realStories(), 'testimonials_real-stories');
}