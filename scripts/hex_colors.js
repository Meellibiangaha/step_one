let charArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let hex_colors_page = document.querySelector('.hex_colors_project_wrapper');
let hex_inp = document.querySelectorAll('.hex_inp');
let hex_color_button = document.querySelector('.hex_colors_project_button');
hex_color_button.addEventListener('click', () => {
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
	
});
