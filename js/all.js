// images no draggable
document.getElementById('Nane').setAttribute('draggable', false);
document.getElementById('brashes').setAttribute('draggable', false);
document.getElementById('screens').setAttribute('draggable', false);
document.getElementById('logo').setAttribute('draggable', false);

// a links scroll
var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});