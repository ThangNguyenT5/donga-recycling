export default function AnimatedModule() {
  let $window = $(window);

  function scrollAddClass(el, className) {
    $(el).each(function () {
      let el = this;
      if (
        $(el).offset().top <
        $window.scrollTop() + ($window.height() / 10) * 8
      ) {
        $(el).addClass(className);
      }
    });
  }

  function bindImageAnimations() {
    scrollAddClass(".load-img", "is-inview");
    scrollAddClass(".load-img-second", "is-inview");
    scrollAddClass(".load-img-third", "is-inview");

    $window.on("scroll", function () {
      scrollAddClass(".load-img", "is-inview");
      scrollAddClass(".load-img-second", "is-inview");
      scrollAddClass(".load-img-third", "is-inview");
    });
  }
  bindImageAnimations();

  // Scroll tranform
  let itemMoves = document.querySelectorAll(".move-item");
  let _h = window.innerHeight;
  if (itemMoves.length > 0 && window.innerWidth > 1024) {
    window.addEventListener("scroll", () => {
      itemMoves.forEach((el) => {
        let pos = el.getBoundingClientRect().top;
        if (pos > -_h / 2 && pos < _h) {
          let Y = (pos / _h) * 100;
          el.style.transform = `translateX(` + Y + `px)`;
        }
      });
    });
  }

  const loadMap = document.querySelectorAll(".load-map");
  if (loadMap) {
    loadMap.forEach((item) => {
      const map = item.querySelector("iframe");
      map.addEventListener("load", () => {
        item.classList.add("is-inview");
      });
    });
  }

  var Emblem = {
    init: function (el, str) {
      var element = document.querySelector(el);
      if (element) {
        var text = str ? str : element.innerHTML;
        element.innerHTML = "";
        for (var i = 0; i < text.length; i++) {
          var letter = text[i];
          var span = document.createElement("span");
          var node = document.createTextNode(letter);
          var r = (360 / text.length) * i;
          var x = (Math.PI / text.length).toFixed(0) * i;
          var y = (Math.PI / text.length).toFixed(0) * i;
          span.appendChild(node);
          span.style.webkitTransform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
          span.style.transform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
          element.appendChild(span);
        }
      }
    },
  };

  Emblem.init(".emblemJS");
}
