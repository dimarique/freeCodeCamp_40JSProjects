let text = document.querySelector('.content_text');
let wrapper = document.querySelector('.content_wrapper');
const randomColor = () =>
	Math.floor(Math.random() * 16777215)
		.toString(16)
		.toUpperCase();
const bttn = document.querySelector('.content_btn');
bttn.addEventListener('click', function () {
	let newColor = `#${randomColor()}`;
	wrapper.style.backgroundColor = newColor;
	text.textContent = `Background color now is ${newColor}`;
});
