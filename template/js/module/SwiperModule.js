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
      },
    },
  });

  const swiperCampains = document.querySelectorAll(".campain-swiper");
  swiperCampains.forEach((e) => {
    const swipers = e.querySelector(".swiper");
    const pagination = e.querySelector(".swiper-pagination");
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
        },
      },
      on: {
        init: function () {
          const swiperSlide = swipers.querySelectorAll(".swiper-slide");
          const total = swiperSlide.length;
          let totalFloor = Math.floor(total / 2);
          const swiperParent = swiperSlide.parentElement;
          this.slideTo(totalFloor);

          swipers.addEventListener("mouseup", () => {
            this.slideTo(totalFloor);
          });
        },
      },
    });
  });

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

  const eleFree = document.querySelectorAll(".free-slide");

  if (eleFree) {
    eleFree.forEach((ele, i) => {
      var swiper2 = new Swiper(ele.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
          el: ele.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        loop: ele.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }

  const proSL = document.querySelector(".proDt-info-slide");
  if (proSL) {
    const sileNum = proSL.querySelectorAll(".swiper-slide").length;
    const thumbs = proSL.querySelector(".proDt-info-thumbs");
    var swiper2 = new Swiper(thumbs.querySelector(".swiper"), {
      slidesPerView: 3,
      spaceBetween: 8,
      loopedSlides: 3,
      preloadImages: !0,
      lazy: !0,
      pagination: {
        el: thumbs.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      direction: "horizontal",
      mousewheelControl: !0,
      navigation: {
        nextEl: thumbs.querySelector(".next"),
        prevEl: thumbs.querySelector(".prev"),
      },
      speed: 1000,
      autoplay: { delay: 5000, disableOnInteraction: false },
      breakpoints: {
        800: { direction: "horizontal", spaceBetween: 16, slidesPerView: 3 },
        1201: { direction: "vertical", spaceBetween: 16, slidesPerView: 3 },
      },
    });
    const main = proSL.querySelector(".proDt-info-main");
    var swiper1 = new Swiper(main.querySelector(".swiper"), {
      slidesPerView: 1,
      spaceBetween: 0,
      loopedSlides: 4,
      pagination: {
        el: main.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      navigation: {
        nextEl: main.querySelector(".next"),
        prevEl: main.querySelector(".prev"),
      },
      speed: 1000,
      autoplay: { delay: 5000 },
      effect: "coverflow",
      parallax: !0,
      grabCursor: !0,
      coverflowEffect: {
        rotate: 0.05,
        depth: 0,
        stretch: 0,
        modifier: 1,
        slideShadows: !1,
      },
      on: {
        init: function () {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            $(swiper.slides[i])
              .find(".proDt-info-item")
              .attr({
                "data-swiper-parallax": 0.9 * swiper.width,
                "data-swiper-paralalx-opacity": 0.1,
              });
          }
          let index = swiper.activeIndex;
          $(swiper.slides).removeClass("active");
          $(swiper.slides[index]).addClass("active");
        },
        transitionEnd: function () {
          let swiper = this;
          let index = swiper.activeIndex;
          $(swiper.slides).removeClass("active");
          $(swiper.slides[index]).addClass("active");
        },
        resize: function () {
          this.update();
        },
      },
      thumbs: { swiper: swiper2 },
    });
  }
}
