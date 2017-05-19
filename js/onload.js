window.onload = function(){
		 	 var sea = window.location.search.slice(1);
		 	 console.log(sea)
		 	 if(sea==90){
		 	 	$('.hearts-need a').removeClass('active').eq(1).addClass('active');
		 	 	$('.pills').removeClass('show').addClass('hide').eq(1).removeClass('hide').addClass('show');
		 	 }
		 }	