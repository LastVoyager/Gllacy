

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


$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 500,
	  values: [ 0, 250 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});





