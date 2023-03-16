export const createEventListTemplate = (item) => `
<ul class="event-sidebar__list">
    <li class="event-sidebar__item">
        <h4 class="event-sidebar__title">Time</h4>
        <p class="event-sidebar__details">${item.month} ${item.day}, ${item.time}</p>
        <p class="event-sidebar__desc">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
    </li>
    <li class="event-sidebar__item">
        <h4 class="event-sidebar__title">Price</h4>
        <p class="event-sidebar__details">${item.price ? ` ${item.price}$` : 'Free'}</p>
        <p class="event-sidebar__desc">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
    </li>
    <li class="event-sidebar__item">
        <a class="event-sidebar__link" href="#!">Event on Facebook</a>
    </li>
</ul>
<button class="button button--size-regular button--color-gradient event-sidebar__button" type="button">
    Join the event
</button>
`;
