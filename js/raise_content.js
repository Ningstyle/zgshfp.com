$("#support").click(function(){
	$("#tan_kuang_wrap").show();
	$("#tan_kuang_middle input").html() == "";
	
});
$("#click_x").click(function(){
	$("#tan_kuang_wrap").hide();
	
});

$("#shuoming_jieshao_3").click(function(){
	window.location.href="筹钱.html";
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
















//点击提交表单**************************************************
$("#btn").click(function(){
		
	//判断捐款单是否为空
	if ($("#num_").val() =="" || $("#dingdanhao").val() == "" || $("#kuaidi").val() == "") {
			
			alert("请填写完整");
				return;
		}else{
			$("#tan_kuang_wrap").hide();
			$("#close_ganxie").show();
				window.setTimeout(function(){
					$("#close_ganxie").hide();
				},4000);//4秒后执行函数go
				
							

//提交订单、、、、、、、、、、、、、、、、、、、、、、、、、、、、
var jzwp = $('#jzwp').val();
var num_ = $('#num_').val();
var kuaidi = $('#kuaidi').val();
var dingdanhao = $('#dingdanhao').val();

$.ajax({
      url: "http://www.zgshfp.com.cn/shfp/zc/cw/cw004/save",
      dataType: 'json',
      data: {"acr067":jzwp,"acr073":num_,"afq013":kuaidi,"afq012":dingdanhao} ,
      success: function(data){
     			alert(data.name); // John
    			 console.log(data.time); //  2pm
 				  }
   	 });//提交订单、、、、、、、、、、、、、、、、、、、、、、、、、、、、end
   	 
   	 
	}
			
});//点击提交表单end**************************************************

//关闭按钮
$("#close_ganxie_close").click(function(){
	$("#close_ganxie").hide();
})







/*
//调用接口数据
//********************************项目推荐右下角
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

//********************************我要支持，右上角
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxquery/zc/cw/cw004/loadxmxx?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
//	console.log( data.result);
	var name_1 = data.result.xmxx[3].acr002;
	var choujizhuangtai = data.result.xmxx[3].acr018;
	var money = data.result.xmxx[3].afqcount;
	var state_left = data.result.xmxx[3].dacheng;//进度条
	var state_right = data.result.xmxx[3].acrcount;
	var progress_state_span_id1 = data.result.xmxx[3].aar020;
	var progress_state_span_id2 = data.result.xmxx[3].acr014;
	var progress_state_span_id3 = data.result.xmxx[3].aar021;//剩余时间
	
	
//	$("#pho_pho img").attr("src","http://res.zgshfp.org.cn/upload/shfp/zc/cut/20160901/20160901014027_85b32d401f0042599f3b22a3e13b0a64.jpg");
	$("#name_1").html(name_1);
//筹集状态   -----
	if(choujizhuangtai==1){
		$("#choujizhuangtai").html("未开始");
	}else if(choujizhuangtai==2){
		$("#choujizhuangtai").html("筹集中");
	}else if(choujizhuangtai==3){
		$("#choujizhuangtai").html("执行中");
	}else if(choujizhuangtai==4){
		$("#choujizhuangtai").html("已结束");
	}else{
		$("#choujizhuangtai").html("撤销");
}	
	$("#money").html(money);//已筹集物品数量
	$("#state_left span").html(state_left);//进度条 %
	$("#progress").width(state_left*$('#progress_wrap').width()/100+"px");//进度条完成率
	
	$("#state_right span").html(state_right);//捐款人数
	$("#progress_state_span_id1").html(progress_state_span_id1);//发起时间
	$("#progress_state_span_id2").html(progress_state_span_id2);//目标筹集
	//剩余时间
//	var statr = new Date(progress_state_span_id1);
//	var end_time = new Date(progress_state_span_id3);
	var aa=new Date(progress_state_span_id1);
	var y=aa.getFullYear();
	var m=aa.getMonth()+1;
	var d=aa.getDate();	
	//现在的时间
	var nn=new Date(progress_state_span_id3);
	var yn=nn.getFullYear();
	var mn=nn.getMonth()+1;
	var dn=nn.getDate();
//	alert( (yn-y)*365 + (mn-m)*30 + (dn-d)*1+"天")
	$("#progress_state_span_id3").html((yn-y)*365 + (mn-m)*30 + (dn-d)*1+"天");
   },
   error:function(fs){
   	console.log(fs)
   }
});//********************************我要支持，右上角end  ******************************



//********************************筹物支持者********************************
var arr_acr026 = [];
var arr_acr024 = [];
var arr_afqcounts = [];

$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/cw/cw004/supportlist?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
// 	console.log(data.result.pageresult.data);
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
//***********************支持者 end ****************************************



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
    	}else if(Scroll<12375){
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
    	if(Scroll>=12375){
    		$('#middle_right').css({
    			'position':'fixed',
    			'top':'-1100px',
    			'right':'74px',
    		})
    	}
    		

    }
});

 /////////////////////////////////////筹物滚动条///////////////////////////////////////////////////////
*/

$("#share").click(function(){			//点击按钮关闭分享
	$(".tanchu").css({"display":'block'})
})

$("#del").click(function(){
	$(".tanchu").css({"display":'none'})
})



//评论区**********************************************************************************************
//判断客户是否登录——————状态


//if (后台有客户数据){
//	执行评论操作
//}else {
//	alert("请登录后评论");
//}


//		判断后台数否有数据


























 var arr_azr002 = [];//发布内容
 var arr_logo = [];//头像
 var arr_afr001 = [];//用户姓名
 var arr_afr003 = [];//发表时间\n
 
 //评论区现在是提交成功
$("#btn_pinlun").click(function(){
	alert("感谢留言，谢谢！");	$("#liuyanban").val("");
	
//console.log("留言板");
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
//console.log(time_dangqian);
//new Date(1486347562000)
//console.log(new Date(time_dangqian))
//Gtime(time_dangqian)
//console.log(Gtime(time_dangqian))
//console.log(new Date().toLocaleDateString());
var hahah = (new Date().toLocaleDateString()).split("/","-");
var length_time =  Gtime(time_dangqian);
var str = length_time;
var last_time = new Date().toLocaleDateString() +"  "+str.slice(18);
//console.log(str.slice(18))
//console.log(last_time);//打印时间
	//***********************************************************传递用户评论信息给后台
var liuyanban_azr002 = $('#liuyanban').val();///留言板内容
//var liuyanban_azr001 = $('#liuyanban').val();//项目编号

var num_ = $('#num_').val();//清空
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
//      
		
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
   	 
   	 


});






//$("#btn_pinlun").mouseleave(function(){ //离开按钮清空留言板
//	$("#liuyanban").val(""); 
//})




//、、、、、、、、、、、、、、、、留言板显示——__后台调取数据
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/z006/gethtList?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
// 		console.log(data.result.pageresult.data);
   	
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
	   	
	   	}
	   	  			
   },
   error:function(fs){
   			console.log(fs)
 		  }
});

	
	
	
























//评论区**************************end********************************************************************






























