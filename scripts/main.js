
//Показывать текущую дату и время
let today_text = document.querySelector(".time_now");
let dayArr = ['Saturday', 'Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function dateNow() {
	let today = new Date;
	//добавляю '0', если минуты/секунды < 10, чтобы выглядело красиво "09:05"
	let hoursAndMinutes = `${(today.getHours() < 10)? `0${today.getHours()}`: today.getHours()}:${(today.getMinutes() < 10)? `0${today.getMinutes()}`: today.getMinutes()}`;
	today_text.textContent = `${monthArr[today.getMonth()]} ${dayArr[today.getDate()]} ${hoursAndMinutes}`;
}

let showTime = setInterval(() => dateNow(), 200);

//Появление проектов

//Появление права

function traslateBlock(block, side){
	if(side == 'left'){
		block.style.transform = 'translate(-120%)';
	}
	else{
		block.style.transform = 'translate(140%)';
	}
	block.style.opacity = 0;
	setTimeout(()=>Object.assign(block.style, {
		opacity: 1,
		transform: "translate(0%)"
	}),200);
}

let hex_color = document.querySelector('.project_hexcolors');
let calc_img = document.querySelector('.calc_img');
let notes_img = document.querySelector('.notes_img');

traslateBlock(hex_color, 'right');
traslateBlock(calc_img, 'right');
traslateBlock(notes_img, 'right');


//Появление слева
let carusel_img = document.querySelector('.carusel_img');
let timer_img = document.querySelector('.timer_img');
let pogoda_img = document.querySelector('.pogoda_img');

traslateBlock(carusel_img, 'left');
traslateBlock(timer_img, 'left');
traslateBlock(pogoda_img, 'left');



