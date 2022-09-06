const burgerMenu = document.querySelector('.header__burger-wrap');
if (burgerMenu) {
    const headerNav = document.querySelector('.header__nav');
    const headerMain = document.querySelector('.header');
    burgerMenu.addEventListener("click", function (e) {
        burgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
        headerMain.classList.toggle('active');
    })
}