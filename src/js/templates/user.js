export const user = (firstName, lastName, image, occupation) => {
    return `
<div class="testimonials__card--user">
    <img src="${image}" />
    <div class="testimonials__card--user-info">
        <label>${firstName} ${lastName}</label>
        <label>${occupation}</label>
    </div>
</div>`;
};