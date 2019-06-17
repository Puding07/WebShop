import Swiper from 'swiper';
var mySwiper = new Swiper ('.swiper-container');
let ws = new WebSocket('ws://localhost:8080'),
    search =  document.querySelector('.search-bar'),
    erase = document.querySelector('.fa-times-circle'),
    message = '', productName = [], productPrice = [], productInfo = [], productNumber = 0,
    slideContent = [
                      document.querySelector('#slide-1'),
                      document.querySelector('#slide-2'),
                      document.querySelector('#slide-3'),
                      document.querySelector('#slide-4'),
                      document.querySelector('#slide-5')];
  
ws.onopen = () => {
  console.log('Connection established!');
};

search.addEventListener('keyup', () => {
  ws.send(search.value);
  console.log(search.value);
  if (search.value == '') {
    for (let i = 0; i < 5; i++) {
      slideContent[i].innerHTML = "";
    }
  }
});

erase.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    slideContent[i].innerHTML = "";
  }
  mySwiper.slideReset(0, true);
  mySwiper.update();
});
  
ws.onmessage = (event) => {
  mySwiper.slideReset(650, true);
  mySwiper.update();
  message = event.data;
  if (message.includes(',')) {
    productNumber = (message.match(/,/g)).length;
  } else {
    productNumber = 0;
    for (let i = 1; i <= 4; i++) {
      slideContent[i].innerHTML = '';
    }
  }
  message = message.slice(2,message.length);
  for (let i = 0; i <= productNumber; i++) {
    productName[i] = message.slice(0,message.indexOf(":")-1);
    productInfo[i] = message.slice(message.indexOf(':')+1, message.indexOf('@')-1);
    productPrice[i] = message.slice(message.indexOf('@')+2,message.indexOf(',')-1);
    if (productNumber > 1) {
      message = message.slice(message.indexOf(',')+2,message.length);
    }
  }
  for (let i = 0; i <= productNumber; i++) {
    slideContent[i].innerHTML = productName[i] + ' ' + productInfo[i] + ' Price: ' + productPrice[i] + '$';
  }
};