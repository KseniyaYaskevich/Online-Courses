export const createEventListTemplate = (item) => `
<li class="event__item">
    <h4 class="event__title">Dates</h4>
    <p class="event__details">${item.dates}</p>
    <p class="event__desc">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
</li>
<li class="event__item">
    <h4 class="event__title">Duration</h4>
    <p class="event__details">${item.duration}</p>
    <p class="event__desc">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
</li>
<li class="event__item">
    <h4 class="event__title">Price</h4>
    <p class="event__details">$${item.monthPrice} per month</p>
    <p class="event__desc">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit
        tristique dis.</p>
</li>`;
