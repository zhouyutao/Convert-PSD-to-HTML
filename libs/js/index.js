window.onload=function(){
	$('.narbar-body-left li').hover(
		function(e){
		$(this).addClass('active')},
		function(e){
			$(this).removeClass('active');
		}
	);
	
}