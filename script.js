let przycisk1 = document.querySelector(".button");
let przycisk2 = document.querySelector(".button2");
let kolokwium = document.querySelector(".header");

przycisk1.addEventListener('click', function click (event) {

    kolokwium.style.display='none';

});

przycisk2.addEventListener('click', function click (event) {

    kolokwium.style.display='block';

});