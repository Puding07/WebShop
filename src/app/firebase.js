let firebaseMain = () => {
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


  let logout = document.querySelector('.logout');

  logout.addEventListener('click', () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.querySelector('.login').style.display = 'none';
      document.querySelector('.logout').style.display = 'block';
      document.querySelector('.content').innerHTML = '';
    } else {
      // No user is signed in.
      document.querySelector('.login').style.display = 'block';
      document.querySelector('.logout').style.display = 'none';
    }
  });
};

export {firebaseMain};

firebaseMain();