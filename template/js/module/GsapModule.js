export default function GsapModule() {
    let prl = $(".prl-scroll img");
    if (prl.length > 0) {
      prl.each(function () {
        let $this = $(this);
        let n = $this.outerHeight() - $this.parent().outerHeight();
        gsap.fromTo(
          $this,
          { translateY: -n },
          {
            scrollTrigger: {
              trigger: $this.parent(),
              scrub: !0,
            },
            translateY: 0,
            ease: "none",
          }
        );
      });
    }
}
