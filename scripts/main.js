
//Показывать текущую дату и время
let today_text = document.querySelector(".time_now");
let dayArr = ['Saturday', 'Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function dateNow() {
	let today = new Date;
	//добавляю '0', если минуты/секунды < 10, чтобы выглядело красиво "09:05"
	let hoursAndMinutes = `${(today.getHours() < 10)? `0${today.getHours()}`: today.getHours()}:${(today.getMinutes() < 10)? `0${today.getMinutes()}`: today.getMinutes()}`;
	today_text.textContent = `${monthArr[today.getMonth()]} ${dayArr[today.getDay()-1]} ${hoursAndMinutes}`;
}

let showTime = setInterval(() => dateNow(), 200);

//Появление проектов

//Появление права

function traslateBlock(block){
	block.classList.add('visible');
}

let left_side = document.querySelector('.left_side');
let rigth_side_box = document.querySelector('.rigth_side');


traslateBlock(left_side);
traslateBlock(rigth_side_box);


