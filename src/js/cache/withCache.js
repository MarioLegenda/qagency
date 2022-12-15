import {LocalStorageCache} from "./localStorageCache";

export async function withCache(id, httpFn) {
    const cache = new LocalStorageCache();

    if (cache.has(id)) {
        return cache.get(id);
    }
    
    const entry = await httpFn();

    if (entry) {
        cache.set(id, entry);
    }

    return entry;
}