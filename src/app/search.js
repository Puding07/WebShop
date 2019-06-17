//DOM Elements
var search = document.querySelector('.search-bar'),
    erase = document.querySelector('.fa-times-circle');

//Event Listeners
erase.addEventListener('click', function() {
    search.value = "";
});