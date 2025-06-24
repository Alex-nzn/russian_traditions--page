/*----------Accordion----------*/
document.querySelectorAll('.al-faq__item').forEach((el) => {
    const content = el.querySelector('.al-faq__content');

    el.addEventListener('click', () => {
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 26 + "px";
            el.querySelector('.al-faq__plus-img').style.cssText = `transform: rotate(-0.38turn); margin-bottom: 26px`;
            el.querySelector('.al-faq__plus').style.cssText = `align-items: end;`;
        }
        else {
            el.querySelector('.al-faq__plus-img').style.cssText = `transform: rotate(0deg); `;
            el.querySelector('.al-faq__plus').style.cssText = `align-items: center;`;
            content.style.cssText = `overflow: hidden;`;
            content.style.maxHeight = "0px";
        }
    });

})

/*----//----Accordion----//----*/


/*----------Production----------*/
const initProductionAccordion = () => {
    const isMobile = window.innerWidth <= 767;

    document.querySelectorAll('.al-production__item').forEach((el) => {
        const content = el.querySelector('.al-production__item-content');
        const plus = el.querySelector('.al-production__plus-img');
        const plusWrapper = el.querySelector('.al-production__plus');

        // Удалим все предыдущие обработчики, добавляя флаг-атрибут
        el.replaceWith(el.cloneNode(true)); // Быстрое "очищение" обработчиков
    });

    document.querySelectorAll('.al-production__item').forEach((el) => {
        const content = el.querySelector('.al-production__item-content');
        const plus = el.querySelector('.al-production__plus-img');
        const plusWrapper = el.querySelector('.al-production__plus');

        if (isMobile) {
            // Начальное состояние для мобилок
            content.classList.remove('active');
            content.style.cssText = `overflow: hidden; max-height: 0; transition: max-height 0.2s ease;`;
            plus.style.transform = 'rotate(0deg)';
            plusWrapper.style.alignItems = 'center';

            el.addEventListener('click', () => {
                const isActive = content.classList.toggle('active');
                if (isActive) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    plus.style.transform = 'rotate(-0.38turn)';
                    plusWrapper.style.alignItems = 'flex-end';
                } else {
                    content.style.maxHeight = '0px';
                    plus.style.transform = 'rotate(0deg)';
                    plusWrapper.style.alignItems = 'center';
                }
            });
        } else {
            // Настольный режим — раскрыто по умолчанию
            content.classList.remove('active');
            content.style.cssText = `overflow: visible; max-height: none; transition: none;`;
            plus.style.transform = 'rotate(0deg)';
            plusWrapper.style.alignItems = 'center';
        }
    });
};

// Инициализируем при загрузке
window.addEventListener('DOMContentLoaded', initProductionAccordion);

// И при ресайзе
window.addEventListener('resize', () => {
    // Добавим debounce, чтобы не вызывалось слишком часто
    clearTimeout(window._productionResizeTimer);
    window._productionResizeTimer = setTimeout(() => {
        initProductionAccordion();
    }, 150);
});
/*----//----Production----//----*/


/*----------Project-carousel----------*/
$(document).ready(function () {
    $(".al-project-carousel-owl").owlCarousel({
        loop: true,
        margin: 19,
        nav: true,
        // center: true,
        dots: false,
        // autoWidth: true,
        navText: ['<img src = "./img/arrow_left.png" alt = "arrow_left" >',
            '<img src="./img/arrow_right.png" alt="arrow_right">'
        ],
        responsive: {
            0: { items: 1, dots: true, navText: false, },
            768: { items: 3, },
        }
    })

});
/*----//----Project-carousel----//----*/


/*----------Trust-carousel----------*/
$(document).ready(function () {
    var owl = $(".al-trust-carousel--owl").owlCarousel({
        loop: true,
        margin: 19,
        nav: true,
        dots: false,
        navText: ['<img src = "./img/arrow-left_red.png" alt = "arrow_left" >',
            '<img src="./img/arrow-right_red.png" alt="arrow_right">'
        ],
        responsive: {
            0: { items: 1, dots: true, navText: false, },
            768: { items: 4, },
        }
    });

    owl.on('resized.owl.carousel', function () {
        owl.trigger('refresh.owl.carousel');
    });
});
/*----//----Trust-carousel----//----*/




