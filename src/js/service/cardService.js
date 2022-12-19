import {useHttp} from "../http/useHttp";

export async function cardService(postsCache) {
    if (postsCache.has()) return postsCache.get();

    const {getPosts} = useHttp();
    const {data, error} = await getPosts();

    if (error) throw new Error(error);

    postsCache.set(data);

    return postsCache.get();
}