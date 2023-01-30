export const createCourseTemplate = ({
  photo,
  type,
  specification,
  title,
  price,
  curator
}, view) => {
  const cardElement = document.createElement('li');
  cardElement.classList.add('courses__item');
  cardElement.innerHTML = `
          <a class="courses__link course-card course-card--${view}" href="course.html" target="_blank">
              <img class="course-card__photo" src="${photo}"
              alt="Photo of speaker Jerome Bell">
              <div class="course-card__content">
                  <p class="course-card__profession course-card__profession--badge-${type.toLowerCase()}">${specification}</p>
                  <h3 class="course-card__title">${title}</h3>
                  <span class="course-card__price">$${price}</span>
                  <span class="course-card__author">| by ${curator}</span>
              </div>
          </a>
      `;
  return cardElement;
};
