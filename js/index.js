(() => {
    const menu = document.querySelector('#menu-burger');
    const burgerOpen = document.querySelector('#burger-btn-open');
    const burgerClose = document.querySelector('#burger-btn-close');
    const search = document.querySelector('#menu-search');
    const searchOpen = document.querySelector('#search-btn-open');
    const searchClose = document.querySelector('#search-btn-close');

    //для выпадающего списка в header
    const params = {
        activeClassName: "is-active",
        disableClassName: "is-disabled",
        btnClassName: "button-second-list",
        dropClassName: "js-drop-head"
    };

    function onDisable(e) {
        if (e.target.classList.contains(params.disableClassName)) {
            e.target.classList.remove(params.disableClassName, params.activeClassName);
            e.target.removeEventListener('animationend', onDisable);
        }
    };

    function setMenuListener() {
        document.body.addEventListener('click', (e) => {
            const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName},
      .${params.dropClassName}.${params.activeClassName}`);
            if (activeElements.length && !e.target.closest(`.${params.activeClassName}`)) {
                activeElements.forEach((current) => {
                    if (current.classList.contains(params.btnClassName)) {
                        current.classList.remove(params.activeClassName);
                    } else {
                        current.classList.add(params.disableClassName);
                    }
                });
            }
            if (e.target.closest(`.${params.btnClassName}`)) {
                const btn = e.target.closest(`.${params.btnClassName}`);
                const path = btn.dataset.path;
                const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);
                btn.classList.toggle(params.activeClassName);
                if (!drop.classList.contains(params.activeClassName)) {
                    drop.classList.add(params.activeClassName);
                    drop.addEventListener('animationend', onDisable);
                } else {
                    drop.classList.add(params.disableClassName);
                }
            }
        });
    };
    setMenuListener();


    //общая функция для свайперов
    function swiperForSection(nameClass, nextButton, prevButton, paginationName, type, countSlides, space) {

        let slide = new Swiper(nameClass, {
            // slidesPerView: 1,
            slidesPerView: countSlides,
            spaceBetween: space,
            slidesPerGroup: countSlides,
            grid: {
                rows: 1,
                fill: "row"
            },
            // spaceBetween: 20,
            pagination: {
                el: paginationName,
                type: type,
                clickable: true,
            },
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },


            // breakpoints: {
            //     576: {
            //         slidesPerView: 2,
            //         spaceBetween: 30,
            //         slidesPerGroup: 2,
            //     },
            //     768: {
            //         slidesPerView: 2,
            //         spaceBetween: 36,
            //         slidesPerGroup: 2,
            //     },
            //     1024: {
            //         slidesPerView: countSlides,
            //         spaceBetween: space,
            //         slidesPerGroup: countSlides,
            //     },
            //     1440: {
            //         slidesPerView: countSlides,
            //         spaceBetween: space,
            //         slidesPerGroup: countSlides,
            //     }
            // },
            a11y: false,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            }, // можно управлять с клавиатуры стрелками влево/вправо

            // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            slideVisibleClass: "slide-visible",

            on: {
                init: function() {
                    this.slides.forEach((slide) => {
                        if (!slide.classList.contains("slide-visible")) {
                            slide.tabIndex = "-1";
                        } else {
                            slide.tabIndex = "";
                        }
                    });
                },
                slideChange: function() {
                    this.slides.forEach((slide) => {
                        if (!slide.classList.contains("slide-visible")) {
                            slide.tabIndex = "-1";
                        } else {
                            slide.tabIndex = "";
                        }
                    });
                }
            },

        });
    };

    //Вызываем функцию checkWidth сразу, которая, в зависимости от разрешения экрана, вызывает одну и
    //ту же функцию свайпера с разным количеством столбцов и расстояния между ними
    (checkWidth)();
    window.onresize = checkWidth;

    function checkWidth() {
        if ($(window).width() >= 576 && $(window).width() < 768) {
            //свайпер для галереи
            swiperForSection('.slides-container-galery', '.galery__btn-next', '.galery__btn-prev', '.galery .galery__pagination', 'fraction', 2, 30);
            //свайпер для проектов
            swiperForSection('.slides-container-project', '.projects__btn-next', '.projects__btn-prev', '.projects .projects__pagination', 'fraction', 2, 30);
            //свайпер для событий
            swiperForSection('.swiper-3-js', '.events__btn-next', '.events__btn-prev', '.events .swiper-pagination', 'bullets', 2, 30);
        } else if ($(window).width() >= 768 && $(window).width() < 1024) {
            swiperForSection('.slides-container-galery', '.galery__btn-next', '.galery__btn-prev', '.galery .galery__pagination', 'fraction', 2, 36);
            swiperForSection('.slides-container-project', '.projects__btn-next', '.projects__btn-prev', '.projects .projects__pagination', 'fraction', 2, 36);
            swiperForSection('.swiper-3-js', '.events__btn-next', '.events__btn-prev', '.events .swiper-pagination', 'bullets', 2, 36);
        } else if ($(window).width() >= 1024 && $(window).width() < 1440) {
            swiperForSection('.slides-container-galery', '.galery__btn-next', '.galery__btn-prev', '.galery .galery__pagination', 'fraction', 2, 36);
            swiperForSection('.slides-container-project', '.projects__btn-next', '.projects__btn-prev', '.projects .projects__pagination', 'fraction', 2, 50);
            swiperForSection('.swiper-3-js', '.events__btn-next', '.events__btn-prev', '.events .swiper-pagination', 'bullets', 3, 27);
        } else if ($(window).width() >= 1440) {
            swiperForSection('.slides-container-galery', '.galery__btn-next', '.galery__btn-prev', '.galery .galery__pagination', 'fraction', 3, 50);
            swiperForSection('.slides-container-project', '.projects__btn-next', '.projects__btn-prev', '.projects .projects__pagination', 'fraction', 3, 50);
            swiperForSection('.swiper-3-js', '.events__btn-next', '.events__btn-prev', '.events .swiper-pagination', 'bullets', 3, 50);
        } else {
            swiperForSection('.slides-container-galery', '.galery__btn-next', '.galery__btn-prev', '.galery .galery__pagination', 'fraction', 1, 20);
            swiperForSection('.slides-container-project', '.projects__btn-next', '.projects__btn-prev', '.projects .projects__pagination', 'fraction', 1, 20);
            swiperForSection('.swiper-3-js', '.events__btn-next', '.events__btn-prev', '.events .swiper-pagination', 'bullets', 1, 20);
        }
    };

    //свайпер для hero
    const heroSwiper = new Swiper('.swiper-1-js', {
        loop: true,
        allowTouchMove: false,
        speed: 10000,
        effect: 'fade',
        autoplay: {
            delay: 5000
        }
    });

    //добавляем клик на кнопку открытия бургера
    burgerOpen.addEventListener('click', function() {
        menu.classList.toggle('is-active')
    });
    burgerClose.addEventListener('click', function() {
        menu.classList.toggle('is-active')
    });


    //добавляем клик на кнопку поиска
    searchOpen.addEventListener('click', function() {
        search.classList.toggle('is-active')
    });
    searchClose.addEventListener('click', function() {
        search.classList.toggle('is-active')
    });



    //селект для галереи
    const element = document.querySelector('#selectNew');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });

    //для аккордеона
    $(function() {
        $("#accordion").accordion({
            heightStyle: 'content'
        });
    });



    const arrayBtn = document.querySelectorAll('.people-item-button');
    var box = $('.painter-about');
    //для табов аккордеона
    //добавляем подсветку на текущий элемент, при этом, предыдущие элементы теряют подсветку
    arrayBtn.forEach(function(itemButton) {
        itemButton.addEventListener('click', function(event) {
            // плавный переход между художниками
            $('.people-item-button').on('click', function() {
                if (box.hasClass('hidden')) {
                    box.removeClass('hidden');
                    setTimeout(function() {
                        box.removeClass('visuallyhidden');
                    }, 20);
                } else {
                    box.addClass('visuallyhidden');
                    box.one('transitionend', function(e) {
                        box.addClass('hidden');
                    });
                }
            });
            // после клика удаляем все предыдущие классы btn-delegation
            arrayBtn.forEach(function(item) {
                item.classList.remove('btn-delegation');
            })
            event.target.classList.add('btn-delegation');
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.painter-about').forEach(function(stepButton) {
                stepButton.classList.remove('painter-active')
            });
            //добавление класса видимости соответствующему таргету
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function(currTarget) {
                currTarget.classList.add('painter-active')
            });
        })
    });

    //для тултипов
    tippy('.js-tooltip-btn', {
        moveTransition: '',
        moveTransition: 'transform 0.3s ease-out',
        theme: 'purple',
        maxWidth: 240,
    });

    // контакты

    // для карты
    ymaps.ready(init);

    function init() {
        const mapElem = document.querySelector('#map');
        const myMap = new ymaps.Map(
            "map", {
                center: [55.75846806898367, 37.60108849999989],
                zoom: 14,
                controls: ['geolocationControl', 'zoomControl']
            }, {
                suppressMapOpenBlock: true,
                geolocationControlSize: "large",
                geolocationControlPosition: { top: "200px", right: "20px" },
                geolocationControlFloat: 'none',
                zoomControlSize: "small",
                zoomControlFloat: "none",
                zoomControlPosition: { top: "120px", right: "20px" }
            }
        );

        myMap.behaviors.disable('scrollZoom');
        const myPlacemark = new ymaps.Placemark(
            [55.75846806898367, 37.60108849999989], {}, {
                iconLayout: "default#image",
                iconImageHref: "/img/pointMap.svg",
                iconImageSize: [20, 20],
                iconImageOffset: [-1, -17],
            }
        );
        myMap.geoObjects.add(myPlacemark);
        myMap.container.fitToViewport();
    }

})();