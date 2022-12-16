import {getPosts} from "./getPosts";
import {getUser} from "./getUser";
import {deletePost} from "./deletePost";

export const useHttp = () => {
    return {
        getPosts: getPosts,
        getUser: getUser,
        deletePost: deletePost,
    }
}