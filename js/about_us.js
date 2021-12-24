// Scroll Action to make sticky navbar and change active state
$( window ).scroll(function() {

	 // If element is scrolled into view, do actions
	$('.animate__animated').each(function() {

        if (isScrolledIntoView(this) === true) {
      	
        //apply animation
        if($(this).hasClass('effect_sil')){
            $(this).addClass('animate__slideInLeft');
        }else if($(this).hasClass('effect_sir')){
            $(this).addClass('animate__slideInRight');
        }else if($(this).hasClass('effect_bid')){
            $(this).addClass('animate__backInDown');
        }

      }
    });
});

//FOOTER
$("a.animate__bounce").on({
    mouseenter: function () {
        $(this).addClass('animate__bounce');
        $(this).addClass('animate__infinite');
        $(this).addClass('infinite');
    },
    mouseleave: function () {
        $(this).removeClass('animate__bounce');
        $(this).removeClass('animate__infinite');
        $(this).removeClass('infinite');
    }
});

const isScrolledIntoView = (elem) => {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
