import {getPosts} from "./getPosts";
import {getUser} from "./getUser";

export const useHttp = () => {
    return {
        getPosts: getPosts,
        getUser: getUser,
    }
}