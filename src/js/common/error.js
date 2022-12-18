export async function error(handler) {
    return async () => {
        try {
            await handler();
        } catch (e) {
            const errorEl = document.getElementsByClassName('error__structure')[0];
            errorEl.classList.remove('hide');
            errorEl.classList.add('show');
        }
    }
}