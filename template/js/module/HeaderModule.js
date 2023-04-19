export default function HeaderModule() {
    const btnMenu = document.querySelector('.header-btn-menu');
    const btnClose = document.querySelector('.btn-menu-close');
    const menu = document.querySelector('.header-menu');
    const body = document.getElementsByTagName ('body')[0];
    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.add("open");
            // body.style.overflowY = "hidden";
        })
        btnClose.addEventListener('click', () => {
            menu.classList.remove("open");
            // body.style.overflowY = "auto";
        })
    }

    // Dropdown Menu
    const menuNavs = document.querySelectorAll(".header-menu .menu-nav");
    if (menuNavs) {
        menuNavs.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown > .menu-link");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="far fa-chevron-down"></i>`;
                item.innerHTML = contentNew;
            });
        });
    }

    const arrowIcon = document.querySelectorAll(
        ".menu-nav .menu-item i"
    );

    if (arrowIcon) {
        arrowIcon.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }
}