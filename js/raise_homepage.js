//点击切换

//$("#ul_name li").mouseover(function(){
//	$(this).css("color","#CB4240")
//})
//


//$("#ul_name li").click(function(){
//	$(this).css("color","CB4240")
//})
//$("#ul_name li").mouseleave(function(){
//	$(this).css("color","")
//})


//$("#li0").mouseover(function(){
////	$("#li0 .show_black").css("display","block");
//	$("#li0 .show_red").css("display","block");
//	$("#li0 .show_red").css("display","none");
//	$("#li0").css("color","#666666")
$("#li0").click(function(){
	$("#li0 .show_red").css("display","block")
	$("#li1 .show_red").css("display","none")
	$("#li2 .show_red").css("display","none")
	$("#li3 .show_red").css("display","none")
	$("#li4 .show_red").css("display","none")
	$("#li0").css("color","#CB4240");
	$("#li1").css("color","black");
	$("#li2").css("color","");
	$("#li3").css("color","");
	$("#li4").css("color","");
	$("#all_all").css("display","block");
	$("#gyjz").css("display","none");
	$("#yljz").css("display","none");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","none");
});

$("#li1").click(function(){
	$("#li0 .show_red").css("display","none")
	$("#li1 .show_red").css("display","block")
	$("#li2 .show_red").css("display","none")
	$("#li3 .show_red").css("display","none")
	$("#li4 .show_red").css("display","none")
	$("#li1").css("color","#CB4240");
	$("#li0").css("color","black");
	$("#li2").css("color","");
	$("#li3").css("color","");
	$("#li4").css("color","");
	$("#all_all").css("display","none");
	$("#gyjz").css("display","block");
	$("#yljz").css("display","none");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","none");
});
$("#li2").click(function(){
	$("#li0 .show_red").css("display","none")
	$("#li2 .show_red").css("display","block")
	$("#li1 .show_red").css("display","none")
	$("#li3 .show_red").css("display","none")
	$("#li4 .show_red").css("display","none")
	$("#li2").css("color","#CB4240");
	$("#li1").css("color","");
	$("#li0").css("color","black");
	$("#li3").css("color","");
	$("#li4").css("color","");
	$("#all_all").css("display","none");
	$("#gyjz").css("display","none");
	$("#yljz").css("display","block");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","none");
});
$("#li3").click(function(){
	$("#li0 .show_red").css("display","none")
	$("#li3 .show_red").css("display","block")
	$("#li1 .show_red").css("display","none")
	$("#li2 .show_red").css("display","none")
	$("#li4 .show_red").css("display","none")
	$("#li3").css("color","#CB4240");
	$("#li1").css("color","");
	$("#li0").css("color","black");
	$("#li2").css("color","");
	$("#li4").css("color","");
	$("#all_all").css("display","none");
	$("#gyjz").css("display","none");
	$("#yljz").css("display","none");
	$("#jyzz").css("display","block");
	$("#cyfz").css("display","none");
});
$("#li4").click(function(){
	$("#li0 .show_red").css("display","none")
	$("#li4 .show_red").css("display","block")
	$("#li1 .show_red").css("display","none")
	$("#li2 .show_red").css("display","none")
	$("#li3 .show_red").css("display","none")
	$("#li4").css("color","#CB4240");
	$("#li1").css("color","");
	$("#li0").css("color","black");
	$("#li2").css("color","");
	$("#li3").css("color","");
	$("#all_all").css("display","none");
	$("#gyjz").css("display","none");
	$("#yljz").css("display","none");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","block");
});

//});
//$("#li0").mouseleave(function(){
////	$("#li0 .show_red").css("display","none");
////	$("#li0").css("color","#666666")
//});




//$("#li1").mouseover(function(){
//	$("#li1 .show_red").css("display","block");
//	$("#li0 .show_red").css("display","none");
////	$("#li0").css("color","#666666")
$("#li1").click(function(){
	$("#li1 .show_red").css("display","block")
	$("#gyjz").css("display","block");
	$("#all_all").css("display","none");
	$("#yljz").css("display","none");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","none");

	
//});
});
//$("#li1").mouseleave(function(){
//	$("#li1 .show_red").css("display","none")
//});

$("#gyjz li").click(function(){
	window.open('筹物.html');
});
$("#yljz li").click(function(){
	window.open('筹钱.html');
});











$("#li2").click(function(){
	$("#li2 .show_red").css("display","block");
	$("#gyjz").css("display","none");
	$("#all_all").css("display","none");
	$("#yljz").css("display","block");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","none");
//	window.open('筹物.html');
	

	
});
//$("#li2").mouseover(function(){
//	$("#li2 .show_red").css("display","block");
//	$("#li0 .show_red").css("display","none");
//});
//$("#li2").mouseleave(function(){
//	$("#li2 .show_red").css("display","none")
//})
$("#li3").click(function(){
	$("#li3 .show_red").css("display","block");
	$("#gyjz").css("display","none");
	$("#yljz").css("display","none");
	$("#all_all").css("display","none");
	$("#jyzz").css("display","block");
	$("#cyfz").css("display","none");
	
});
//$("#li3").mouseover(function(){
//	$("#li3 .show_red").css("display","block");
//	$("#li0 .show_red").css("display","none");
//});
//$("#li3").mouseleave(function(){
//	$("#li3 .show_red").css("display","none")
//})
$("#li4").click(function(){
	$("#li4 .show_red").css("display","block");
	$("#gyjz").css("display","none");
	$("#yljz").css("display","none");
	$("#all_all").css("display","none");
	$("#jyzz").css("display","none");
	$("#cyfz").css("display","block");
	
});
//$("#li4").mouseover(function(){
//	$("#li4 .show_red").css("display","block");
//	$("#li0 .show_red").css("display","none");
//});
//$("#li4").mouseleave(function(){
//	$("#li4 .show_red").css("display","none")
//})


//点击教育扶助和创业扶助
$("#jyzz_li_btn").click(function(){
	$("#jyzz").css("display","block");
	$("#all_all").hide()

});



$("#cyfz_li_btn").click(function(){
	$("#cyfz").css("display","block");
	$("#all_all").hide()

});



//********************************首页筹物列表
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxpagequery/zc/cw/cw004/getcwList?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
	console.log(  data.result.pageresult.data);
//	var name_1 = data.result.pageresult.data[3].acr002;
//	var all_big_num =  data.result.pageresult.data[3].acr014;
	var money = data.result.pageresult.data[0].afqcount;
	var state_left = data.result.pageresult.data[0].dacheng;//进度条
	var choujirenshu = data.result.pageresult.data[0].acrcount;
//	$("#gyjz .name_name").html(name_1);

//	$("#gyjz .number_ .number_1").html(money);//已筹集物品数量
//	$("#gyjz .number_ .number_2").html(all_big_num);//筹集总数
//	$("#gyjz .number_ .number_3").html(choujirenshu);//筹集人数?   捐款人数??√
//	$("#gyjz .jdt").html(state_left);//进度条 %
	$("#gyjz .jdt").width(state_left*$('#gyjz .jdt_wrap').width()/100+"px");//进度条完成率

   },
   error:function(fs){
   	console.log(fs)
   }
});








//********************************首页筹总列表
/*
var acr018 = [];//筹集状态
var acr065 = [];//图片
var acr002 = [];//项目名称
var dacheng = [];//达成率
var afqcount = [];//已筹物品
var acrcount = [];//支持人数


var 
*/
$.ajax({
   type: "get",
   url: "http://www.zgshfp.com.cn/shfp/ajaxquery/zc/cw/cw004/loadxmxx?callback=?",
   dataType:'jsonp',
   jsonp:'jsonpCallback',
   success: function(data){
   	
   	console.log( data.result);
   	console.log( data.result.xmxx[3].acr018);
   	console.log( data.result.xmxx[3].dacheng);
	var name_1 = data.result.xmxx[3].acr002;//--
	var choujizhuangtai = data.result.xmxx[3].acr018;//--
	var money = data.result.xmxx[3].afqcount;
	var state_left = data.result.xmxx[3].dacheng;//进度条-%--------
	var state_right = data.result.xmxx[3].acrcount;
	var progress_state_span_id1 = data.result.xmxx[3].aar020;
	var progress_state_span_id2 = data.result.xmxx[3].acr014;
	var progress_state_span_id3 = data.result.xmxx[3].aar021;//剩余时间

	$("#number_1_id").html(state_left);//进度条 %
	$("#progress").width(state_left*$('#progress_wrap').width()/100+"px");//进度条完成率
	
	$("#name_1").html(name_1);
//筹集状态   -----
	if(choujizhuangtai==1){
		$(".zhuangtai_list").css("background","url(../images/筹备中.png)")
	}else if(choujizhuangtai==2){
		$(".zhuangtai_list").css("background","url(../images/筹集中.png)")
	}else if(choujizhuangtai==3){
		$(".zhuangtai_list").css("background","url(../images/执行中.png)")
	}else if(choujizhuangtai==4){
		$(".zhuangtai_list").css("background","url(../images/已结束.png)")
	}
//	$("#money").html(money);//已筹集物品数量
	$("#state_left span").html(state_left);//进度条 %----------------------------
	$("#progress").width(state_left*$('#progress_wrap').width()/100+"px");//进度条完成率-----------------------
	
//	$("#state_right span").html(state_right);//捐款人数


		
$("#all_all").prepend("<li><a href='筹钱.html'><div><img src='../images/eye___smli.PNG'/>"+"<p class='name_name'>"+"光明扶贫众筹&nbsp;&nbsp;为贫困患者送光明"+"</p>"+"<p class='jdt_wrap'><span class='jdt' style='width:0px'></span></p><p class='number_'><span class='number_1'>0%</span><span class='number_2'>"+0+"</span><span class='number_3'>"+0+"</span></p><p class='shuoming'><span class='number_1'>达成率</span><span class='number_2'>已筹金额</span><span class='number_3'>支持人数</span></p></div></a></li>");

//筹物列表——手机项目
//$("#all_all").prepend("<li><a href='筹物.html'><div><img src='http://res.zgshfp.org.cn/upload/shfp/zc/cut/20170407/20170407101504_11877b8fbae74b4680b7755ace1e5831.jpg'/>"+"<p class='name_name'>"+name_1+"</p>"+"<p class='jdt_wrap'><span class='jdt' id='jdt_id'></span></p><p class='number_'><span class='number_1' id='number_1_id'>"+state_left+"%</span><span class='number_2'>"+money+"</span><span class='number_3'>"+state_right+"</span></p><p class='shuoming'><span class='number_1'>达成率</span><span class='number_2'>已筹物品</span><span class='number_3'>支持人数</span></p></div></a></li>");
$("#all_all").prepend("<li><a href='筹物.html'><div><img src='../images/修改电话小图.PNG'/>"+"<p class='zhuangtai_list'>"+"</p>"+"<p class='name_name'>"+name_1+"</p>"+"<p class='jdt_wrap'><span class='jdt' id='jdt_id'></span></p><p class='number_'><span class='number_1' id='number_1_id'>"+state_left+"%</span><span class='number_2'>"+money+"</span><span class='number_3'>"+state_right+"</span></p><p class='shuoming'><span class='number_1'>达成率</span><span class='number_2'>已筹物品</span><span class='number_3'>支持人数</span></p></div></a></li>");





$("#yljz").prepend("<li><a href='筹钱.html'><div><img src='../images/eye___smli.PNG'/>"+"<p class='name_name'>"+"光明扶贫众筹&nbsp;&nbsp;为贫困患者送光明"+"</p>"+"<p class='jdt_wrap'><span class='jdt' style='width:0px'></span></p><p class='number_'><span class='number_1'>0%</span><span class='number_2'>"+0+"</span><span class='number_3'>"+0+"</span></p><p class='shuoming'><span class='number_1'>达成率</span><span class='number_2'>已筹金额</span><span class='number_3'>支持人数</span></p></div></a></li>");
$("#gyjz").prepend("<li><a href='筹物.html'><div><img src='../images/修改电话小图.PNG'/>"+"<p class='zhuangtai_list'>"+"</p>"+"<p class='name_name'>"+name_1+"</p>"+"<p class='jdt_wrap'><span class='jdt' id='jdt_id'></span></p><p class='number_'><span class='number_1' id='number_1_id'>"+state_left+"%</span><span class='number_2'>"+money+"</span><span class='number_3'>"+state_right+"</span></p><p class='shuoming'><span class='number_1'>达成率</span><span class='number_2'>已筹物品</span><span class='number_3'>支持人数</span></p></div></a></li>");

   },  
   error:function(fs){
   	console.log(fs)
   }
});













































