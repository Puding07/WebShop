let load = () => {
  let home = document.querySelector('.home'),
      shop = document.querySelector('.shop'),
      cart = document.querySelector('.cart'),
      contact = document.querySelector('.contact'),
      login = document.querySelector('.login'),
      content = document.querySelector('.content'),
      swiperContainer = document.querySelector('.swiper-container'),
      searchSnipet = document.querySelector('.search-snipet');
  var counter = 1;

  login.addEventListener('click', () => {
    console.log(counter);
    if (counter % 2 == 0) {
      content.innerHTML = "";
      $(content).load('./register.html');
      login.innerHTML = "Login";
      counter++;
      function closeRegister() {
        let regForm = document.querySelector('.register-form'),
          reggex = document.querySelector('#regex');
        reggex.addEventListener('click', function() {
          regForm.style.display = "none";
          login.innerHTML = "Login";
          counter = 1;
        });
      };
      setTimeout(closeRegister, 500);
  } else 
  {
      content.innerHTML = "";
      $(content).load('./login.html');
      login.innerHTML = "Register";
      counter--;
      function closeLogin() {
        let loginForm = document.querySelector('.login-form'),
          logex = document.querySelector('#logex');
        logex.addEventListener('click', function() {
          loginForm.style.display = "none";
          login.innerHTML = "Login";
          counter = 1;
        });
      };
      setTimeout(closeLogin, 500);
  }
  });

  if (document.querySelector('.logout').style.display = 'block') {
    login.innerHTML = "Login";
    counter = 1;
  }

  home.addEventListener('click', () => {
    content.innerHTML = "";
  });

  shop.addEventListener('click', () => {
    content.innerHTML = "";
    $(content).load('./shop.html');
    //$(content).load('./product-content.html');
    /*$(swiperContainer).load('./product-content.html');
    $(searchSnipet).load('./search.html');*/
    swiperContainer.style.display = 'block';
  });
}

export {load};