$(document).ready(function(){
		$(".images").on("click", ".images__image", function(){
			alert($(this).attr('alt'));
		});
})