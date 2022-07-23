

const element = document.getElementsByClassName('left-option');
let first = document.querySelector(".options.burger-active .left-option li[name=first]");

let radio_1 = document.querySelector(".slider-point-1");
let radio_2 = document.querySelector(".slider-point-2");
let radio_3 = document.querySelector(".slider-point-3");
let image_1 = document.querySelector(".ice-cream-1");
let image_2 = document.querySelector(".ice-cream-2");
let image_3 = document.querySelector(".ice-cream-3");


console.log(element);

$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.options').toggleClass('burger-active');
        $('.header-burger').toggleClass('burger-cross');
        $('body').toggleClass('lock');
    });
}); 








