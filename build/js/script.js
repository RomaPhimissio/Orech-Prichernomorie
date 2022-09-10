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

const videoPlay = document.querySelector('.showing__link');
const videoMovie = document.querySelector('.showing__video');

if (videoPlay) {
    const showIng = document.querySelector('.showing');
    videoPlay.addEventListener("click", function (e) {
        showIng.classList.add('active');
        videoMovie.play();
        videoMovie.addEventListener("ended", function () {
            videoMovie.load()
            showIng.classList.remove('active');
        })

    })


}

