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
               console.log(e)
              }
         })
    })
var Bh = ''
if(getCookie("qbh")){
  Bh = getCookie("qbh")
}else{
  var hf = window.location.href.split('?acr001=')[1]
  Bh = hf
}
var Bh = ''
var hf = window.location.href
if(hf.indexOf('acr001')!=-1){
  Bh = hf.split('?acr001=')[1]
  setCookie('qbh','','/',-1)
}else{
  Bh = getCookie("qbh")
}
  //筹钱详情
  function Chouqian(b){
      $.ajax({
          url:addr1.a+"/shfp/ajaxquery/zc/z005/loadxmxx",
          type:"get",
          dataType:"jsonp",
          jsonp:'callback',
          data:{
              'acr001':b
          },
          success:function(e){
            console.log(e)
              var data = e.result.xmxx
              var Title = data[0].acr002//标题
              if(data[0].acr018==1){
                  data[0].acr018 ='未开始' 
              }else if(data[0].acr018==2){
                  data[0].acr018 ='筹集中'  
              }else if(data[0].acr018==3){
                  data[0].acr018 ='执行中'
                  $('#support').css({'background':"rgb(145,144,144)"})
                   $("#support").unbind('click')
              }else if(data[0].acr018==4){
                  data[0].acr018 ='已结束'
                  $('#support').css({'background':"rgb(145,144,144)"})
                  $("#support").unbind('click')
              }else if(data[0].acr018==5){
                  data[0].acr018 ='撤销'
                  $('#support').css({'background':"rgb(145,144,144)"})
                  $("#support").unbind('click')
              } 
              if(data[0].arc066!=''){
                  $('#txt_obj1').html(data[0].arc066)
                }else{
                  $('#txt_obj1').empty()
                  $('#txt_obj1').append('<img src="../images/yiliao_big.jpg"/>')
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
              $("#name_1").html(Title)
              $("#choujizhuangtai").html(data[0].acr018)
              $('#img_eye img').attr('src',addr3.a+'/upload/shfp/zc/cut/'+data[0].acr065)
              $("#money").html(Strs)
              $("#Shijian").html(StartTime)
              $("#Yuan").html(Mubiao+'元')
              $('#tian').html(Endday+'天')
              $('#state_left span').html(dacheng+'%')
              $('#progress').css({"width":dacheng+'%'})
              $('#state_right span').html(Peopnum)
          }
      })
  }
  Chouqian(Bh)
      //筹物列表
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
                      console.log(arr)
                      if(arr[0].acr002.length>=13){
                        arr[0].acr002 = arr[0].acr002.substring(0,13)+'...'
                      }else{
                        arr[0].acr002 = arr[0].acr002
                      }
                      $('#jieshao_').css({'display':'block'})
                      $('.Sid img').attr('src',addr3.a+'/upload/shfp/zc/cut/'+arr[0].acr065)
                      $('#shuoming_jieshao_1').html(arr[0].acr002)
                      $('#shuoming_jieshao_2').html("项目简介："+arr[0].acr013.substring(0,25)+'...')
                      var html =''
                      html+='<div id="shuoming_jieshao_3"class="shuoming_jieshao_class" name="'+arr[0].acr001+'">我要支持</div>'
                      $('#shuoming_jieshao').append(html)
                    }else{
                      //jieshao_
                      console.log(arr)
                      $('#jieshao_').css({'display':'none'})
                    }
                }
            })
        }
        Alls(2)
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
                if(data[0].fqrlogo!=''||data[0].fqrlogo!=null){
                    $('#box_img_wrap img').attr('src',addr3.a+'/upload/shfp/user/'+data[0].fqrlogo+'.jpg')
                }else{
                    $('#box_img_wrap img').attr('src','../img/众/众筹(1)_0005_tubiao1.png')
                }
                
              }
          })
        }
        Fa(Bh)

        //项目进展
        function Jinz(a){
          $.ajax({
              url:addr1.a+"/shfp/ajaxpagequery/zc/z005/proScheInfoQuery",
              type:'get',
              data:{
                  'acr001':a,
                  'pageIndex':0,
                  'pageSize':20
              },
              dataType:"jsonp",
              jsonp:'callback',
              success:function(e){
                var data = e.result.pageresult.data
                var JInlen = data.length
                $('#span_xmjz').html(JInlen)
                if(data.length>0){
                  $('#span_xmjz').css({'visibility':'visible'})
                    $("#txt_obj2").empty() 
                    for(var i=0;i<data.length;i++){
                      var html="";
                         html+='<div class="text_obj2_class">'
                         html+='<span class="qqred"></span>'
                         html+='<h3 class="xmjz_time">'+data[i].afr013+'</h3>'+data[i].acr063
                         html+='</div>'            
                         $("#txt_obj2").append(html);               
                   }
                }else{
                  $('#span_xmjz').css({'visibility':'hidden'})
                  $("#txt_obj2").empty()
                  var html = '<div style="margin:0 auto;font-size: 14px;display: block;text-align: center;margin-top: 80px;color: #666666;">暂无项目进展</div>'
                  $("#txt_obj2").append(html);
                }
              }
          })
        }
        Jinz(Bh)

        //支持者
        function Zhichi(a){
          $.ajax({
              url:addr1.a+"/shfp/ajaxpagequery/zc/z005/supportlist",
              type:'get',
              data:{
                  'acr001':a,
                  'pageIndex':0,
                  'pageSize':20
              },
              dataType:"jsonp",
              jsonp:'callback',
              success:function(e){
                var data = e.result.pageresult.data
                var Zhilen = data.length
                if(Zhilen>=999){
                  Zhilen=999+'+'
                }
                 data.sort(function (a,b){
                    a = a.afqcounts;
                    b = b.afqcounts;
                    return b - a;
                  })
                $('#span_zhichizhe').html(Zhilen)
                if(data.length>0){
                  $('#span_zhichizhe').css({'visibility':'visible'})
                    $("#obj4_wrap").empty() 
                    for(var i=0;i<data.length;i++){
                      var html="";
                      html+='<li class="li_1"><div class="left_div"><img src="'+addr3.a+'/upload/shfp/user/'+data[i].acr026+'.jpg"/></div><div class="right_div"><p><div class="name_div">'+data[i].acr024+'</div>捐赠物品：<span class="red_span">'+data[i].afqcounts+'</span>件</p></div></li>' 
                      $('#obj4_wrap').append(html)          
                   }
                }else{
                    $('#span_zhichizhe').css({'visibility':'hidden'})
                    $("#obj4_wrap").empty() 
                    var tips = '<div style="margin:0 auto;font-size: 14px;display: block;text-align: center;margin-top: 80px;color: #666666;">暂无项目支持者</div>'
                    $('#obj4_wrap').append(tips)  
                }
              }
          })
        }
        Zhichi(Bh)
    //我要支持
// $("#support").bind('click',function(){
//   if(getCookie("_ticket")){
    
//   }else{
//     $('.Cenbox').css({'zIndex':999,'display':'block'})
//     $('.HIddens').css({'zIndex':999,'display':'block'})

//   }
// })
//tanchaung
$('.Colls').click(function(){
  $('.Cenbox').css({'zIndex':-999,'display':'none'})
  $('.HIddens').css({'zIndex':-999,'display':'none'})
})
$('.Lilogin').click(function(){
  window.location.href=addr1.a+"/user/u002/ssologin.html"
})
//$("#click_x").click(function(){
//	$("#tan_kuang_wrap").hide();
//	
//});

$('body').delegate('#shuoming_jieshao_3', 'click', function(event) {
  var isd = $(this).attr('name')
  setCookie('Xmbh',isd,'/',1)
  window.location.href="chouwu.html";
});
  


$("#btn_1").click(function(){
	$("#obj1").show();
	
  $("#btn_1 h2").css("color","red");
  $("#btn_2 h2").css("color","black");
	 $("#btn_4 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
     $('#span_xmjz').css({'background':'#d4d4d4','color':"#666"})
     $('#span_zhichizhe').css({'background':'#d4d4d4','color':"#666"})
	$("#obj2").hide();
	$("#obj3").hide();
	$("#obj4").hide();
});
$("#btn_2").click(function(){
	$("#btn_2 h2").css("color","red");
	 $("#btn_4 h2").css("color","black");
	  $("#btn_1 h2").css("color","black");
	   $("#btn_3 h2").css("color","black");
    $('#span_xmjz').css({'background':'rgb(205, 64, 59)','color':"#fff"})
    $('#span_zhichizhe').css({'background':'#d4d4d4','color':"#666"})
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
     $('#span_xmjz').css({'background':'#d4d4d4','color':"#666"})
     $('#span_zhichizhe').css({'background':'rgb(205, 64, 59)','color':"#fff"})
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
//分享关闭按钮
$("#share").click(function(){
	$(".tanchu").css({"display":'block'})
})

$("#del").click(function(){
	$(".tanchu").css({"display":'none'})
})

})
































