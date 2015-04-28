$( document ).ready(function() {
	$('.accordion-header').click(function(){
		$('.accordion-content').css('display','none');
		$(this).next().css('display','block');
	});

	$('.image-link').magnificPopup({type:'image'});
});