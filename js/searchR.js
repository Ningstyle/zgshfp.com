/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-03 11:56:22
 * @version $Id$
 */

$(document).ready(function () {
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
     // var City = getCookie('City')
     // if(City){
     //       $('.Lcity').html(City)
     //  }else{
     //       $('.Lcity').html('[全国]')
     //  }
      var ids = unescape(window.location.href.split('id=')[1])
      if(ids){
         $('.Lcity').html('['+ids+']')
      }else{
        $('.Lcity').html('[全国]')
      }
     /*点击弹出城市列表*/
     var n =0
     $('.Lgs').click(function(){
          if($('.LFoter').css('display')=='block'){
               $('.LFoter').css({'display':'none'})
          }else{
               $('.LFoter').css({'display':'block'})
          }
     })
     /*点击其他区域隐藏城市列表*/
     $('body').click(function(e){
          var _con = $('.Lact');
          if(!_con.is(e.target) && _con.has(e.target).length === 0){
          $('.LFoter').css({'display':'none'})
          }
     });
//   Search1(City)
     //省份搜索函数
     function Search1(sctit){
          $.ajax({
               url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
             type:"get",
             dataType:"jsonp",
             jsonp:'callback',
             data:{pageSize:6,pageIndex:0,str:sctit},
             success:function(e){
               $('.Centents').empty()
               var data = e.result.pageresult.data
               if(data!=""){
                    $('.LMore').css({'display':'block'})
                    for(var i =0;i<data.length;i++){
                         var html = ''
                         html+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><p><span class="Ltext1">'+Strb(data[i].zss017)+'</span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><span class="Ltext3"><img src="../images/Limg3.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,11)+'</sup></span></p><sup class="Imghide"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px"></sup></div></li></a></ul>'
                         $('.Centents').append(html) 
                         if(!data[i].bhr002||data[i].bhr002==null){
                             $('.Imghide').css({'display':'none'})
                         }
                    }
               }else{
                    $('.LMore').css({'display':'none'})
                    $('.Centents').append('<h4>暂无相关内容！</h4>')
                    $('.Centents h4').css({
                         'width':'100%',
                         'height':'60px',
                         'lineHeight':'60px',
                         'textAlign':'center',
                         'color':'#666',
                         'fontSize':'16px'
                    })
               }
             }
          })
     }
     /*选择城市*/
     var numbers = 0
     $('.LFoter span').click(function(){
     		$('.All div').addClass('active')
	 		$('.LtopLeftlist li').removeClass('active')
          var LHtml = $(this).html()
          setCookie('City',$(this).html(),'',1)
          // sessionStorage.setItem('City',$(this).html())
          $('.LFoter span').removeClass('active')
          $(this).addClass('active')
          $('.Lcity').html('['+$(this).html()+']')
          for(var i =0;i<iplocations.length;i++){
               if(LHtml.indexOf(iplocations[i].name)!=-1){
                    numbers = iplocations[i].id
                    Search1(numbers)
               }
          }
          if(LHtml=='全国'){
            Search('')
          }
     })

     var Href = window.location.href
     var cityid = Href.split('id=')[1]
     if(Href.indexOf('Gj=')!=-1){
        var gjz = unescape(Href.split('Gj=')[1].split('?')[0])
        Search(gjz)
        $('.Sinput').val(gjz)
     }else{
        Quanbu(0)
     }
     var b = 0
      //关键字搜索函数
      function Search(strs){
          $.ajax({
               url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
             type:"get",
             dataType:"jsonp",
             jsonp:'callback',
             data:{pageSize:6,pageIndex:0,zss017:strs},
             success:function(e){
               $('.Centents').empty()
               var data = e.result.pageresult.data
               if(data!=''){
                $('.LMore').css({'display':'block'})
                    for(var i =0;i<data.length;i++){
                      if(data.length<6){
                          $('.LMore').css({'display':'none'})
                      }else{
                          $('.LMore').css({'display':'block'})
                      }
                         var html = ''
                         html+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><p><span class="Ltext1">'+Strb(data[i].zss017)+'</span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><span class="Ltext3"><img src="../images/Limg3.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,11)+'</sup></span></p><sup class="Imghide"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px" class="Se"></sup></div></li></a></ul>'
                        $('.Centents').append(html) 
                        for(var j = 0;j<$('.Se').length;j++){
                        	var Imgs = $('.Se').eq(j).attr('src')
	                        if(Imgs.indexOf('null')!=-1){
	                        	$('.Centents .Imghide').eq(j).remove()
	                        }
                        }
                        
                        console.log(Imgs)
                    }
               }else{
                  $('.LMore').css({'display':'none'})
                  $('.Centents').append('<h4>暂无相关内容！</h4>')
                  $('.Centents h4').css({
                       'width':'100%',
                       'height':'60px',
                       'lineHeight':'60px',
                       'textAlign':'center',
                       'color':'#666',
                       'fontSize':'16px'
                  })
               }
             }
          })
     }
     //搜索监测
      $('.LnSear').click(function(){
          var Lintext = $.trim($('.Sinput').val())
          if(Lintext){
          	$('.All div').addClass('active')
	 		$('.LtopLeftlist li').removeClass('active')
               Search(Lintext)
                setCookie('SearchVal',Lintext,'/',1)
               // sessionStorage.setItem('SearchVal',Lintext)
          }else{
              setCookie('SearchVal','','/',1)
               // sessionStorage.setItem('SearchVal','')
          }
     })
      //回车搜索
      $('.Sinput').focus(function(event) {
         document.onkeydown=function(event){
               e = event ? event : (window.event ? window.event : null);
               if(e.keyCode==13){
                    if (event.keyCode == 13){
                    	$('.All div').addClass('active')
	 					$('.LtopLeftlist li').removeClass('active')
                         var Lintext = $.trim($('.Sinput').val())
                         if(Lintext){
                              Search(Lintext)
                              setCookie('SearchVal',Lintext,'/',1)
                              // sessionStorage.setItem('SearchVal',Lintext)
                         }else{
                         	Quanbu(0) 
                              setCookie('SearchVal','','/',1)
                              // sessionStorage.setItem('SearchVal','')
                         }
                    }
               }
          }    
          
      });

     var scity = getCookie('scity')
         if(scity=='中国'){
          scity = '全国'
         }
    
     //扶贫展示列表
     $.ajax({
          url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/getColumn",
          type:"get",
          dataType:"jsonp",
          jsonp:'callback',
          jsonpCallback:'success_JsonpCallback',
          data:{pageSize:4,pageIndex:0},
          success:function(e){
               var data = e.result.pageresult.data
               if(data&&e.statusCode==200){
                    for(var i =0;i<data.length;i++){
                     var html =''
                         html+='<ul><a href="javascript:;"><li name="'+data[i].aaa102+'">'+data[i].aaa103+'</li></a></ul>'
                         $('.LtopLeftlist').append(html)
//                       $('.LtopLeftlist li').eq(0).attr('class','active')
                    }
               }

          }
     })
     function SAjax(side,b){
          $.ajax({
               url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
             type:"get",
             dataType:"jsonp",
             jsonp:'callback',
             // jsonpCallback:'success_JsonpCallback',
             data:{pageSize:5,pageIndex:b,zss016:side},
             success:function(e){
               var data = e.result.pageresult.data
               if(data&&e.statusCode==200){
                    for(var i = 0;i<data.length;i++){
                         if(data[i].aar009=='中国'){
                              data[i].aar009 = '全国'
                         }
                         //判断页面内容
                          if(data.length<5){
                              $('.LMore').css({'display':'none'})
                          }else{
                              $('.LMore').css({'display':'block'})
                          }
                         var html = ''
                         html+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><p><span class="Ltext1">'+Strb(data[i].zss017)+'</span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><span class="Ltext3"><img src="../images/Limg3.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,11)+'</sup></span></p><sup class="Imghide"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px" class="Se"></sup></div></li></a></ul>'
                            $('.Centents').append(html)
	                          for(var j = 0;j<$('.Se').length;j++){
	                        	var Imgs = $('.Se').eq(j).attr('src')
		                        if(Imgs.indexOf('null')!=-1){
		                        	$('.Centents .Imghide').eq(j).remove()
		                        }
	                        }
                    }
                    
               }
             }
          })
     }
      
     $('body').delegate('.LtopLeftlist li', 'click', function(event) {
     	$('.All div').removeClass('active')
          b = 0
          var ThisTxt = $(this).html()
          $('.LtopLeftlist li').removeClass('active')
          $(this).addClass('active')
          var Slist = $(this).attr('name')
          setCookie('A',Slist,'/',1)
          SAjax(Slist,0)
          $('.Centents').empty()
     });
      //点击加载更多
      $('.LMore').click(function(){
        b++
        SAjax(getCookie('A'),b)

      })
     //相关报道
         $.ajax({
          url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
             type:"get",
             dataType:"jsonp",
             jsonp:'callback',
             data:{pageSize:3,pageIndex:0,zss016:6},
             success:function(e){
               var data = e.result.pageresult.data
               if(data&&e.statusCode==200){
                    for(var i =0;i<data.length;i++){
                         var html = ''
                         html+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div class="Ljulistimg"><div class="LjulistLe"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" width="100%" height="100%"></div><div class="LjulistRi"><span></span>'+Strb(data[i].zss017,35)+'</div></div></li></a></ul>'
                         $('.Ljulist1').append(html)
                    }
               }
             }
         })
         //聚焦
        $.ajax({
          url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
            type:"get",
            dataType:"jsonp",
            jsonp:'callback',
            data:{pageSize:3,pageIndex:0,zss016:5},
            success:function(e){
              var data = e.result.pageresult.data
              if(data&&e.statusCode==200){
                for(var i =0;i<data.length;i++){
                  var html1 = ''
                  html1+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div class="Ljulistimg"><div class="LjulistLe"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" width="100%" height="100%"></div><div class="LjulistRi"><span></span>'+Strb(data[i].zss017,35)+'</div></div></li></a></ul>'
                  $('.Ljulist').append(html1)
                }
              }
            }
        })

//全部
$('.All div').click(function(){
	$(this).addClass('active')
	 $('.LtopLeftlist li').removeClass('active')
	 $('.Centents').empty()
	Quanbu(0) 
	
})
function Quanbu(s){
	$.ajax({
               url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
             type:"get",
             dataType:"jsonp",
             jsonp:'callback',
             // jsonpCallback:'success_JsonpCallback',
             data:{pageSize:5,pageIndex:s},
             success:function(e){
               var data = e.result.pageresult.data
               if(data&&e.statusCode==200){
                    for(var i = 0;i<data.length;i++){
                         if(data[i].aar009=='中国'){
                              data[i].aar009 = '全国'
                         }
                         //判断页面内容
                          if(data.length<5){
                              $('.LMore').css({'display':'none'})
                          }else{
                              $('.LMore').css({'display':'block'})
                          }
                         var html = ''
                         html+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><p><span class="Ltext1">'+Strb(data[i].zss017)+'</span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><span class="Ltext3"><img src="../images/Limg3.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,11)+'</sup></span></p><sup class="Imghide"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px" class="Se"></sup></div></li></a></ul>'
                            $('.Centents').append(html)
	                          for(var j = 0;j<$('.Se').length;j++){
	                        	var Imgs = $('.Se').eq(j).attr('src')
		                        if(Imgs.indexOf('null')!=-1){
		                        	$('.Centents .Imghide').eq(j).remove()
		                        }
	                        }
                    }
                    
               }
             }
          })
}
      //点击进入详情页
        $('body').delegate('.Zsxq', 'click', function(event) {
               var Sids = $(this).attr('name')
               var Lncity = $(this).attr('ait')
               setCookie('Sid',Sids,'/',1)
               setCookie('scity',Lncity,'/',1)
               // sessionStorage.setItem('Sid',Sids)
               // sessionStorage.setItem('scity',Lncity)
               window.location.href="../page/Ldetails.html"
        })
})
