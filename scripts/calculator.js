let calculator_div = `<div class="calculator_project_wrapper">
        <div class="calc_box">

            <div class="calc_box_top">
                <div class="calc_box_top_inputs_value"></div>
                <div class="calc_box_top_result"></div>
            </div>



            <div class="calc_box_bottom_wrapper">
                <div class="calc_box_bottom">   
                    
                        <button class="calc_light_button">C</button>
                        <button class="calc_light_button">/</button>
                        <button class="calc_light_button">x</button>
                        <button class="calc_light_button"><</button>
                        <button class="calc_dark_button">7</button>             
                        <button class="calc_dark_button">8</button>
                        <button class="calc_dark_button">9</button>
                        <button class="calc_light_button">-</button>
                        <button class="calc_dark_button">4</button>
                        <button class="calc_dark_button">5</button>         
                        <button class="calc_dark_button">6</button>
                        <button class="calc_light_button">+</button>
                        <button class="calc_dark_button">1</button>
                        <button class="calc_dark_button">2</button>
                        <button class="calc_dark_button">3</button>
                        <button class="calc_light_button calc_large">=</button>
                        <button class="calc_dark_button">%</button>
                        <button class="calc_dark_button">0</button>
                        <button class="calc_dark_button">.</button>
                    
                </div>
            </div>

        </div>
    </div>`;




calc_img.addEventListener('click', () => {

    if(!(document.querySelector('.calculator_project_wrapper'))){
        project_place.insertAdjacentHTML("beforebegin", calculator_div);
        let display = document.querySelector(".calc_box_top_inputs_value");
        let calc_buttons = document.querySelectorAll(".calc_box_bottom > button");
        buttonsBind(calc_buttons, display);
    }
    else{
        let current_block = document.querySelector('.calculator_project_wrapper');
        current_block.remove();
    }
});


function buttonsBind(nodeList, place) {

    for(let calc_button of nodeList){
        if(calc_button.textContent.match(/[0-9]/)){
            calc_button.addEventListener('click', function() {place.textContent += this.textContent;});
        }
        
        else if(calc_button.textContent.match(/[C]/)){
            calc_button.addEventListener('click', () => {place.textContent = ''});
        }
        else if(calc_button.textContent.match(/[<]/)){

            calc_button.addEventListener('click', () => {
                let value = place.textContent;
                value = value.split('');
                value.pop();
                value = value.join('');
                place.textContent = value;

            });
        }
        else if(calc_button.textContent.match(/[\/x\-+%]/)){
            calc_button.addEventListener('click', calcOperator);
        }
        else if(calc_button.textContent.match(/[.]/)){
            
        }
    }
}

function calcOperator() {
    let display = document.querySelector(".calc_box_top_inputs_value");
    let arrayValue = display.textContent.split('');
    let lastChar = arrayValue.pop();
    arrayValue = display.textContent.split('');
    if(display.textContent == ''){
        display.textContent = `0${this.textContent}`;
    }
    else if(lastChar.match(/[\/x\-+%]/)){
        arrayValue.pop();
        arrayValue.push(this.textContent);
        arrayValue = arrayValue.join('');
        display.textContent = arrayValue;
    }
    else{
        display.textContent += this.textContent;
    }
}
