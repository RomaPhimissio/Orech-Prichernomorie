// BurgerMenu
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

// VideoShowing
const videoPlayShow = document.querySelector('.showing__link-play');
const videoMovie = document.querySelector('.showing__video');


if (videoPlayShow) {
    const showIng = document.querySelector('.showing');
    videoPlayShow.addEventListener('click', function (e) {
        showIng.classList.add('active');
        videoMovie.play();
        videoMovie.addEventListener('ended', function () {
            videoMovie.load()
            showIng.classList.remove('active');
        })

    })
}

// VideoProducer
const videoPlayProd = document.querySelector('.producer__link-play');
const videoMovieProd = document.querySelector('.producer__video');

if (videoPlayProd) {
    const produCe = document.querySelector('.producer');
    videoPlayProd.addEventListener("click", function (e) {
        produCe.classList.add('active');
        videoMovieProd.play();
        videoMovieProd.addEventListener("ended", function () {
            videoMovieProd.load()
            produCe.classList.remove('active');
        })
    })
}

// Slider
// const slider = document.querySelector('.producer__slider');
// let count = 0;
// let width;

// function init() {
//     console.log('resize');
//     width = document.querySelector('.producer__slider-block').offsetWidth;
//     console.log(width);
// }

// init()