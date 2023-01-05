let today_text = document.querySelector(".time_now");
let dayArr = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function dateNow() {
	let today = new Date;
	let hoursAndMinutes = `${(today.getHours() < 10)? `0${today.getHours()}`: today.getHours()}:${(today.getMinutes() < 10)? `0${today.getMinutes()}`: today.getMinutes()}`;
	today_text.textContent = `${monthArr[today.getMonth()]} ${dayArr[today.getDate()]} ${hoursAndMinutes}`;
}

let showTime = setInterval(() => dateNow(), 100);

//Появление проектов

//Из-за того, что колонки flex-box'ов я расположил не парвильно, пришлось для каждого блока прописывать анимацию появления

//Появление права
let hex_color = document.querySelector('.project_hexcolors');
hex_color.style.transform = 'translate(140%)';
hex_color.style.opacity = 0;
setTimeout(()=>Object.assign(hex_color.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);

let calc_img = document.querySelector('.calc_img');
calc_img.style.transform = 'translate(140%)';
calc_img.style.opacity = 0;
setTimeout(()=>Object.assign(calc_img.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);

let notes_img = document.querySelector('.notes_img');
notes_img.style.transform = 'translate(140%)';
notes_img.style.opacity = 0;
setTimeout(()=>Object.assign(notes_img.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);


//Появление слева
let carusel_img = document.querySelector('.carusel_img');
carusel_img.style.transform = 'translate(-120%)';
carusel_img.style.opacity = 0;
setTimeout(()=>Object.assign(carusel_img.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);

let timer_img = document.querySelector('.timer_img');
timer_img.style.transform = 'translate(-120%)';
timer_img.style.opacity = 0;
setTimeout(()=>Object.assign(timer_img.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);


let pogoda_img = document.querySelector('.pogoda_img');
pogoda_img.style.transform = 'translate(-120%)';
pogoda_img.style.opacity = 0;
setTimeout(()=>Object.assign(pogoda_img.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);



