{
    let timer_div = `<div class="timer_wrapper">

<div class="time">
    00:00:00
</div>

<div class="timer_input">
    <input type="number" maxlenght = "2" min="0" max="23" class="timer_input_hours">
    <input type="number" maxlenght = "2" min="0" max="59" class="timer_input_minutes">
    <input type="number" maxlenght = "2" min="0" max="59" class="timer_input_seconds">
</div>
<div class="buttons">
    <button class="timer_buttons start">Start</button>
    <button class="timer_buttons stop">Stop</button>
    <button class="timer_buttons reset">Reset</button>
</div>

</div>`;


    let project_place = document.querySelector('.project_place');

    let hex_color_button = document.querySelector('.timer_img');
    hex_color_button.addEventListener('click', () => {
        if (!(document.querySelector('.timer_wrapper'))) {
            project_place.insertAdjacentHTML("beforebegin", timer_div);

            let timer_input = document.querySelectorAll('.timer_input > input');
            for (let el of timer_input) {
                el.addEventListener('input', () => {
                    if(/^0+/.test(el.value)){
                        el.value = el.value.replace(/^0+/, 0);
                    }
                    if (el.classList.contains('timer_input_hours')) {
                        if (el.value > 23) {
                            el.value = 23;
                        }
                        if (el.value < 0) {
                            el.value = 0;
                        }
                    }
                    else {
                        if (el.value > 59) {
                            el.value = 59;
                        }
                        if (el.value < 0) {
                            el.value = 0;
                        }
                    }
                });
            }

            let start_btn = document.querySelector('.start');
            let stop_btn = document.querySelector('.stop');
            let reset_btn = document.querySelector('.reset');

            start_btn.addEventListener('click', timer_start);
            stop_btn.addEventListener('click', timer_stop);
            reset_btn.addEventListener('click', timer_reset);
        }
        else {
            let current_block = document.querySelector('.timer_wrapper');
            current_block.remove();
        }
    });

    let interval;

    function timer_start() {
        let hours = (document.querySelector('.timer_input_hours').value == '') ? 0 : document.querySelector('.timer_input_hours').value;
        let minutes = (document.querySelector('.timer_input_minutes').value == '') ? 0 : document.querySelector('.timer_input_minutes').value;
        let seconds = (document.querySelector('.timer_input_seconds').value == '') ? 0 : document.querySelector('.timer_input_seconds').value;
        let timer = document.querySelector('.time');
        clearInterval(interval);
        interval = setInterval(() => {
            timer.textContent = `${(hours < 10) ? `0${hours}` : hours}:${(minutes < 10) ?`0${minutes}` : minutes}:${(seconds < 10) ?`0${seconds}` : seconds}`;
            if(seconds <= 0){
                if(minutes <= 0){
                    if(hours <= 0){
                        clearInterval(interval);
                    }
                    hours -= 1;
                    minutes = 60;
                }
                minutes -= 1;
                seconds = 60;
            }
           

            seconds -= 1;
        }, 1000);


    }

    function timer_stop() {
        clearInterval(interval);
    }
    function timer_reset() {
        clearInterval(interval);
        let time = document.querySelector('.time');
        time.textContent = `00:00:00`;
        let timer_input = document.querySelectorAll('.timer_input > input');
        timer_input.forEach((el)=>{
            el.value = '';
        });
    }

}