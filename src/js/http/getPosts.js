import {useAxios} from "./useAxios";

export async function getPosts(limit = 3, skip = 3, select = ['title', 'body', 'userId']) {
    const http = useAxios();

    try {
        const response = await http.get(`/posts?limit=${limit}&skip=${skip}&select=${select.join(',')}`);

        return {
            data: response.data.posts,
        }
    } catch (e) {
        return {
            error: e.response,
        }
    }
}