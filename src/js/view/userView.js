import {useHttp} from "../http/useHttp";
import {createElement} from "../dom/createElement";
import {user} from "../templates/user";
import {withCache} from "../cache/withCache";

export async function userView(parent, id) {
    const {getUser} = useHttp();

    const data = await withCache(`user-${id}`, async () => {
        const {data, error} = await getUser(id);

        if (error) return undefined;

        return data;
    });

    if (data) {
        const placeholderParent = parent.getElementsByClassName('user-placeholder-parent')[0];
        const tempDiv = document.createElement('div');
        tempDiv.classList.add(`user-${data.id}`);
        placeholderParent.appendChild(tempDiv);

        createElement(`user-${data.id}`, user(data.firstName, data.lastName, data.image, data.company.title), 'testimonials__card--user');
    }
}