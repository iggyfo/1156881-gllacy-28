var feedbackForm = document.querySelector(".feedback");
var feedbackShow = document.querySelector(".popup--feedback");
var feedbackButton = document.querySelector(".contacts__btn");
var feedbackClose = document.querySelector(".feedback__close");

feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackShow.classList.add("popup-feedback--visible");
})

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackShow.classList.remove("popup-feedback--visible");
})

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(feedbackShow.classList.contains("popup-feedback--visible")) {
      evt.preventDefault();
      feedbackShow.classList.remove("popup-feedback--visible");
    }
  }
})


//slider
var currentTheme = document.querySelector("body");
var sliderItemOne = document.querySelector(".slider__item-1");
var sliderItemTwo = document.querySelector(".slider__item-2");
var sliderItemThree = document.querySelector(".slider__item-3");
var sliderButtonOne = document.querySelector(".slider__button-1");
var sliderButtonTwo = document.querySelector(".slider__button-2");
var sliderButtonThree = document.querySelector(".slider__button-3");

sliderButtonOne.addEventListener("click", function(evt) {
  sliderButtonTwo.classList.remove("slider__button--current");
  sliderButtonThree.classList.remove("slider__button--current");
  sliderButtonOne.classList.add("slider__button--current");
  currentTheme.classList.remove("theme-2");
  currentTheme.classList.remove("theme-3");
  currentTheme.classList.add("theme-1");
  sliderItemTwo.classList.remove("slider__item--current");
  sliderItemThree.classList.remove("slider__item--current");
  sliderItemOne.classList.add("slider__item--current");
})

sliderButtonTwo.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderButtonOne.classList.remove("slider__button--current");
  sliderButtonThree.classList.remove("slider__button--current");
  sliderButtonTwo.classList.add("slider__button--current");
  currentTheme.classList.remove("theme-1");
  currentTheme.classList.remove("theme-3");
  currentTheme.classList.add("theme-2");
  sliderItemOne.classList.remove("slider__item--current");
  sliderItemThree.classList.remove("slider__item--current");
  sliderItemTwo.classList.add("slider__item--current");
})

sliderButtonThree.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderButtonOne.classList.remove("slider__button--current");
  sliderButtonTwo.classList.remove("slider__button--current");
  sliderButtonThree.classList.add("slider__button--current");
  currentTheme.classList.remove("theme-1");
  currentTheme.classList.remove("theme-2");
  currentTheme.classList.add("theme-3");
  sliderItemOne.classList.remove("slider__item--current");
  sliderItemTwo.classList.remove("slider__item--current");
  sliderItemThree.classList.add("slider__item--current");
})
