  
$(function(){
  //获取登录信息
    $.ajax({
        url:addr1.a+"/shfp/user/u002/getlogonUser",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        // jsonpCallback:'success_JsonpCallback',
        success:function(e){
          var data = e.result.result
          if(data){
            $('.Bangzhu').empty()
            var html = ''
            html+='<a href="/user/usercenters.html"target="_back">用户中心</a><span class="LineS"></span><a href="javascript:;"" class="Out">退出登录</a>'
            $('.Bangzhu').append(html)
            $('.Hellp').css({'width':'250px'})
          }
          if(data==null){
          	$('.Bangzhu').empty()
            var html1 = ''
            html1+='<a href="/user/usercenters.html"target="_back">用户中心</a><span class="LineS"></span><a href="javascript:;"" class="Out">退出登录</a>'
            $('.Bangzhu').append(html1)
            $('.Hellp').css({'width':'250px'})
          }
        }
    })
    //退出登录
     $('body').delegate('.Out', 'click', function(event) {
          $.ajax({
              url:addr1.a+"/shfp/user/u002/lognOut",
              type:"get",
              dataType:"jsonp",
              jsonp:'callback',
              success:function(e){
                $('.Bangzhu').empty()
                var html = ''
                html+='<a href="/user/u002/ssologin.html"target="_back">登录</a><span class="LineS"></span><a href="/user/u001/register.html" target="_back">注册</a>'
                $('.Bangzhu').append(html)
                $('.Hellp').css({'width':'192px'})
              }
         })
          //服务
          $.ajax({
              url:addr1.a+"/ssoredis/login/l001/logout",
              type:"get",
              dataType:"jsonp",
              jsonp:'callback',
              success:function(e){
               // console.log(e)
              }
         })
    })

var Bh = ''
var hf = window.location.href
if(hf.indexOf('acr001')!=-1){
  Bh = hf.split('?acr001=')[1]
  setCookie('Xmbh','','/',-1)
}else{
  Bh = getCookie("Xmbh")
}

$("#click_x").click(function(){
	$("#tan_kuang_wrap").hide();
	
});
//项目简介
$("#btn_1").click(function(){
	$("#obj1").show();
  $("#btn_1 h2").css("color","#cd403b");
  $("#btn_2 h2").css("color","black");
	 $("#btn_4 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
	$("#obj2").hide();
	$("#obj3").hide();
	$("#obj4").hide();
});
//项目进展
$("#btn_2").click(function(){
	$("#btn_2 h2").css("color","#cd403b");
	 $("#btn_4 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
       $("#span_xmjz").css({'background-color':'#cd403b','color':'#fff'});
       $("#span_zhichizhe").css({'background-color':'#d4d4d4','color':'#666'});

	$("#obj2").show();
	$("#obj1").hide();
	$("#obj3").hide();
	$("#obj4").hide();
});
$("#btn_3").click(function(){
	$("#obj3").show();
	$("#btn_3 h2").css("color","#cd403b");
	 $("#btn_4 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_2 h2").css("color","black");
	$("#obj2").hide();
	$("#obj1").hide();
	$("#obj4").hide();
});
//支持者
$("#btn_4").click(function(){
	$("#obj4").show();
	$("#btn_4 h2").css("color","#cd403b");
	 $("#btn_2 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
       $("#span_zhichizhe").css({'background-color':'#cd403b','color':'#fff'});
       $("#span_xmjz").css({'background-color':'#d4d4d4','color':'#666'});

	$("#obj2").hide();
	$("#obj3").hide();
	$("#obj1").hide();
});

//点击右下角两个假的图片
$("#shuoming_jieshao_3_btn2").click(function(){
	window.open("zhongchou.html");
	
});

$("#shuoming_jieshao_3_btn3").click(function(){
		window.open("zhongchou.html");
});


//点击提交表单**************************************************

//点击提交表单end**************************************************
//关闭按钮
$("#close_ganxie_close").click(function(){
	$("#close_ganxie").hide();
})








//********************************项目进展
$.ajax({
    type:"get",
    url:addr1.a+"/shfp/ajaxpagequery/zc/z005/proScheInfoQuery?callback=?",
    dataType:"jsonp",
    jsonp:"jsonpCallback",
    data:{"acr001":Bh},
    success:function(data){
        console.log(data);
        var resp=data.result.pageresult;
        var jzLen=resp.data.length;
        if(jzLen>0){
          $('#span_xmjz').css({'visibility':'visible'})
           $("#obj4_wrap").empty()
            for(var i=0;i<resp.data.length;i++){
                var html="";
                html+='<div class="text_obj2_class">'
                    html+='<span class="qqred"></span>'
                    html+='<h3 class="xmjz_time">'+resp.data[i].afr013+'</h3>'+resp.data[i].acr063
                html+='</div>'            
                $("#txt_obj2").append(html);               
            }
            $("#span_xmjz").html(jzLen);
        }else{
            $('#span_xmjz').css({'visibility':'hidden'})
            $("#noxmjz").css('display','block');
            $("#span_xmjz").css('display','none');
            $("#obj4_wrap").empty()
            var html = '<div style="margin:0 auto;font-size: 14px;display: block;text-align: center;margin-top: 80px;color: #666666;">暂无项目进展</div>'
            $("#obj4_wrap").append(html);
        }
    }
})
        //筹物详情
        function Chouwu(b){
            $.ajax({
                url:addr1.a+"/shfp/ajaxquery/zc/cw/cw004/loadxmxx",
                type:"get",
                dataType:"jsonp",
                jsonp:'callback',
                data:{
                    'acr001':b
                },
                success:function(e){

                    var data = e.result.xmxx
                    console.log(data)
                    var Title = data[0].acr002//标题
                    if(data[0].acr018==1){
                        data[0].acr018 ='未开始'
                        $('#support').css({'background':"rgb(145,144,144)"})
                        $("#support").unbind('click')
                        $("#choujizhuangtai").css({'background':"rgb(145,144,144)"})
                    }else if(data[0].acr018==2){
                        data[0].acr018 ='筹集中' 
                    }else if(data[0].acr018==3){
                        data[0].acr018 ='执行中'
                        $('#support').css({'background':"rgb(145,144,144)"})
                        $("#support").unbind('click')
                        // $("#choujizhuangtai").css({'background':"rgb(145,144,144)"})
                    }else if(data[0].acr018==4){
                        data[0].acr018 ='已结束'
                         $('#support').css({'background':"rgb(145,144,144)"})
                        $("#support").unbind('click')
                        // $("#choujizhuangtai").css({'background':"rgb(145,144,144)"})
                    }else if(data[0].acr018==5){
                        data[0].acr018 ='撤销'
                        $('#support').css({'background':"rgb(145,144,144)"})
                        $("#support").unbind('click')
                        // $("#choujizhuangtai").css({'background':"rgb(145,144,144)"})
                    }
                    if(data[0].arc066!=''){
                      $('#Js').html(data[0].arc066)
                    }else{
                      $('#Js').empty()
                      $('#Js').append('<img src="../images/微信图片4-11.jpg"/>')
                    }
                    var Mubiao = data[0].acr014//目标
                    var Strs = data[0].afqcount//已筹
                    var dacheng = data[0].dacheng//达成率
                    var Peopnum = data[0].acrcount//支持人数
                    var StartTime = data[0].aar020//发起时间
                    var EndTime = data[0].aar021//结束时间
                    var nowtamp = Date.parse(new Date());//现在的时间戳
                    var futtamp = Htime(EndTime)//结束时间戳
                    var Surplus = futtamp-nowtamp//剩余时间戳
                    var Endday = parseInt(Surplus/86400000)//剩余天数
                    if(Endday<=0){
                      Endday=0
                    }
                    $('#name_1').html(Title)
                    $('#choujizhuangtai').html(data[0].acr018)
                    $('#money').html(Strs)
                    $('#progress').css({'width':dacheng+'%'})
                    $("#state_left span").html(dacheng)
                    $('#progress_state_span_id1').html(StartTime)
                    $("#progress_state_span_id2").html()
                    $("#img_eye img").attr('src',addr3.a+'/upload/shfp/zc/cut/'+data[0].acr065)
                    $('#state_right span').html(Peopnum)
                    $('#progress_state_span_id2').html(Mubiao)
                    $('#progress_state_span_id3').html(Endday+'天')
                    $('#adr').html(data[0].acr074)
                    $('#ren').html(data[0].acr075)
                    $('#Pho').html(data[0].acr076)
                }
            })
        }
        Chouwu(Bh)
        //筹钱列表
          function Alls(a){
            $.ajax({
                url:addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/getcwList",
                type:'get',
                data:{
                    'pageSize':3,
                    'pageIndex':0,
                    'acr012':a,
                    'xmpx':1
                },
                dataType:"jsonp",
                jsonp:'callback',
                jsonpCallback:'success_JsonpCallback',
                success:function(e){
                    var data = e.result.pageresult.data
                    console.log(data)
                    var arr = []
                    for(var i =0;i<data.length;i++){
                      if(data&&data[i].acr018==2){
                        arr.push(data[i])
                      }
                    }
                    if(arr.length!=0){
                      if(arr[0].acr002.length>=13){
                        arr[0].acr002 = arr[0].acr002.substring(0,13)+'...'
                      }else{
                        arr[0].acr002 = arr[0].acr002
                      }
                      $('#jieshao_').css({'display':'block'})
                      $('.Img img').attr('src',addr3.a+'/upload/shfp/zc/cut/'+arr[0].acr065)
                      $('#shuoming_jieshao_1').html(arr[0].acr002)
                      $('#shuoming_jieshao_2').html("项目简介："+arr[0].acr013.substring(0,24)+'...')
                      var html =''
                      html+='<div id="shuoming_jieshao_3"class="shuoming_jieshao_class" name="'+arr[0].acr001+'">我要支持</div>'
                      $('#shuoming_jieshao').append(html)
                    }else{
                      $('#jieshao_').css({'display':'none'})
                    }
                }
            })
        }
        Alls(1)
        $('body').delegate('#shuoming_jieshao_3', 'click', function(event) {
            var sid = $(this).attr('name')
            setCookie('qbh',sid,'/',1)
            window.location.href="chouqian.html";
        });
//********************************筹物支持者********************************
var arr=[]
$.ajax({
   type: "get",
   url: addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/supportlist",
   dataType:'jsonp',
   //jsonp:'jsonpCallback',
   data:{acr001:Bh},
   success: function(data){

    var data=data.result.pageresult.data
    console.log(data)

    data.sort(function (a,b){
      a = a.afqcounts;
      b = b.afqcounts;
      return b - a;
    })
     if(data.length>0){
      $('#span_zhichizhe').css({'visibility':'visible'})
      var Total=data.length

      var htl='';
      for(var i=0;i<data.length;i++){
        $("#obj4_wrap").empty()
        htl+='<li class="li_1"><div class="left_div"><img src="'+addr3.a+'/upload/shfp/user/'+data[i].acr026+'.jpg"/></div><div class="right_div"><p><div class="name_div">'+data[i].acr024+'</div>捐赠物品：<span class="red_span">'+data[i].afqcounts+'</span>件</p></div></li>'
          
      }
     }else{
      $('#span_zhichizhe').css({'visibility':'hidden'})
      $("#obj4_wrap").empty()
      var html = '<div style="margin:0 auto;font-size: 14px;display: block;text-align: center;margin-top: 80px;color: #666666;">暂无支持者</div>'
      $("#obj4_wrap").append(html);
     }
if(Total>=999){
  Total='999+'
}
      $("#obj4_wrap").html(htl)
      $('#span_zhichizhe').html(Total)
   },
});

 var arr_azr002 = [];//发布内容
 var arr_logo = [];//头像
 var arr_afr001 = [];//用户姓名
 var arr_afr003 = [];//发表时间\n
 
 //评论区现在是提交成功
$("#btn_pinlun").click(function(){
//	alert("感谢留言，谢谢！")
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

//  
    
    
//  *******************************
$.ajax({
      url: addr1.a+"/shfp/zc/z006/saveTopic?callback=?",
       dataType:'jsonp',
        jsonp:'jsonpCallback',
      data: {"azr002":liuyanban_azr002,"afr001":姓名,"azr003":last_time,"logo":头像,"acr001":项目},
      success: function(data){
//   				alert(data.name); // John
    				 console.log(data.time); //  2pm
   				 }
   	 });//提交订单、、、、、、、、、、、、、、、、、、、、、、、、、、、、end
   	 
   	 


});






$("#btn_pinlun").mouseleave(function(){ //离开按钮清空留言板
	$("#liuyanban").val(""); 
})




//、、、、、、、、、、、、、、、、留言板显示——__后台调取数据
$.ajax({
   type: "get",
   url: addr1.a+"/shfp/ajaxpagequery/zc/z006/gethtList?callback=?",
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
	   	$("#pinglunqu").append("<li><div class='left_float'><span class='logo_liuyan'><img src='"+addr3.a+"/upload/shfp/user/"+arr_logo[i]+"'/></span></div><div class='right_float_'><span class='name_liuyan'>"+arr_afr001[i]+"</span>：<span class='content_liuyan'>"+arr_azr002[i]+"</span><br /><span class='time_liuyan'>"+arr_afr003[i]+"<div class='woyaopinglun'><img src='../images/cjthtq.png' />&nbsp;&nbsp;我要评论</div></span></li>")
	   	
	   	}
	   	  			
   },
   error:function(fs){
   			console.log(fs)
 		  }
});
//获取cookie函数
    function getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
            return null;
        }
    }
$("#dingdanhao").bind('input change',function(){
	change()
	function change(){
	var num_id_ = $("#dingdanhao").val();
	var patt1 = /^[0-9]*$/g;
 		var m=patt1.test(num_id_)
// 		console.log(m)
 		if(!m){
 			$("#dingdanhao").val('')
 		}
 	}
})
function jzlb(a){
  $.ajax({
    url:addr1.a+'/shfp/ajaxquery/zc/cw/cw004/jzwpdxx',
    type:'get',
    dataType:'jsonp',
    data:{acr001:a},
    success:function(e){
      var datas = e.result.jzwp
      console.log(datas)
      $('#jzwp').val(datas[0].acr072)
    }
  })
}
//zhichi
$("#support").bind('click',function(){
	if(getCookie("_ticket")){
		$('#num_').val(""); 
	    $('#kuaidi').val(""); 
		$('#dingdanhao').val(""); 
		$("#tan_kuang_wrap").show();
		$("#tan_kuang_middle input").html() == "";
    jzlb(Bh)
	}else{
		$('.Cenbox').css({'zIndex':999,'display':'block'})
		$('.HIddens').css({'zIndex':999,'display':'block'})

	}

});
//查询项目发起方
function Fa(a){
  $.ajax({
      url:addr1.a+"/shfp/ajaxquery/zc/cw/cw004/proParticipantInfoQuery",
      type:'get',
      data:{
          'acr001':a
      },
      dataType:"jsonp",
      jsonp:'callback',
      success:function(e){
        var data = e.result.data
        console.log(data)
        $('#top_span').html(data[0].afr035)
        $('.project_').html(data[0].fqrfqxms)
        $('.zhichi').html(data[0].fqrzcxms)
        console.log(addr3.a+data[0].rlrlogo+'jpg')
        if(data[0].fqrlogo!=''||data[0].fqrlogo!=null){
            $('#box_img_wrap img').attr('src',addr3.a+'/upload/shfp/user/'+data[0].fqrlogo+'.jpg')
        }else{
            $('#box_img_wrap img').attr('src','../img/众/众筹(1)_0005_tubiao1.png')
        }
        
      }
  })
}
Fa(Bh)
//获取捐赠类别

//捐赠按钮
$("#btn").click(function(){
	var acrsx = $('#name_1').html()
	if ($("#num_").val() =="" || $("#dingdanhao").val() == "" || $("#kuaidi").val() == "") {
			alert("请填写完整");
		}else{  
			var num_ = $('#num_').val();
			var kuaidi = $('#kuaidi').val();
			var dingdanhao = $('#dingdanhao').val();
			$.ajax({
				url:addr1.a+"/shfp/ajaxquery/zc/cw/cw004/jzwpdxx",
				type:'get',
				dataType:'jsonp',
        data:{acr001:Bh},
				success:function(e){
					var datas = e.result.jzwp
					if(datas){
							var Iphon = datas[0].acr067
							var Sum = $('#money').html()
              // $('#jzwp').val(datas[0].acr072)
							$.ajax({  
						       type: "post",  
						       url:addr1.a+"/shfp/zc/cw/cw004/save",
							   data:{"acr001":Bh,"acr067":Iphon,"acr002":acrsx,"sum":Sum,"acr073":num_,"afq013":kuaidi,"afq012":dingdanhao},
						        dataType:'jsonp',
						        // jsonp:'jsonpCallback',
						        error: function(request) {  
									console.log('失败');
						        },  
						        success: function(data) {  
						        	console.log('成功') 
									$("#tan_kuang_wrap").hide();
									$("#close_ganxie").show();
									window.setTimeout(function(){
										$("#close_ganxie").hide();
										window.location.reload()
									},3000);//4秒后执行函数go		
						        }  
							}); 	
					}
				}
			})
			// 
			// 
		}

})
$("#share").click(function(){			//点击按钮关闭分享
	$(".tanchu").css({"display":'block'})
})

$("#del").click(function(){
	$(".tanchu").css({"display":'none'})
})






















//tanchaung
$('.Colls').click(function(){
	$('.Cenbox').css({'zIndex':-999,'display':'none'})
	$('.HIddens').css({'zIndex':-999,'display':'none'})
})
$('.Lilogin').click(function(){
	window.location.href=addr1.a+"/user/u002/ssologin.html"
})





})

	
	
	
























//评论区**************************end********************************************************************






























