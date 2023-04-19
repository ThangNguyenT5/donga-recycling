export default function SwiperModule() {
    var swiperTime = new Swiper(".home-time-swiper .swiper", {
        slidesPerView: 2,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
            el: ".home-time-swiper .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            450: {
                slidesPerView: 3,
                spaceBetween: 1,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 1,
            },
            930: {
                slidesPerView: 5,
                spaceBetween: 1,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 1,
            }
        }
    });


    const swiperCampains = document.querySelectorAll('.campain-swiper')
    swiperCampains.forEach(e => {
        const swipers = e.querySelector('.swiper');
        const pagination = e.querySelector('.swiper-pagination');
        var swiperCampain = new Swiper(swipers, {
            slidesPerView: 1,
            spaceBetween: 8,
            centeredSlides: true,
            initialSlide: 3,
            // touchStartPreventDefault: false,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: pagination,
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                450: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                930: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 60,
                }
            },
            on: {
                init: function () {
                    const swiperSlide = swipers.querySelectorAll('.swiper-slide')
                    const total = swiperSlide.length;
                    let totalFloor = Math.floor(total / 2)
                    const swiperParent = swiperSlide.parentElement
                    this.slideTo(totalFloor)

                    swipers.addEventListener('mouseup', ()=> {
                        this.slideTo(totalFloor)
                    })
                },

            }
        });


    })

    var swiperHomeBanner = new Swiper(".productSwiper", {
        spaceBetween: 10,
        autoplay: {
            delay: 500000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: false,
        keyboard: true,
      });
}