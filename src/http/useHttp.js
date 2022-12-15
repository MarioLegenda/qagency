import {getPosts} from "./getPosts";

export const useHttp = () => {
    return {
        getPosts: getPosts,
    }
}