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

// ! globalVideo
let srcGlobalVideo = "https://www.youtube.com/embed/_HyXo1CjmXk";

// ! VideoShowing
const videoPlayShow = document.querySelector('.showing__link-play');
const videoMovie = document.querySelector('.showing__video');

if (videoPlayShow) {
    const showIng = document.querySelector('.showing');
    videoPlayShow.addEventListener('click', function (e) {
        showIng.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovie.requestFullscreen();
            }
        }
        videoMovie.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoShowingAbout
const videoPlayShowAbout = document.querySelector('.showing-about__link-play');
const videoMovieAbout = document.querySelector('.showing-about__video');

if (videoPlayShowAbout) {
    const showIngAbout = document.querySelector('.showing-about');
    videoPlayShowAbout.addEventListener('click', function (e) {
        showIngAbout.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieAbout.requestFullscreen();
            }
        }
        videoMovieAbout.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoProducer 1
const videoPlayProd = document.querySelector('.producer__link-play1');
const videoMovieProd = document.querySelector('.producer__video-js1');
const videoBtnWrap = document.querySelector('.producer__btn-wrap');

if (videoPlayProd) {
    const produCe = document.querySelector('.producer__slide-js1');
    videoPlayProd.addEventListener("click", function (e) {
        produCe.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieProd.requestFullscreen();
            }
        }
        videoBtnWrap.style.display = "none";
        videoMovieProd.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoProducer 2
const videoPlayProd2 = document.querySelector('.producer__link-play2');
const videoMovieProd2 = document.querySelector('.producer__video-js2');

if (videoPlayProd2) {
    const produCe2 = document.querySelector('.producer__slide-js2');
    videoPlayProd2.addEventListener("click", function (e) {
        produCe2.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieProd2.requestFullscreen();
            }
        }
        videoBtnWrap.style.display = "none";
        videoMovieProd2.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoTask
const videoPlayTask = document.querySelector('.task__link-play');
const videoMovieTask = document.querySelector('.task__video');

if (videoPlayTask) {
    const task = document.querySelector('.task');
    videoPlayTask.addEventListener("click", function (e) {
        task.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieTask.requestFullscreen();
            }
        }
        videoMovieTask.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoNews
const videoPlayNews = document.querySelector('.news__link-play');
const videoMovieNews = document.querySelector('.news__video');

if (videoPlayNews) {
    const news = document.querySelector('.news');
    videoPlayNews.addEventListener("click", function (e) {
        news.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieNews.requestFullscreen();
            }
        }
        videoMovieNews.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoNewsSecond
const videoPlayNewsMain = document.querySelector('.news__link-play');
const videoMovieArticle = document.querySelector('.news__video-article');

if (videoPlayNewsMain) {
    const newsMain = document.querySelector('.news-main');
    videoPlayNewsMain.addEventListener("click", function (e) {
        newsMain.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieArticle.requestFullscreen();
            }
        }
        videoMovieArticle.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoGallery
const videoPlayGalmain = document.querySelector('.gallery__link-play-main');
const videoMovieGalmain = document.querySelector('.gallery__video-main');

if (videoPlayGalmain) {
    const galMain = document.querySelector('.gallery__item-movie-main');
    videoPlayGalmain.addEventListener("click", function (e) {
        galMain.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieGalmain.requestFullscreen();
            }
        }
        videoMovieGalmain.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoGallerySecond
const videoPlayGal = document.querySelector('.gallery__link-play-second');
const videoMovieGal = document.querySelector('.gallery__video-second');

if (videoPlayGal) {
    const gal = document.querySelector('.gallery__item-movie');
    videoPlayGal.addEventListener("click", function (e) {
        gal.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieGal.requestFullscreen();
            }
        }
        videoMovieGal.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! VideoGalleryThird
const videoPlayGalThird = document.querySelector('.gallery__link-play-third');
const videoMovieGalThird = document.querySelector('.gallery__video-third');

if (videoPlayGalThird) {
    const galThird = document.querySelector('.news-main__gal-item-wrap');
    videoPlayGalThird.addEventListener("click", function (e) {
        galThird.classList.add('active');
        if (window.innerWidth < 768) {
            if (document.fullscreenEnabled) {
                videoMovieGalThird.requestFullscreen();
            }
        }
        videoMovieGalThird.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
    })
}

// ! Primary Example Video
// const videoPlayGal = document.querySelector('.gallery__link-play-second');
// const videoMovieGal = document.querySelector('.gallery__video-second');

// if (videoPlayGal) {
//     const gal = document.querySelector('.gallery__item-movie');
//     videoPlayGal.addEventListener("click", function (e) {
//         gal.classList.add('active');
//         videoMovieGal.play();
//         videoMovieGal.addEventListener("ended", function () {
//             videoMovieGal.load()
//             gal.classList.remove('active');
//         })
//     })
// }


// ! Swiper Product
// инициилизируем слайдер
new Swiper('.product__img-wrap-main', {
    navigation: {
        nextEl: '.product__btn-right',
        prevEl: '.product__btn-left'
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

// ! Swiper News
// инициилизируем слайдер
new Swiper('.news__list-container', {
    navigation: {
        nextEl: '.news__btn-next',
        prevEl: '.news__btn-prev'
    },

    // клавиатура
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    // ширина слайда
    slidesPerView: 'auto',
    spaceBetween: 32
})

// ! Swiper Producer
// инициилизируем слайдер
new Swiper('.producer__slider', {
    navigation: {
        nextEl: '.pr__btn-next',
        prevEl: '.pr__btn-prev'
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