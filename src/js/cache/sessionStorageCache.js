export class SessionStorageCache {
    has(id) {
        return Boolean(sessionStorage.getItem(id));
    }

    get(id) {
        return sessionStorage.getItem(id);
    }

    remove(id) {
        sessionStorage.removeItem(id);
    }

    clear() {
        sessionStorage.clear();
    }

    isEmpty() {
        return Boolean(sessionStorage.length === 0);
    }
}