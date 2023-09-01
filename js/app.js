new Swiper(".main__page__slider", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  simulateTouch: true,
  grabCursor: true,
  autoHeight: true,
  slidesPerView: 1,
  speed: 800,
  // Fade
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// --------------------INSTA-ICON------------------------------------------------------
let instaIconHome = document.getElementById("insta__icon__img__home");
instaIconHome.onmouseover = instaIconHome.onmouseout = insta;

let instaIconFooter = document.getElementById("insta__icon__img__footer");
instaIconFooter.onmouseover = instaIconFooter.onmouseout = insta;

function insta(event) {
  if (event.type == "mouseover") {
    event.target.style.transition = "all 0.3s ease 10s";
    event.target.src = "./img/icons/insta-hover.svg";
  }
  if (event.type == "mouseout") {
    event.target.src = "./img/icons/insta.svg";
  }
}

// --------------------------VK_ICON-----------------------------------------
let vkIconHome = document.getElementById("vk__icon__img__home");
vkIconHome.onmouseover = vkIconHome.onmouseout = vk;

let vkIconFooter = document.getElementById("vk__icon__img__footer");
vkIconFooter.onmouseover = vkIconFooter.onmouseout = vk;

function vk(event) {
  if (event.type == "mouseover") {
    event.target.style.transition = "all 0.3s ease 10s";
    event.target.src = "./img/icons/vk-hover.svg";
  }
  if (event.type == "mouseout") {
    event.target.src = "./img/icons/vk.svg";
  }
}
// --------------------FACEBOOK_ICON-------------------
let facebookIconHome = document.getElementById("facebook__icon__img__home");
facebookIconHome.onmouseover = facebookIconHome.onmouseout = facebook;

let facebookIconFooter = document.getElementById("facebook__icon__img__footer");
facebookIconFooter.onmouseover = facebookIconFooter.onmouseout = facebook;

function facebook(event) {
  if (event.type == "mouseover") {
    event.target.style.transition = "all 0.3s ease 10s";
    event.target.src = "./img/icons/facebook-hover.svg";
  }
  if (event.type == "mouseout") {
    event.target.src = "./img/icons/facebook.svg";
  }
}
// --------------------PINTEREST_ICON-------------------
let pinterestIconHome = document.getElementById("pinterest__icon__img__home");
pinterestIconHome.onmouseover = pinterestIconHome.onmouseout = pinterest;

let pinterestIconFooter = document.getElementById(
  "pinterest__icon__img__footer"
);
pinterestIconFooter.onmouseover = pinterestIconFooter.onmouseout = pinterest;

function pinterest(event) {
  if (event.type == "mouseover") {
    event.target.style.transition = "all 0.3s ease 10s";
    event.target.src = "./img/icons/pinterest-hover.svg";
  }
  if (event.type == "mouseout") {
    event.target.src = "./img/icons/pinterest.svg";
  }
}

// =====================================================

// --------------------------POP UP ------------------------------------------

let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".popup__submit__btn"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close__popup"); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active"); // И с окна
});
document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
  }
});

// =======================================================

// ----------------Inner popup---

let openInnerPopupButtons = document.querySelectorAll(".popup__submit");
let innerPopup = document.querySelector(".inner__popup");
let innerPopupBg = document.querySelector(".inner__popup__bg");
let closeInnerPopupButton = document.querySelector(".close__inner__popup"); // Кнопка для скрытия окна

openInnerPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.remove("active");
    popup.classList.remove("active");
    innerPopup.classList.add("active");
    innerPopupBg.classList.add("active");
  });
});

closeInnerPopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  innerPopupBg.classList.remove("active"); // Убираем активный класс с фона
  innerPopup.classList.remove("active"); // И с окна
});
document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === innerPopupBg) {
    // Если цель клика - фот, то:
    innerPopupBg.classList.remove("active"); // Убираем активный класс с фона
    innerPopup.classList.remove("active"); // И с окна
  }
});
