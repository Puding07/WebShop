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
    loginForm = document.querySelector('.login-form'),
    logex = document.querySelector('#logex'),
    logusername = document.querySelector('#loguser'),
    logpassword = document.querySelector('#logpass'),
    send = document.querySelector('.send');


logusername.addEventListener('focus', function () {
    logusername.placeholder = '';
});
  
logusername.addEventListener('focusout', function () {
    logusername.placeholder = 'Username';
});
  
  
logpassword.addEventListener('focus', function () {
    logpassword.placeholder = '';
});
  
logpassword.addEventListener('focusout', function () {
    logpassword.placeholder = 'Password';
});

send.addEventListener('click', () => {
  firebase.auth().signInWithEmailAndPassword(logusername.value, logpassword.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Code: ' + errorCode + ' Message: ' + errorMessage);
  });
});