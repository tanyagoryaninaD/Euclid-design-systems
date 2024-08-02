document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search').addEventListener('click', (e) => {
        document.getElementById('header__search').classList.add('header__search_show')
    })

    document.getElementById('header__search-close').addEventListener('click', (e) => {
        document.getElementById('header__search').classList.remove('header__search_show')
    })

    document.getElementById('header__search').addEventListener('submit', (e) => {
        e.preventDefault()
    })
})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search').addEventListener('click', (e) => {
        document.querySelector('header').classList.remove('open')
    })
})

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('burger').addEventListener('click', (e) => {
        document.getElementById('header__search').classList.remove('header__search_show')
    })
})

const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    a11y: {
        prevSlideMessage: 'Предыдущиый слайд',
        nextSlideMessage: 'Следующий слайд',
        lastSlideMessage: 'Это последний слайд',
        firstSlideMessage: 'Это первый слайд',
        paginationBulletMessage: 'Слайд {{index}}',
    }

});

let tabsBtn = document.querySelectorAll('.how__btn-step');
let tabsItem = document.querySelectorAll('.how__item');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn-step--active') });
        e.currentTarget.classList.add('how__btn-step--active');

        tabsItem.forEach(function (element) { element.classList.remove('how__item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('how__item--active');
    });
});

new Accordion('.accordion-container');
