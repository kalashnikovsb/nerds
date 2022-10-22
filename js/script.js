'use strict';

const slides = document.querySelectorAll('.slider__item');
const sliderControls = document.querySelectorAll('.slider__control-item');
const hiddenClassName = 'visually-hidden';
const activeControlClassName = 'slider__control-item--active';
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.contacts__button');
const closePopupButton = document.querySelector('.popup__close');

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