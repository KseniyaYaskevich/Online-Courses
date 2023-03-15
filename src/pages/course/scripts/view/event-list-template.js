export const createEventListTemplate = (item) => `
<ul class="event-sidebar__list">
    <li class="event-sidebar__item">
        <h4 class="event-sidebar__title">Dates</h4>
        <p class="event-sidebar__details">${item.dates}</p>
        <p class="event-sidebar__desc">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
    </li>
    <li class="event-sidebar__item">
        <h4 class="event-sidebar__title">Duration</h4>
        <p class="event-sidebar__details">${item.duration}</p>
        <p class="event-sidebar__desc">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
    </li>
    <li class="event-sidebar__item">
        <h4 class="event-sidebar__title">Price</h4>
        <p class="event-sidebar__details">$${item.monthPrice} per month</p>
        <p class="event-sidebar__desc">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit
            tristique dis.</p>
    </li>
</ul>
<button class="button button--size-regular button--color-gradient event-sidebar__button" type="button">
    Join the course
</button>
`;
