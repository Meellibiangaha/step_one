//конструктор
//Можно было просто менять display none -> block, но я захотел создавать html через js
let hex_div = `<div class="hex_colors_project_wrapper">
		<div style="width:80%">Нажми на кнопку и фон страницы поменяется на случайный или введи нужный градиент сам</div>
		<br>
		<div class="hex_colors_project_current_color">background: linear-gradient(to right, #ffffff, #ffffff);</div>

		<div class="hex_colors_project_inputs">
			<input maxlength="6" class="hex_inp" type="text" placeholder="Например ffffff">
			<input maxlength="6" class="hex_inp" type="text" placeholder="Например ffffff">
		</div>

		<div>
			<button class="hex_colors_project_button">Сгенерировать</button>
		</div>
	</div>`;


let project_place = document.querySelector('.project_place');

let hex_color_button = document.querySelector('.project_hexcolors');
hex_color_button.addEventListener('click', () => {
	if(!(document.querySelector('.hex_colors_project_wrapper'))){
		project_place.insertAdjacentHTML("beforebegin", hex_div);

		let hex_color_button = document.querySelector('.hex_colors_project_button');
		hex_color_button.addEventListener('click',hexColorGenerate);
	}
	else{
		let current_block = document.querySelector('.hex_colors_project_wrapper');
		current_block.remove();
	}
});


let charArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function hexColorGenerate() {
	let hex_colors_page = document.querySelector('.hex_colors_project_wrapper');
	let hex_inp = document.querySelectorAll('.hex_inp');
	let randInd = '';
	let newHex1 = '';
	let newHex2 = '';
	if(hex_inp[0].value.length >= 3 && hex_inp[1].value.length >= 3){
		if(hex_inp[0].value.length % 3 == 0 && hex_inp[1].value.length % 3 == 0){
			newHex1 = hex_inp[0].value;
			newHex2 = hex_inp[1].value;
			hex_colors_page.style.background = `linear-gradient(to right, #${newHex1}, #${newHex2})`;
		}
		else if(hex_inp[0].value.length % 3 == 0 && hex_inp[0].value.length % 3 != 0){ 
			hex_colors_page.style.background = `linear-gradient(to right, #${newHex1}, #ffffff)`;
			newHex1 = hex_inp[0].value;
			newHex2 = 'ffffff';
		}

		else{
			hex_colors_page.style.background = `linear-gradient(to right, #ffffff, #${newHex2})`;
			newHex1 = 'ffffff';
			newHex2 = hex_inp[1].value;
		}
	}
	else{
		for(let i = 0; i < 6; i++){
			randInd = Math.floor(Math.random() * charArr.length);
			newHex1 += charArr[randInd];
			randInd = Math.floor(Math.random() * charArr.length);
			newHex2 += charArr[randInd];
		}
		
	}
	hex_colors_page.style.background = `linear-gradient(to right, #${newHex1}, #${newHex2})`;
	document.querySelector('.hex_colors_project_current_color').textContent = `linear-gradient(to right, #${newHex1}, #${newHex2});`;
}

