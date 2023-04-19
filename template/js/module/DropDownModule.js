export default function DropDownModule() {

    // Categories
    const menuNavs = document.querySelectorAll(".catelogy-menu");
    if (menuNavs) {
        console.log(menuNavs);
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
        ".catelogy-menu .menu-item i"
    );
    console.log(arrowIcon);

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