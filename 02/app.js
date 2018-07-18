$(function(){
	$('article').eq(3).find('li>a').eq(3).text('pinterest').attr('href','http://www.pinterest.com');
	$('[href="#"]').on('click',function(e){
		e.preventdefault();
	});

	$('.header__main> h2').css('font-size','3em')	
});