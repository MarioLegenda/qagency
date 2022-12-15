export const card = (title, text, userId) => {
    return `
<div class="testimonials__card">
    <h2>${title}</h2>
    <div class="testimonials__card--inner-structure">
        <img src="assets/icon.svg" />
        <div>
            <p>${text}</p>
            <div id="user-${userId}"></div>
        </div>
    </div>
</div>`;
};