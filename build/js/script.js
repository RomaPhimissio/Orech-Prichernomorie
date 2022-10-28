// ! BurgerMenu
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

// ! VideoShowing
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

// ! VideoShowingAbout
const videoPlayShowAbout = document.querySelector('.showing-about__link-play');
const videoMovieAbout = document.querySelector('.showing-about__video');


if (videoPlayShowAbout) {
    const showIngAbout = document.querySelector('.showing-about');
    videoPlayShowAbout.addEventListener('click', function (e) {
        showIngAbout.classList.add('active');
        videoMovieAbout.play();
        videoMovieAbout.addEventListener('ended', function () {
            videoMovieAbout.load()
            showIngAbout.classList.remove('active');
        })

    })
}

// ! VideoProducer
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

// ! VideoTask
const videoPlayTask = document.querySelector('.task__link-play');
const videoMovieTask = document.querySelector('.task__video');

if (videoPlayTask) {
    const task = document.querySelector('.task');
    videoPlayTask.addEventListener("click", function (e) {
        task.classList.add('active');
        videoMovieTask.play();
        videoMovieTask.addEventListener("ended", function () {
            videoMovieTask.load()
            task.classList.remove('active');
        })
    })
}

// ! VideoNews
const videoPlayNews = document.querySelector('.news__link-play');
const videoMovieNews = document.querySelector('.news__video');

if (videoPlayNews) {
    const news = document.querySelector('.news');
    videoPlayNews.addEventListener("click", function (e) {
        news.classList.add('active');
        videoMovieNews.play();
        videoMovieNews.addEventListener("ended", function () {
            videoMovieNews.load()
            news.classList.remove('active');
        })
    })
}

// ! VideoNewsSecond
const videoPlayNewsMain = document.querySelector('.news__link-play');
const videoMovieNewsMain = document.querySelector('.news__video');

if (videoPlayNews) {
    const newsMain = document.querySelector('.news-main');
    videoPlayNews.addEventListener("click", function (e) {
        newsMain.classList.add('active');
        videoMovieNews.play();
        videoMovieNews.addEventListener("ended", function () {
            videoMovieNews.load()
            newsMain.classList.remove('active');
        })
    })
}

// ! VideoGallery
const videoPlayGalmain = document.querySelector('.gallery__link-play-main');
const videoMovieGalmain = document.querySelector('.gallery__video-main');

if (videoPlayGalmain) {
    const galMain = document.querySelector('.gallery__item-movie-main');
    videoPlayGalmain.addEventListener("click", function (e) {
        galMain.classList.add('active');
        videoMovieGalmain.play();
        videoMovieGalmain.addEventListener("ended", function () {
            videoMovieGalmain.load()
            galMain.classList.remove('active');
        })
    })
}

// ! VideoGallerySecond
const videoPlayGal = document.querySelector('.gallery__link-play-second');
const videoMovieGal = document.querySelector('.gallery__video-second');

if (videoPlayGal) {
    const gal = document.querySelector('.gallery__item-movie');
    videoPlayGal.addEventListener("click", function (e) {
        gal.classList.add('active');
        videoMovieGal.play();
        videoMovieGal.addEventListener("ended", function () {
            videoMovieGal.load()
            gal.classList.remove('active');
        })
    })
}

// ! Swiper
// инициилизируем слайдер
new Swiper('.news__list-container', {
    navigation: {
        nextEl: '.prod__btn-next',
        prevEl: '.prod__btn-prev'
    },

    // клавиатура
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    // ширина слайда
    slidesPerView: 'auto'
})