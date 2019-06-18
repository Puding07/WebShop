var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDhlr4PIX4ij8efnwWO3Pwsk6idZsplghk",
  authDomain: "skateshop-60fab.firebaseapp.com",
  databaseURL: "https://skateshop-60fab.firebaseio.com",
  projectId: "skateshop-60fab",
  storageBucket: "skateshop-60fab.appspot.com",
  messagingSenderId: "1017318508703",
  appId: "1:1017318508703:web:16f81c019bde80e7"
};

firebase.initializeApp(firebaseConfig);

let login = document.querySelector('.login'),
    regForm = document.querySelector('.register-form'),
    reggex = document.querySelector('#regex'),
    regusername = document.querySelector('#reguser'),
    regpassword = document.querySelector('#regpass'),
    regrepassword = document.querySelector('#regrepass'),
    send = document.querySelector('.send');

regusername.addEventListener('focus', function () {
  regusername.placeholder = '';
});

regusername.addEventListener('focusout', function () {
  regusername.placeholder = 'Username';
});

regpassword.addEventListener('focus', function () {
  regpassword.placeholder = '';
});

regpassword.addEventListener('focusout', function () {
  regpassword.placeholder = 'Password';
});

regrepassword.addEventListener('focus', function () {
  regrepassword.placeholder = '';
});

regrepassword.addEventListener('focusout', function () {
  regrepassword.placeholder = 'Password';
});

send.addEventListener('click', () => {
  if (regpassword.value === regrepassword.value) {
    firebase.auth().createUserWithEmailAndPassword(regusername.value, regpassword.value).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Code: ' + errorCode + ' Message: ' + errorMessage);
    });
    alert('Registration: Success!!');
  } else {
    alert('Password mismatch!!');
  }
});