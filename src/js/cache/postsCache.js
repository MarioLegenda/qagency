export class PostsCache {
    has() {
        return Boolean(localStorage.getItem(`posts`));
    }

    get() {
        return JSON.parse(localStorage.getItem(`posts`));
    }

    set(item) {
        localStorage.setItem(`posts`, JSON.stringify(item));
    }

    remove() {
        localStorage.removeItem(`posts`);
    }

    isEmpty() {
        return Boolean(localStorage.length === 0);
    }
}