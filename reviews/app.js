const people = [
	{
		firstName: 'Harry',
		lastName: 'Witt',
		image: 'img/harryWitt.jpg',
		about:
			"My name is Harry Witt and I work as a designer for about 8 years. Now I mainly do modular type & graphics and so on. I also made a lot of backgrounds and some other artworks for my friends over the years. I'm a hobby photographer as well.",
	},
	{
		firstName: 'Elysia',
		lastName: 'Trainor',
		image: 'img/elysiaTrainor.jpg',
		about:
			'My name is Elysia Trainor and I work as a designer for about 2 years. I\'ve recently gotten back into designing wedding and prom dresses. Mostly because I got back into the market after doing "girl jobs" for over a year. I still love doing design work for weddings',
	},
	{
		firstName: 'Nichola',
		lastName: 'Krause',
		image: 'img/nicholaKrause.jpg',
		about:
			"Hi, I'm Nichola Krause. I am a FrontEnd Developer in this company. I've been here for about 2 months now. In the first month, I've been asked to play with Sass as well as to create some React components. In the second month, I've been asked to create and implement one of the most used features of our frontend app: a plumber. ",
	},
	{
		firstName: 'Shannon',
		lastName: 'Seymour',
		image: 'img/shannonSeymour.jpg',
		about:
			"I'm Shannon Seymour, VC of this company. I've spent the last twelve years of my life devoting myself to art and craft. I'm not sure if this has been a good thing or not. I haven't exactly been balanced in my life but it's definitely made me a better person.",
	},
];

let picture = document.querySelector('.card_image');
let userName = document.querySelector('.card_name');
let about = document.querySelector('.card_text');
let person = 0;

const prevBttn = document.querySelector('.previous_bttn');
const nextBttn = document.querySelector('.next_bttn');

userName.textContent = `${people[person].firstName} ${people[person].lastName}`;
about.textContent = `${people[person].about}`;
picture.src = people[person].image;

prevBttn.addEventListener('click', () => {
	person = person - 1;
	if (person < 0) {
		person = 3;
	}
	userName.textContent = `${people[person].firstName} ${people[person].lastName}`;
	about.textContent = `${people[person].about}`;
	picture.src = people[person].image;
});
nextBttn.addEventListener('click', () => {
	person = person + 1;
	if (person > 3) {
		person = 0;
	}
	userName.textContent = `${people[person].firstName} ${people[person].lastName}`;
	about.textContent = `${people[person].about}`;
	picture.src = people[person].image;
});
