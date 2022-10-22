'use strict';

const slides = document.querySelectorAll('.slider__item');
const sliderControls = document.querySelectorAll('.slider__control-item');
const hiddenClassName = 'visually-hidden';
const activeControlClassName = 'slider__control-item--active';
const popup = document.querySelector('.popup');
const form = popup.querySelector('.popup__form');
const openPopupButton = document.querySelector('.contacts__button');
const closePopupButton = document.querySelector('.popup__close');
const inputName = popup.querySelector('[name=your-name]');
const inputEmail = popup.querySelector('[name=your-email]');
const inputText = popup.querySelector('.popup__textarea');
const nameStorage = localStorage.getItem('name');
const emailStorage = localStorage.getItem('email');

const clearClassNames = (elements, className) => {
	for(let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains(className)) {
			elements[i].classList.remove(className);
		}
	}
};

const setClassName = (element, className) => {
	element.classList.add(className);
};

const switchHiddenElements = (elements, index, className) => {
	for (let i = 0; i < elements.length; i++) {
		if (i === index) {
			continue;
		}
		elements[i].classList.add(className);
	}
};

sliderControls.forEach((sliderControl, currentIndex) => {
	sliderControl.addEventListener('click', (evt) => {
		evt.preventDefault();
		clearClassNames(slides, hiddenClassName);
		clearClassNames(sliderControls, activeControlClassName);
		setClassName(sliderControl, activeControlClassName);
		switchHiddenElements(slides, currentIndex, hiddenClassName);
	});
});

const openPopup = () => {
	popup.classList.remove(hiddenClassName);
	closePopupButton.addEventListener('click', closePopup);
	if (nameStorage && emailStorage) {
		inputName.value = nameStorage;
		inputEmail.value = emailStorage;
		inputText.focus();
	} else if (nameStorage) {
		inputName.value = nameStorage;
		inputEmail.focus();
	} else {
		inputName.focus();
	}
};

const closePopup = () => {
	popup.classList.add(hiddenClassName);
	openPopupButton.addEventListener('click', openPopup);
};

openPopupButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	openPopup();
});

window.addEventListener('keydown', (evt) => {
	if (!popup.classList.contains(hiddenClassName) && evt.code === 'Escape') {
		popup.classList.add(hiddenClassName);
	}
});

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	if (inputName.value) {
		localStorage.setItem('name', inputName.value);
		inputEmail.focus();
	}
	if (inputName.value && inputEmail.value) {
		localStorage.setItem('name', inputName.value);
		localStorage.setItem('email', inputEmail.value);
		inputText.focus();
	}
  console.log(inputName.value);
  console.log(inputEmail.value);
  console.log(inputText.value);
});