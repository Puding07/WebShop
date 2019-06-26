let load = () => {
  let home = document.querySelector('.home'),
      shop = document.querySelector('.shop'),
      cart = document.querySelector('.cart'),
      contact = document.querySelector('.contact'),
      login = document.querySelector('.login'),
      content = document.querySelector('.content'),
      swiperContainer = document.querySelector('.swiper-container'),
      searchSnipet = document.querySelector('.search-snipet'),
      sideMenu = document.querySelector('.side-menu'),
      dropMenu = document.querySelector('#empty');
  var counter = 1,
      dropMenuCounter = 1;

  let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

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
  });

  cart.addEventListener('click', () => {
    content.innerHTML = '';
    let cartHolder = document.createElement('div');
    cartHolder.className = 'cart-holder';
    content.appendChild(cartHolder);
    for (let i = 0; i < 6; i++) {
      var cartItem = document.createElement('div'),
          itemFlex = document.createElement('div'),
          itemPicture = document.createElement('div'),
          itemName = document.createElement('div'),
          itemPrice = document.createElement('div'),
          itemDelete = document.createElement('div'),
          itemMoreInfo = document.createElement('input');
      cartItem.className = abc[i] + ' cart-item';
      itemFlex.className = 'cart-flex';
      itemPicture.className = 'item-picture';
      itemName.className = 'item-name';
      itemPrice.className = 'item-price';
      itemDelete.className = abc[i] + ' fas fa-times-circle item-del';
      //itemDelete.id = '';
      itemMoreInfo.className = abc[i] + ' more-info';
      itemMoreInfo.type = 'button';
      itemMoreInfo.value = 'More info';
      cartItem.appendChild(itemDelete);
      cartItem.appendChild(itemFlex);
      itemFlex.appendChild(itemPicture);
      itemFlex.appendChild(itemName);
      itemFlex.appendChild(itemPrice);
      itemFlex.appendChild(itemMoreInfo);
      itemPicture.innerHTML = 'fdafdsa';
      itemName.innerHTML = 'Hellovgfdg';
      itemPrice.innerHTML = '35$';
      cartHolder.appendChild(cartItem);
    }
    let summContainer = document.createElement('div'),
        summItem = document.createElement('div'),
        shippingPrice = document.createElement('div'),
        summPrice = document.createElement('div'),
        checkout = document.createElement('div');
    summContainer.className = 'summ-container';
    summItem.className = 'summ-item';
    shippingPrice.className = 'shipping-price';
    summPrice.className = 'summ-price';
    checkout.className = 'checkout';
    summContainer.appendChild(summItem);
    summContainer.appendChild(shippingPrice);
    summContainer.appendChild(summPrice);
    summContainer.appendChild(checkout);
    content.appendChild(summContainer);
    summItem.innerHTML = '105$';
    shippingPrice.innerHTML = '38.4$';
    summPrice.innerHTML = parseInt(summItem.innerHTML) + parseFloat(shippingPrice.innerHTML) + '$';
    checkout.innerHTML = 'Checkout';
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('item-del')) {
        let deleteName = event.target.className.slice(0,1);
        document.querySelector('.' + deleteName).remove();
      }
    });
  });

  contact.addEventListener('click', () => {
    content.innerHTML = '';
    let contactInfo = document.createElement('div'),
        email = document.createElement('div'),
        phone = document.createElement('div'),
        openHours = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.appendChild(email);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(openHours);
    email.innerHTML = '<span>E-mail: support@artonwork.com</span>';
    phone.innerHTML = '<span>Phone: <a href="tel:+36203912939">+36(20)391-2939</a></span>';
    openHours.innerHTML = '<span>Open hours: 7:30 AM - 5:40 PM</span>';
    content.appendChild(contactInfo);
    // Due to slow server the .load method is much slower!
    //$(content).load('./contact.html');
  });

  dropMenu.addEventListener('click', () => {
    if (dropMenuCounter % 2 != 0) {
      for (let i = 1; i <= 4; i++) {
        sideMenu.children[i].style.display = 'block';
      }
      sideMenu.style.height = '300px';
      dropMenuCounter++;
    } else {
      for (let i = 1; i <= 4; i++) {
        sideMenu.children[i].style.display = 'none';
      }
      sideMenu.style.height = '50px';
      dropMenuCounter++;
    }
  });
}

export {load};