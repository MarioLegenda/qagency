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

    clear() {
        localStorage.removeItem(`posts`);
    }

    remove(id) {
        const posts = this.get('posts');
        const idx = posts.findIndex((v, k) => v.id === parseInt(id));
        if (idx !== -1) {
            posts.splice(idx, 1);
            this.set(posts);
        }
    }

    isEmpty() {
        const posts = this.get();
        if (posts && posts.length === 0) {
            return true;
        }

        return !Boolean(posts);
    }
}