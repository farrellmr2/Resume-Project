jQuery.fn.imgAltAdder = function() { 
    var alt = this.attr('alt');
    return this.after('<span>'+alt+'</span>');
}; 

$( document ).ready(function() {
	$("img.alt").imgAltAdder();
});
