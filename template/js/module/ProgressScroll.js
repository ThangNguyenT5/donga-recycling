export default function ProgressScroll() {
    const header = document.querySelector(".header");
    function scrollProgress() {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        let height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector(".pg").style.width = scrolled + "%";
    }

    window.onscroll = function () {
        scrollProgress();
    };
}