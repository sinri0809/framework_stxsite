$(document).ready(function () {
	const header = $('.header');
	const header_gnb = header.find('.gnb');
	const header_open = 'header_open';
	
	header_gnb.hover(function () {
		header.toggleClass(header_open);
	});
	// modal
	$('.modal').click(function(){
		$('.modal').fadeOut();
	});
});

