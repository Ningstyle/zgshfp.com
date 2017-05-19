$("#support").click(function(){
	
	
});
//$("#click_x").click(function(){
//	$("#tan_kuang_wrap").hide();
//	
//});

$("#shuoming_jieshao_3").click(function(){
	window.location.href="筹物.html";
});

$("#btn_1").click(function(){
	$("#obj1").show();
	
  $("#btn_1 h2").css("color","red");
  $("#btn_2 h2").css("color","black");
	 $("#btn_4 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
	$("#obj2").hide();
	$("#obj3").hide();
	$("#obj4").hide();
});
$("#btn_2").click(function(){
	$("#btn_2 h2").css("color","red");
	 $("#btn_4 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
	$("#obj2").show();
	$("#obj1").hide();
	$("#obj3").hide();
	$("#obj4").hide();
});
$("#btn_3").click(function(){
	$("#obj3").show();
	$("#btn_3 h2").css("color","red");
	 $("#btn_4 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_2 h2").css("color","black");
	$("#obj2").hide();
	$("#obj1").hide();
	$("#obj4").hide();
});
$("#btn_4").click(function(){
	$("#obj4").show();
	$("#btn_4 h2").css("color","red");
	 $("#btn_2 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
	$("#obj2").hide();
	$("#obj3").hide();
	$("#obj1").hide();
});

//点击右下角两个假的图片
$("#shuoming_jieshao_3_btn2").click(function(){
	window.open("众筹首页.html");
	
});

$("#shuoming_jieshao_3_btn3").click(function(){
		window.open("众筹首页.html");
});







//项目推荐（暂时不做
/*
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/cw/cw004/orderbytuijianList?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
	var jieshao_ = data.result.pageresult.data[0].acr065;
	var shuomingjieshao = data.result.pageresult.data[0].acr002;
	var shuomingjieshao_2 = data.result.pageresult.data[0].acr013;
	$("#pho_pho img").attr("src","http://res.zgshfp.org.cn/upload/shfp/zc/cut/20160901/20160901014027_85b32d401f0042599f3b22a3e13b0a64.jpg");
	$("#shuoming_jieshao_1").html(shuomingjieshao);
	$("#shuoming_jieshao_2").html(shuomingjieshao_2);
		
   },
   error:function(fs){
   	console.log(fs)
   }
});
*/	
//查询发起方/执行方
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/cw/cw004/supportlist?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
	console.log(data.result.pageresult.data[0].acr026);
	var obj4_wrap_touxiang= data.result.pageresult.data[3].acr026;
	var obj4_wrap_name= data.result.pageresult.data[3].acr024;
	console.log(obj4_wrap_name);
//	var shuomingjieshao = data.result.pageresult.data[0].acr002;
//	var shuomingjieshao_2 = data.result.pageresult.data[0].acr013;
//	$("#box_img_wrap img").attr("src",'http://res.zgshfp.org.cn/upload/shfp/zc/cut/'+box_img_wrap_img+'.jpg');
//$("#obj4_wrap").html('<img 'src=http:+'//res.zgshfp.org.cn/upload/shfp/zc/cut/20160901/20160901014027_85b32d401f0042599f3b22a3e13b0a64.jpg'+'/>);
//	$("#obj4_wrap span").html('<li class=li_1><span>'+obj4_wrap_name+'</span></li>');对的

//	$("#shuoming_jieshao_2").html(shuomingjieshao_2);
//		
   },
   error:function(fs){
   	console.log(fs)
   }
});



//********************************筹钱支持者********************************
var arr_acr026 = [];
var arr_acr024 = [];
var arr_afqcounts = [];

$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/cw/cw004/supportlist?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
   	console.log(data.result.pageresult.data);
	data.result.pageresult.data.forEach(function(atem){
	   		for (var x in atem){
	   				if(x==='acr026'){
	   					if(atem[x] == 1921){
	   						arr_acr026.push(atem[0]);
	   					}else if(atem[x]==661786){
	   							arr_acr026.push(atem[0])	
	   					}else{
	   						arr_acr026.push(atem[x]);
	   					}
	   						
	   				}
	   		
	   		}
	   		for (var x in atem){
	   				if(x==='acr024'){
	   					if(atem[x] === null){
	   						arr_acr024.push("爱心人士");
	   					}else{
	   						arr_acr024.push(atem[x]);
	   					}
	   				}
	   		
	   		}
	   		for (var x in atem){
	   				if(x==='afqcounts'){
	   					arr_afqcounts.push(atem[x]);
	   				}
	   		
	   		}  		 		
	   		
	   	});
	   	var arr_afqcounts_length = data.result.pageresult.data.length;
	   	for(var i = 0; i <arr_afqcounts_length ; i++ ){
	   	$("#obj4_wrap").append("<li class='li_1'><div class='left_div'><img src='http://res.zgshfp.org.cn/upload/shfp/user/"+arr_acr026[i]+".jpg'/></div><div class='right_div'><p><div class='name_div'>"+arr_acr024[i]+"</div>捐赠物品：<span class='red_span'>&nbsp;"+arr_afqcounts[i]+"&nbsp;</span>件</p></div></li>")
   	}
	   	  			
   },
   error:function(fs){
   			console.log(fs)
 		  }
});

//*************************评论区*****************************************
var arr_azr002 = [];//发布内容
 var arr_logo = [];//头像
 var arr_afr001 = [];//用户姓名
 var arr_afr003 = [];//发表时间\n
 
 //现在是提交成功
$("#btn_pinlun").click(function(){
//	alert("感谢留言，谢谢！")
console.log("留言板");
	  function Gtime(Stime,Year,Month,Dat){
    	var date = new Date(Stime);
		Y = date.getFullYear() + Year;
		M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + Month;
		D = date.getDate() + Dat+' ';
		h = date.getHours() + ':';
		m = date.getMinutes() + ':';
		s = date.getSeconds(); 
		var Time = Y+M+D+h+m+s
		return Time;
//		console.log(Time)
    }
//  console.log(Time)
var time_dangqian = new Date().getTime()
console.log(time_dangqian);
//new Date(1486347562000)
console.log(new Date(time_dangqian))
//Gtime(time_dangqian)
console.log(Gtime(time_dangqian))
console.log(new Date().toLocaleDateString());
var hahah = (new Date().toLocaleDateString()).split("/","-");
var length_time =  Gtime(time_dangqian);
var str = length_time;
var last_time = new Date().toLocaleDateString() +"  "+str.slice(18);
console.log(str.slice(18))
console.log(last_time);
	//***********************************************************传递用户评论信息给后台
var liuyanban_azr002 = $('#liuyanban').val();///留言板内容


//azr002	发布内容
//azr003	发表时间
//afr001	用户姓名
//logo	头像


//获取登录信息
    $.ajax({
    	url:"http://www.zgshfp.com.cn/shfp/user/u002/getlogonUser",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        // jsonpCallback:'success_JsonpCallback',
        
        data:{statusCode:'sss'},
        success:function(e){
        	console.log(statusCode);
        	console.log(e)
        }
    })
    //向后台提交信息
$.ajax({
      url: "http://www.zgshfp.com.cn/shfp/zc/z006/saveTopic",
      dataType: 'json',
      data: {"azr002":liuyanban_azr002,"afr001":姓名,"azr003":last_time},
      success: function(data){
     				alert(data.name); // John
    				 console.log(data.time); //  2pm
   				 }
   	 });//提交订单、、、、、、、、、、、、、、、、、、、、、、、、、、、、end
   	 
   	 
//	}
			
//});









});

$("#btn_pinlun").mouseleave(function(){
	$("#liuyanban").val("");  
})
//、、、、、、、、、、、、、、、、留言板显示










//评论区**********************************************************************************************

 var arr_azr002 = [];
 var arr_logo = [];
 var arr_afr001 = [];
 var arr_afr003 = [];
 	
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/z006/gethtList?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
   		console.log(data.result.pageresult.data);
   	
	   	data.result.pageresult.data.forEach(function(atem){
	   		for (var x in atem){
	   				if(x==='azr002'){
	   					arr_azr002.push(atem[x]);
//	   					console.log(arr_azr002);
	   						
	   				}
	   		
	   		}
	   		for (var x in atem){
	   				if(x==='logo'){
	   					if(atem[x] === null){
	   						arr_logo.push(arr_logo[1]);
	   					}else{
	   						arr_logo.push(atem[x]);
	   					}
						
//	   					arr_logo.push(atem[x]);
//	   					console.log(arr_logo);
	   						
	   				}
	   		
	   		}
	   		for (var x in atem){
	   				if(x==='afr001'){
	   					if(atem[x] == null){
	   						arr_afr001.push("爱心人士");
	   					}else {
	   						arr_afr001.push(atem[x]);
	   					}
	   					
//	   					console.log(arr_afr001);
	   						
	   				}
	   		
	   		}
	   		for (var x in atem){
	   				if(x==='azr003'){
	   					arr_afr003.push(atem[x]);
//	   					console.log(arr_afr003);
	   						
	   				}
	   		
	   		}
	   		 		
	   		
	   	});
//	   	console.log(data.result.pageresult.data.length);
	   	var length_azr002 = data.result.pageresult.data.length;
	   	for(var i = 0; i <length_azr002 ; i++ ){
	   	$("#pinglunqu").append("<li><div class='left_float'><span class='logo_liuyan'><img src='http://res.zgshfp.org.cn/upload/shfp/user/"+arr_logo[i]+"'/></span></div><div class='right_float_'><span class='name_liuyan'>"+arr_afr001[i]+"</span>：<span class='content_liuyan'>"+arr_azr002[i]+"</span><br /><span class='time_liuyan'>"+arr_afr003[i]+"<div class='woyaopinglun'><img src='../images/cjthtq.png' />&nbsp;&nbsp;我要评论</div></span></li>")
	   	
//	   	$("#pinglunqu").append("<div class='left_float'>"+"<span class='logo_liuyan'>"+"<img src='../images/头像.png'/>"+"</span>"+"</div>"+"<div class = 'right_float_' >"+"<span class='name_liuyan'>"+"名字"+"</span>"+"<span class = 'content_liuyan'>"+ 内容 +"</span>"+"<br / >"+"<span class='time_liuyan'>"+"评论时间"+"<div class='woyaopinglun'>"+"<img src='../images/cjthtq.png'/>"+"&nbsp;&nbsp;我要评论"+"</div>"+"</span>"+"</div>")
		

	   	
	   	
	   	}
	   	  			
   },
   error:function(fs){
   			console.log(fs)
 		  }
});

  function Gtime(Stime,Year,Month,Dat){
    	var date = new Date(Stime);
		Y = date.getFullYear() + Year;
		M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + Month;
		D = date.getDate() + Dat+' ';
		h = date.getHours() + ':';
		m = date.getMinutes() + ':';
		s = date.getSeconds(); 
		var Time = Y+M+D+h+m+s
		return Time;
//		console.log(Time)
    }
//  console.log(Time)
var time_dangqian = new Date().getTime()
console.log(time_dangqian);
//new Date(1486347562000)
console.log(new Date(time_dangqian))
//Gtime(time_dangqian)
console.log(Gtime(time_dangqian))
console.log(new Date().toLocaleDateString());
var hahah = (new Date().toLocaleDateString()).split("/","-");
console.log(hahah)
var length_time =  Gtime(time_dangqian);
var str = length_time;
console.log(str.slice(18))
console.log(new Date().toLocaleDateString() +"  "+str.slice(18))
var time_time_pinlunqu = (new Date().toLocaleDateString() +" "+str.slice(18)).replace("/","-");

console.log(time_time_pinlunqu)//最终结果
//str.replace(/Microsoft/, "W3School")

/////////////////////////////////////筹物滚动条///////////////////////////////////////////////////////
/*

$(document).on("mousewheel DOMMouseScroll", function (e) {
    
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

   
    if (delta > 0) {
    	// alert()
        // 向上滚
        var Scroll = $(document).scrollTop()
       if(Scroll<800){
       		$('#middle_right').css({
    			'position':'initial',
    		})
    	}else if(Scroll<3205){
        	$('#middle_right').css({
    			'position':'fixed',
    			'top':'-760px',
    			'right':'74px',
    		})
        }
        
        
    } else if (delta < 0) {
    	var Scroll = $(document).scrollTop()
    	console.log(Scroll)
    	if(Scroll>=800){
    		$('#middle_right').css({
    			'position':'fixed',
    			'top':'-760px',
    			'right':'74px',
    		})
    	}else{
    		$('#middle_right').css({
    			'position':'initial',
    		})
    	}
    	if(Scroll>=3205){
    		$('#middle_right').css({
    			'position':'fixed',
    			'top':'-1100px',
    			'right':'74px',
    		})
    	}
    		

    }
});
*/









$("#share").click(function(){
	$(".tanchu").css({"display":'block'})
})

$("#del").click(function(){
	$(".tanchu").css({"display":'none'})
})


































