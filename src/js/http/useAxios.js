import axios from "axios";

let instance;

export function useAxios() {
    if (!instance) {
        instance = axios.create({
            baseURL: 'https://dummyjson.com'
        });
    }

    return instance
}