/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-06 11:18:55
 * @version $Id$
 */
$(function(){
	$(document).on("mousewheel DOMMouseScroll", function (e) {
		var n =2
	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1))
	    if (delta > 0) {
	        // 向上滚
	        console.log("wheelup");
	    } else if (delta < 0) {
	        // 向下滚$(document).scrollTop()
	       setInterval(function(){
	       		if($(document).scrollTop()>0){
	       			$('.HeaderBox').css({
	       				'boxShadow':'0 0 0 #fff',
	       				'borderBottom':'1px solid #f3f3f3'
	       			})
	      		 }else{
	       			$('.HeaderBox').css({
	       				'boxShadow':'0 8px 10px #f3f3f3',
	       				'borderBottom':'none'
	       			})
	      		 }
	       })
	    }
	});
})
