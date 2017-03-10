window.onload=function(){
	$('.narbar-body-left li').hover(
		function(e){
		$(this).addClass('active')},
		function(e){
			$(this).removeClass('active');
		}
	);
	$(window).scroll(function() {
	  var top=$(document).scrollTop();
	  var nav=$(".navbar");
	  console.log(nav);
	  if(top>50){
	    nav.addClass('fixNav');
	  }
	  else{
	    nav.removeClass('fixNav');
	  }
	});
}