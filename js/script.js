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
document.querySelectorAll('.al-production__item').forEach((el) => {

    let content = el.querySelector('.al-production__item-content');
    let plus = el.querySelector('.al-production__plus-img');

    if (window.innerWidth < 768) {
        plus.classList.remove('active');
        content.style.cssText = `overflow: hidden `;

        el.addEventListener('click', (e) => {
            e.preventDefault();

            content.classList.toggle('active');

            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                el.querySelector('.al-production__plus-img').style.cssText = `transform: rotate(-0.38turn);`;
                el.querySelector('.al-production__plus').style.cssText = `align-items: end;`;
            }
            else {
                el.querySelector('.al-production__plus-img').style.cssText = `transform: rotate(0deg); `;
                el.querySelector('.al-production__plus').style.cssText = `align-items: center;`;
                content.style.cssText = `overflow: hidden;`;
                content.style.maxHeight = "0px";
            }
        })
    }

    if (window.innerWidth >= 768) {
        plus.classList.add('active');
        content.style.cssText = `overflow: visible `;
        content.style.cssText = `transition: none`;
    }

    window.addEventListener('resize', () => {

        if (window.innerWidth < 768) {
            plus.classList.remove('active');
            content.style.cssText = `overflow: hidden `;

            el.addEventListener('click', (e) => {
                e.preventDefault();

                content.classList.toggle('active');

                if (content.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    el.querySelector('.al-production__plus-img').style.cssText = `transform: rotate(-0.38turn);`;
                    el.querySelector('.al-production__plus').style.cssText = `align-items: end;`;
                }
                else {
                    el.querySelector('.al-production__plus-img').style.cssText = `transform: rotate(0deg); `;
                    el.querySelector('.al-production__plus').style.cssText = `align-items:center;`;
                    content.style.cssText = `overflow: hidden;`;
                    content.style.maxHeight = "0px";
                }
            })
        }

        if (window.innerWidth >= 768) {
            plus.classList.add('active');
            content.style.cssText = `overflow: visible `;
            content.style.cssText = `transition: none`;
        }
    });
})
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




