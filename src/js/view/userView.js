import {useHttp} from "../http/useHttp";
import {createElement} from "../dom/createElement";
import {user} from "../templates/user";
import {withCache} from "../cache/withCache";

export async function userView(id) {
    const {getUser} = useHttp();

    const data = await withCache(`user-${id}`, async () => {
        const {data, error} = await getUser(id);

        if (error) return undefined;

        return data;
    });

    if (data) {
        createElement(`user-${data.id}`, user(data.firstName, data.lastName, data.image, data.company.title), 'testimonials__card--user');
    }
}