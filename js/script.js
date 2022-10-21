'use strict';

const slides = document.querySelectorAll('.slider__item');
const sliderControls = document.querySelectorAll('.slider__control-item');
const hiddenClassName = 'visually-hidden';
const activeControlClassName = 'slider__control-item--active';

const clearClassNames = (elements, className) => {
	for(let i = 0; i < elements.length; i++) {
		console.log(elements[i]);
		if (elements[i].classList.contains(className)) {
			elements[i].classList.remove(className);
		}
	}
};

const setClassName = (element, className) => {
	console.log(element, className);
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