`use strict`;

const feedbackForm = document.querySelector(`.feedback`);
const feedbackShow = document.querySelector(`.popup--feedback`);
const feedbackButton = document.querySelector(`.contacts__btn`);
const feedbackClose = document.querySelector(`.feedback__close`);
const feedbackInput = document.querySelector(`.input--feedback`)

feedbackButton.addEventListener(`click`, function(evt) {
  evt.preventDefault();
  feedbackShow.classList.add(`popup-feedback--visible`);
})

feedbackClose.addEventListener(`click`, function(evt) {
  evt.preventDefault();
  feedbackShow.classList.remove(`popup-feedback--visible`);
  feedbackShow.classList.remove(`popup-feedback--error`);
})

window.addEventListener(`keydown`, function(evt) {
  if(evt.key === `ESC`) {
    if(feedbackShow.classList.contains(`popup-feedback--visible`)) {
      evt.preventDefault();
      feedbackShow.classList.remove(`popup-feedback--visible`);
      feedbackShow.classList.remove(`popup-feedback--error`);
    }
  }
})

feedbackForm.addEventListener(`submit`, function(evt) {
  if (!feedbackInput.value) {
    evt.preventDefault();
    feedbackShow.classList.remove(`popup-feedback--error`);
    feedbackShow.classList.add(`popup-feedback--error`);
  }
})

const ACTIVE_SLIDER_BUTTON_CLASS = `slider__button--current`;
const ACTIVE_SLIDER_ITEM_CLASS = `slider__item--current`;
const BODY_THEME_CLASS = `body-wrapper`
const currentThemeElement = document.querySelector(`.body-wrapper`);
const sliderButtons = document.querySelectorAll(`.slider__button`);
const sliderItems = document.querySelectorAll(`.slider__item`);

const slider = (evt, index) => {
  evt.preventDefault();
  sliderButtons.forEach((button) => button.classList.remove(ACTIVE_SLIDER_BUTTON_CLASS));
  evt.target.classList.add(ACTIVE_SLIDER_BUTTON_CLASS);
  sliderItems.forEach((item) => item.classList.remove(ACTIVE_SLIDER_ITEM_CLASS));
  sliderItems[index].classList.add(ACTIVE_SLIDER_ITEM_CLASS);
  currentThemeElement.classList.value = ``;
  currentThemeElement.classList.add(BODY_THEME_CLASS);
  currentThemeElement.classList.add(`theme-${index + 1}`);
}

sliderButtons.forEach((button, index) => {
  button.addEventListener(`click`, (evt) => {
    slider(evt, index)
  });
})
