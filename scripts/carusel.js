let carusel_div = `<div class="carusel_project_wrapper">

<div class="carusel">
    <div class="item_prev carusel_item_prev">
        <svg style="fill: #fff; rotate: -45deg; padding-left: 4px;" xmlns="http://www.w3.org/2000/svg"
            height="24" width="24">
            <path d="M10.2 22.2 0 12 10.2 1.8l1.95 1.975L3.925 12l8.225 8.225Z" />
        </svg>
    </div>

    <div class="carusel_window">
        <div class="carusel_photki">
            <ul class="carusel_item_ul">
                <li class="carusel_item_li"><img src="img/carusel_img/1.jpg"></li>
                <li class="carusel_item_li"><img src="img/carusel_img/2.jpg"></li>
                <li class="carusel_item_li"><img src="img/carusel_img/3.jpg"></li>

                <li class="carusel_item_li"><img src="img/carusel_img/4.jpg"></li>
                <li class="carusel_item_li"><img src="img/carusel_img/5.jpg"></li>
                <li class="carusel_item_li"><img src="img/carusel_img/6.jpg"></li>
            </ul>
        </div>
    </div>
    <div class="item_next carusel_item_next">
        <svg style="fill: #fff; rotate: 45deg; padding-left: 2px;" xmlns="http://www.w3.org/2000/svg"
            height="24" width="24">
            <path d="M8.025 22.2 6.05 20.225 14.275 12 6.05 3.775 8.025 1.8l10.2 10.2Z" />
        </svg>
    </div>
</div>

</div>`;


let carusel_img = document.querySelector(".carusel_img");

carusel_img.addEventListener('click', () => {

    if (!(document.querySelector('.carusel_project_wrapper'))) {
        project_place.insertAdjacentHTML("beforebegin", carusel_div);

        //сам скрипт
        let carousel = document.querySelector('.carusel');
        // -2 это костыль в моём случае ((
        let caruselItem = document.querySelectorAll('.carusel_item_li').length - 2;
        // size_img 640x426
        let width; //size kartinki
        let count = 1;  //na skolko img prokrutka
        let list = carousel.querySelector('.carusel_item_ul');
        let listElems = carousel.querySelectorAll('.carusel_item_li');
        let position = 0;

        carousel.querySelector('.item_prev').onclick = function () {
            //clientWidth ширина картинки + padding, что удобно
            width = document.querySelector('.carusel_item_li').clientWidth;
            if (position == 0) {
                position = -width * caruselItem;
                list.style.marginLeft = position + 'px';
            }
            else {
                position += width * count;
                position = Math.min(position, 0);
                list.style.marginLeft = position + 'px';
            }

        };

        carousel.querySelector('.item_next').onclick = function () {
            width = document.querySelector('.carusel_item_li').clientWidth;
            if (position == -(width * caruselItem)) {
                position = 0;
                list.style.marginLeft = position + 'px';
            }
            else {
                position -= width * count;
                position = Math.max(position, -width * (listElems.length - count));
                list.style.marginLeft = position + 'px';
            }

        };

    }
    else {
        let current_block = document.querySelector('.carusel_project_wrapper');
        current_block.remove();
    }
});



