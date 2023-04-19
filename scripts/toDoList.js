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
            <div class="info_about_task_filter todo_tasks">TODO</div>
            <div class="info_about_task_filter done_tasks">DONE</div>
            <div class="info_about_task_filter info_about_task_filter_active all_tasks">ALL</div>
        </div>
        <div class="task_place_div">
        
        </div>
    </div>
</div>
</div>`;


let toDO_img = document.querySelector(".notes_img");

toDO_img.addEventListener('click', () => {

    if (!(document.querySelector('.toDoList_project_wrapper'))) {
        project_place.insertAdjacentHTML("beforebegin", toDo_div);
        let add_task_btn = document.querySelector('.add_task_button');
        add_task_btn.addEventListener('click', create_task);

    }
    else {
        let current_block = document.querySelector('.toDoList_project_wrapper');
        current_block.remove();
    }
    
    let todo_tasks = document.querySelector('.todo_tasks');
    todo_tasks.addEventListener('click', filter_toDo_task);

    let done_tasks = document.querySelector('.done_tasks');
    todo_tasks.addEventListener('click', filter_done_tasks);

    let all_tasks = document.querySelector('.all_tasks');
    todo_tasks.addEventListener('click', filter_all_tasks);
});

function create_task() {
    let task_text = document.querySelector('.text-field__input');
    let task_div = `<div class="task">
    <div class = "task_done_galochka">
    <svg class="svg_toDo" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960"
        width="38">
        <path class="toDO_svg_fill" d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>

    <svg class = "svg_Done galochka_diplay" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38">
            <path class = "done_svg_fill" d="M294 814 70 590l43-43 181 181 43 43-43 43Zm170 0L240 590l43-43 181 181 384-384 43 43-427 427Zm0-170-43-43 257-257 43 43-257 257Z"/>
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

    let task_do_btn = document.querySelectorAll('.svg_toDo');
    for (let el of task_do_btn) {
        el.addEventListener('click', task_done);
    }

    let task_done_btn = document.querySelectorAll('.svg_Done');
    for (let el of task_done_btn) {
        el.addEventListener('click', task_done);
    }

    let task_delete_btns = document.querySelectorAll('.svg_delete_task');
    for (let el of task_delete_btns) {
        el.addEventListener('click', delete_task);
    }

    let tasks = document.querySelectorAll('.task');
    let task = tasks[tasks.length - 1];
    do_task_arr.push(task);

}

function delete_task() {
    let parent = findAncestor(this, 'task');
    parent.remove();
}

//здесь будут храниться заметки, чтобы отсортировывать их и выводить на экран
let done_task_arr = [];
let do_task_arr = [];

//меняем галочку Done/Do
//заносим в массивы toDo/do tasks
function task_done() {
    let do_task_galochka_place = findAncestor(this, 'task');
    let do_svg = do_task_galochka_place.querySelector('.svg_toDo');
    let done_svg = do_task_galochka_place.querySelector('.svg_Done');

    if (!(do_svg.classList.contains('galochka_diplay'))) {
        do_svg.classList.add('galochka_diplay');
        done_svg.classList.remove('galochka_diplay');


        // удаляем из toDo добавляем в done
        let task_index = do_task_arr.indexOf(do_task_galochka_place);
        do_task_arr.splice(task_index, task_index);
        done_task_arr.push(do_task_galochka_place);



    }
    else {
        do_svg.classList.remove('galochka_diplay');
        done_svg.classList.add('galochka_diplay');

        let task_index = done_task_arr.indexOf(do_task_galochka_place);
        done_task_arr.splice(task_index, task_index);
        do_task_arr.push(do_task_galochka_place);
    }

    console.log("DONE");
    console.log(done_task_arr);
    console.log('---------------');
    console.log("TODO");
    console.log(do_task_arr);
}

function findAncestor(el, cls) {

    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}


function filter_toDo_task() {
    debugger
    let allTask_arr = do_task_arr.concat(done_task_arr);
    allTask_arr.filter((elem) => {
        if(do_task_arr.includes(elem)){
            if(elem.classList.contains('galochka_diplay')){
                elem.classList.remove('galochka_diplay');
            }
        }
        else{
            elem.classList.add('galochka_diplay');
        }
    });
}

function filter_done_tasks() {
    let allTask_arr = do_task_arr.concat(done_task_arr);
    allTask_arr.filter((elem) => {
        if(done_task_arr.includes(elem)){
            if(elem.classList.contains('galochka_diplay')){
                elem.classList.remove('galochka_diplay');
            }
        }
        else{
            elem.classList.add('galochka_diplay');
        }
    });
}

function filter_all_tasks() {
    let allTask_arr = do_task_arr.concat(done_task_arr);
    allTask_arr.filter((elem) => {
            if(elem.classList.contains('galochka_diplay')){
                elem.classList.remove('galochka_diplay');
            }
    });
}