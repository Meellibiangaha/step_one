let toDo_div = `<div class="toDoList_project_wrapper">
<div class="task_wrapper">



    <div class="text-field">
        <div class="text-field__group">
            <input class="text-field__input" type="text"  name="add_task">
            <button class="text-field__btn add_task_button" type="button">+</button>
        </div>
    </div>

    <div class="toDoList_task_column">

        <div class="toDoList_task_info_about_task">
            <div class="info_about_task_filter">TODO</div>
            <div class="info_about_task_filter">DONE</div>
            <div class="info_about_task_filter info_about_task_filter_active">ALL</div>
        </div>
        <div class="task_place_div">
        
        </div>
    </div>
</div>
</div>`;


let toDO_img = document.querySelector(".notes_img");

toDO_img.addEventListener('click', () => {

    if(!(document.querySelector('.toDoList_project_wrapper'))){
        project_place.insertAdjacentHTML("beforebegin", toDo_div);
        let add_task_btn = document.querySelector('.add_task_button');
        add_task_btn.addEventListener('click', create_task);
        
    }
    else{
        let current_block = document.querySelector('.toDoList_project_wrapper');
        current_block.remove();
    }
});

function create_task(){
    let task_text = document.querySelector('.text-field__input');
    let task_div = `<div class="task">
    <div class = "task_done_galochka">
    <svg class="svg_toDo" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960"
        width="38">
        <path class="toDO_svg_fill" d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
    </div>
    

    <div class="task_text">${task_text.value}</div>

    <svg class="svg_delete_task" xmlns="http://www.w3.org/2000/svg" height="38"
        viewBox="0 96 960 960" width="38">
        <path class="delete_svg_fill"
            d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
</div>`;
    let task_place = document.querySelector('.task_place_div');
    task_place.insertAdjacentHTML('beforebegin', task_div);
    task_text.value = '';

    let task_done_btn = document.querySelectorAll('.svg_toDo');
    for(let el of task_done_btn){
        el.addEventListener('click', task_done);
    }

    let task_delete_btns = document.querySelectorAll('.svg_delete_task');
    for(let el of task_delete_btns){
        el.addEventListener('click', delete_task);
    }
    
}

function delete_task(){
    let parent = findAncestor(this, 'task');
    parent.remove();
}

function task_done(){
    let do_task_galochka_place = findAncestor(this, 'task');
    let do_svg = do_task_galochka_place.querySelector('.svg_toDo');
    let done_svg_place = do_task_galochka_place.querySelector('.task_done_galochka');
    let done_svg = `<svg class = "svg_Done" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38">
	<path class = "done_svg_fill" d="M294 814 70 590l43-43 181 181 43 43-43 43Zm170 0L240 590l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z"/>
</svg>`;
    do_svg.remove();
    done_svg_place.insertAdjacentHTML('afterbegin', done_svg);
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}