export class LocalStorageCache {
    has(id) {
        return Boolean(localStorage.getItem(id));
    }

    get(id) {
        return JSON.parse(localStorage.getItem(id));
    }

    set(id, item) {
        localStorage.setItem(id, JSON.stringify(item));
    }

    remove(id) {
        localStorage.removeItem(id);
    }

    clear() {
        localStorage.clear();
    }

    isEmpty() {
        return Boolean(localStorage.length === 0);
    }
}