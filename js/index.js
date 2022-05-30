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

    //свайпер для hero
    const heroSwiper = new Swiper('.swiper-1-js', {
        loop: true,
        allowTouchMove: false,
        slidesPerView: 3,
        speed: 10000,
        effect: 'fade',
        autoplay: {
            delay: 5000
        }
    });

    //свайпер для галереи
    const galerySwiper = new Swiper('.slides-container-galery', {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        pagination: {
            el: '.galery__pagination',
            type: 'fraction',
            clickable: true,
        },
        navigation: {
            nextEl: '.galery__btn-next',
            prevEl: '.galery__btn-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 36,
                slidesPerGroup: 2,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
            }
        },
        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        }, // можно управлять с клавиатуры стрелками влево/вправо

        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function () {
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

    //свайпер для событий
    const eventsSwiper = new Swiper('.swiper-3-js', {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        pagination: {
            el: '.events .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.events__btn-next',
            prevEl: '.events__btn-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 36,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 27,
                slidesPerGroup: 3,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
            }
        },
        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },


    });

    //свайпер для проектов
    const projectsSwiper = new Swiper('.slides-container-project', {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        pagination: {
            el: '.projects .projects__pagination',
            type: 'fraction',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects__btn-next',
            prevEl: '.projects__btn-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 36,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 2,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
            }
        },
        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function () {
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

    //добавляем клик на кнопку открытия бургера
    burgerOpen.addEventListener('click', function () {
        menu.classList.toggle('is-active')
    });
    burgerClose.addEventListener('click', function () {
        menu.classList.toggle('is-active')
    });


    //добавляем клик на кнопку поиска
    searchOpen.addEventListener('click', function () {
        search.classList.toggle('is-active')
    });
    searchClose.addEventListener('click', function () {
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
    $(function () {
        $("#accordion").accordion({
            heightStyle: 'content'
        });
    });

    const arrayBtn = document.querySelectorAll('.people-item-button');
    var box = $('.painter-about');
    //для табов аккордеона
    //добавляем подсветку на текущий элемент, при этом, предыдущие элементы теряют подсветку
    arrayBtn.forEach(function (itemButton) {
        itemButton.addEventListener('click', function (event) {
            // плавный переход между художниками
            $('.people-item-button').on('click', function () {
                if (box.hasClass('hidden')) {
                    box.removeClass('hidden');
                    setTimeout(function () {
                        box.removeClass('visuallyhidden');
                    }, 20);
                } else {
                    box.addClass('visuallyhidden');
                    box.one('transitionend', function (e) {
                        box.addClass('hidden');
                    });
                }
            });
            // после клика удаляем все предыдущие классы btn-delegation
            arrayBtn.forEach(function (item) {
                item.classList.remove('btn-delegation');
            })
            event.target.classList.add('btn-delegation');
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.painter-about').forEach(function (stepButton) {
                stepButton.classList.remove('painter-active')
            });
            //добавление класса видимости соответствующему таргету
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (currTarget) {
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