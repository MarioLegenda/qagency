import {useAxios} from "./useAxios";

export async function getUser(id) {
    const http = useAxios();

    try {
        const response = await http.get(`/users/${id}`);

        return {
            data: response.data,
        }
    } catch (e) {
        return {
            error: e.response,
        }
    }
}