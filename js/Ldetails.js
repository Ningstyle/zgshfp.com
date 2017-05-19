/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-03 11:57:25
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
	/*选择城市*/
	$('.LFoter span').click(function(){
		var LHtml = $(this).html()
		$('.LFoter span').removeClass('active')
		$(this).addClass('active')
    setCookie('City',$(this).html(),'/',1)
		$('.Lcity').html('['+$(this).html()+']')
    for(var i =0;i<iplocations.length;i++){
      if(LHtml.indexOf(iplocations[i].name)!=-1){
              numbers = iplocations[i].id
              setCookie('Cid',$(this).html(),'/',1)
         }
      }
	})
	 var City = getCookie('City')
     if(City){
        $('.Lcity').html('['+City+']')
     }else{
        $('.Lcity').html('[全国]')
     }
	//搜索监测
	 $('.LnSear').click(function(){
      var cid = getCookie('Cid')
     	var Lintext = $.trim($('.Sinput').val())
     	if(Lintext){
        setCookie('SearchVal',Lintext,'/',1)
     		window.location.href="../page/searchR.html?Gj="+escape(Lintext)+"?id="+escape(cid)
     	}else{
     		window.location.href="../page/searchR.html?id="+escape(cid)
        setCookie('SearchVal','','/',1)
     	}
     })
     //回车搜索
     $('.Sinput').focus(function(event) {
     	document.onkeydown=function(event){
        var cid = getCookie('Cid')
  			e = event ? event : (window.event ? window.event : null);
  			if(e.keyCode==13){
  				if (event.keyCode == 13){
  					var Lintext = $.trim($('.Sinput').val())
  			     	if(Lintext){
                setCookie('SearchVal',Lintext,'/',1)
  			     		// sessionStorage.setItem('SearchVal',Lintext)
  			     		window.location.href="../page/searchR.html?Gj="+escape(Lintext)+"?id="+escape(cid)
  			     	}else{
  			     		window.location.href="../page/searchR.html?id="+escape(cid)
                setCookie('SearchVal','','/',1)
  			     		// sessionStorage.setItem('SearchVal','')
  			     	}
  				}
  			}
  		}
     });




     //详情
    var sid = getCookie('Sid')
    var html = window.location.href
    if(html.indexOf('id=')!=-1){
      sid=html.split('id=')[1].split('#')[0]
      setCookie('Sid','','/','-1')
    }else{
      sid = getCookie('Sid')
    }
    var scity = getCookie('scity')
    if(scity=='中国'){
    	scity = '全国'
    }
    if(!scity){
      scity= '全国'
    }
    if(scity){
        $('.Lcity').html('['+scity+']')
     }else{
        $('.Lcity').html('[全国]')
     }
   	$.ajax({
   		url:addr.a+"/shfp/ajaxquery/revision/zspt/z001/selectByzss001",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        jsonpCallback:'success_JsonpCallback',
        data:{zss001:sid}  ,      
        success:function(e){
        	var data = e.result.data
        	// console.log(data)
        	if(data&&e.statusCode==200){
        		for(var i =0;i<data.length;i++){
        			var html = ''
        			html+='<div class="Ltitle"><h1>'+data[i].zss017+'</h1><div class="LtitleEdi"><div class="LtitleImg"><a href="javascript:;"><img src="../images/Lhead.png" alt="" width="100%" height="100%"></a><span>'+data[i].uus035+'</span></div><div class="LtitleCen"><img src="../images/Limg3.png" alt=""><span>'+scity+'</span></div><div class="LtitleTime">'+data[i].zss013.substring(0,11)+'</div></div></div><div class="Edicontent">'+data[i].zss008+'</div>'
        			$('.Contentbox').append(html)
        		}
            window._bd_share_config = {
                common : {      
                    bdText : data[0].zss008.replace(/<[^>]+>/g,"")    
                    bdDesc : '',    
                    bdUrl : window.location.href+'?id='+getCookie('Sid'),     
                    bdPic :'../images/gen.png'
                },
                share : [{
                    "tag" : "share_1",
                    "bdSize" : 32,
                }],

            }
            //以下为js加载部分
            with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
        	}
        }
   	})
    //相关报道
    $.ajax({
        url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist?zss016=6",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        success:function(e){
          var data = e.result.pageresult.data
          if(data&&e.statusCode==200){
            for(var i=0;i<data.length;i++){
              if(data[i].aar009&&data[i].aar009=='中国'){
                    data[i].aar009 = '全国'
              }else{
                    data[i].aar009 = '全国'
              }
              if(data[i].bhr002.indexOf('.')==-1){
                  $('.Centents p').attr('class','Flexp')
                  $('.Imghide').remove()
                  function Strb(str){
                      if(str.length>30){
                          return str.substring(0,38)+'...'
                      }else{
                          return str
                      }
                    }
              }else{
                 function Strb(str){
                      if(str.length>30){
                          return str.substring(0,40)+'...'
                      }else{
                          return str
                      }
                    }
              }
              var html = ''
              html+='<ul><a href="Ldetails.html"   name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><p><span class="Ltext1">'+Strb(data[i].zss017)+' </span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><span class="Ltext3"><img src="../images/Limg3.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,11)+'</sup></span></p><sup class="Imghide"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px"></sup></div></li></a></ul>'
              $('.Centents').append(html)
            }
          }
        }
    })
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
