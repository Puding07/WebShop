import Swiper from 'swiper';
let swipe = () => {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 650,
    slidesPerView: 1,
    spaceBetween: 10,
    touchRatio: 0.2,
    slideToClickedSide: true,
    effect: 'coverflow',
    grabCursor: false,
    effect: 'swipe',
    mousewheel: {
    },
    zoom: {
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  
  });
  
  mySwiper.update();
}
swipe();


let swipe2 = () => {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 650,
    slidesPerView: 2,
    spaceBetween: 60,
    touchRatio: 0.2,
    slideToClickedSide: true,
    effect: 'coverflow',
    grabCursor: true,
    effect: 'slide',
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
export {swipe};