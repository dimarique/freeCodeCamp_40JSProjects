const number = document.querySelector('.counter_number');
const bttns = document.querySelectorAll('.button');
const reset_bttn = document.querySelector('.reset_button');
let counter = 0;

bttns.forEach((button) =>
	button.addEventListener('click', (e) => {
		if (e.currentTarget.classList.contains('minus_button')) {
			counter--;
		} else if (e.currentTarget.classList.contains('plus_button')) {
			counter++;
		}

		number.textContent = counter;
		if (number.textContent > 0) {
			number.style.color = 'green';
		} else if (number.textContent < 0) {
			number.style.color = 'red';
		} else if (number.textContent == 0) {
			number.style.color = '';
		}
	})
);

reset_bttn.addEventListener('click', () => {
	counter = 0;
	number.style.color = '';
	number.textContent = counter;
});
