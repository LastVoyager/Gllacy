

const element = document.getElementsByClassName('left-option');


console.log(element);

$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.options').toggleClass('burger-active');
        $('.header-burger').toggleClass('burger-cross');
        $('body').toggleClass('lock');
    });
}); 

