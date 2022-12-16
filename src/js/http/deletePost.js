import {useAxios} from "./useAxios";

export async function deletePost(id) {
    const http = useAxios();

    try {
        const response = await http.delete(`/posts/${id}`);

        return {
            data: response.data,
        }
    } catch (e) {
        return {
            error: e.response,
        }
    }
}