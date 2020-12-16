let startingItem = 3;

$(document).ready(function() {
	let carusel = $('#carousel');
	let captions = $('#captions')
	$('.carousel_data .carousel_item').each(function(){
		carusel.append( $(this).find('.image').html() );
	});
	createCarousel(carusel, captions);
	showCaption(carusel, captions);
});

function createCarousel(carusel, captions){
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .45,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
	createCustomButtons(carusel, captions);
}

function createCustomButtons(carusel, captions){

	$('.nextItem').click(function(){
		hideCaption(captions);
		carusel.roundabout('animateToNextChild', showCaption);
	});

	$('.prevItem').click(function(){
		hideCaption(captions);
		carusel.roundabout('animateToPreviousChild', showCaption);
	});

	$('div#carousel img').click(function(){
		hideCaption(captions);
	});
}

function hideCaption(captions){
	captions.animate({'opacity':0}, 250);
}

function showCaption(carusel, captions){
	var childInFocus = carusel.data('roundabout').childInFocus
	var captionHtml = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
	captions.html(captionHtml);
	var newHeight = captions.height()+'px';
	carusel.parent().animate({'height':newHeight}, 500, function(){
		captions.animate({'opacity':1}, 250);
	});

}
