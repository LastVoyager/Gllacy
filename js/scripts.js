

const element = document.getElementsByClassName('left-option');
let first = document.querySelector(".options.burger-active .left-option li[name=first]");

let sent = document.querySelector(".form-button");
let popup = document.querySelector(".popup");


console.log(element);

$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.options').toggleClass('burger-active');
        $('.header-burger').toggleClass('burger-cross');
        $('body').toggleClass('lock');
    });
}); 





