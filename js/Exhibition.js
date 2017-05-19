/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-01 19:03:41
 * @version $Id$
 */
$(document).ready(function () {
  console.log(addr.a)

//    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")
// {
// alert("您的浏览器版本过低，请下载IE9以上版本");
// }
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
	 // var City = sessionStorage.getItem('City')
   var City = getCookie('City')
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
	var numbers = 0
	$('.LFoter span').click(function(){
		var LHtml = $(this).html()
    setCookie('City',$(this).html(),'/',1)
		// localStorage.setItem('City',$(this).html())
		$('.LFoter span').removeClass('active')
		$(this).addClass('active')
		$('.Lcity').html('['+$(this).html()+']')
		for(var i =0;i<iplocations.length;i++){
           if(LHtml.indexOf(iplocations[i].name)!=-1){
                numbers = iplocations[i].id
                setCookie('Cid',$(this).html(),'/',1)
                // localStorage.setItem('Cid',numbers)
           }
      	}
	})

	

	//设置轮播导航宽
	var LnavW =parseInt($('.lBnav span').eq(0).css('width'))+20+parseInt($('.lBnav span').css('marginLeft'))*2*$('.lBnav span').length
	$('.lBnav').css({'width':LnavW})
	$('.lBnav').css({'marginLeft':-LnavW/2})


	

	var timer = null;
	timer = setInterval(move,2500);
	//轮播
	$('body').delegate('.lBnav span ', 'mouseover', function(event) {
		var index = $(this).index()
			i = index
			$(this).addClass('active').siblings().removeClass('active')
			$('.LBigbox div.Ltab1').eq(index).css({'display':'block'}).siblings().css({'display':'none'})
			clearInterval(timer)
		});
	var i = 0;

	//自动播
	function move(){
		var AspanLen = $('.lBnav span').length
        i++;
        if(i==AspanLen-1){
            i=-1;
        }
        $('.lBnav span').eq(i).addClass('active').siblings().removeClass('active')
       	$('.LBigbox div.Ltab1').eq(i).css({'display':'block'}).siblings().css({'display':'none'})
       
    }
    //鼠标移入停止
    $('.LBigbox').mouseover(function() {
    	clearInterval(timer)
    });
    //鼠标移出继续
     $('.LBigbox').mouseout(function() {
    	timer = setInterval(move,2500);
    });
     
   //搜索
   $('#Sear').click(function(){
   		var cid = getCookie('Cid')
   		var Lintext = $.trim($('#Inp').val())
   		if(Lintext){
        setCookie('SearchVal',Lintext,'',7)
        $('#Inp').val('')
   			// sessionStorage.setItem('SearchVal',Lintext)
   			window.location.href="../page/searchR.html?Gj="+escape(Lintext)+"?id="+escape(cid)
   		}else{
   			window.location.href="../page/searchR.html?id="+escape(cid)
        setCookie('SearchVal','','/',1)
   			// sessionStorage.setItem('SearchVal','')
   		}
   })
   //回车搜索
   $('#Inp').focus(function(event) {
   		var cid = getCookie('Cid')
   		document.onkeydown=function(event){
		e = event ? event : (window.event ? window.event : null);
			if(e.keyCode==13){
				if (event.keyCode == 13){
					var Lintext = $.trim($('#Inp').val())
			   		if(Lintext){
              setCookie('SearchVal',Lintext,'/',1)
              $('#Inp').val('')
			   			// sessionStorage.setItem('SearchVal',Lintext)
			   			window.location.href="../page/searchR.html?Gj="+escape(Lintext)+"?id="+cid
			   		}else{
			   			window.location.href="../page/searchR.html?id="+cid
			   		}
				}
			}
		}
   });
   //轮播数据获取
   $.ajax({
        url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        jsonpCallback:'success_JsonpCallback',
        data:{pageSize:4,pageIndex:0},
        success:function(e){
        	var Sdata = e.result.pageresult.data
        	if(Sdata&&e.statusCode==200){
        		for(var i = 0;i<Sdata.length;i++){
        			var reg=/<[^<>]+>/g;
		    		var str = Sdata[i].zss008.replace(reg,'');
        			var html = ''
        			html+='<div class="Ltab1"><div class="Limg"><a href="javascript:;"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+Sdata[i].bhr002+'"  width="100%" height="100%"  name="'+Sdata[i].zss001+'" ait="'+Sdata[i].aar009+'" class="Hrefa"></a></div><div class="LText"><h2>'+Strb(Sdata[i].zss017,25)+'</h2><p>'+Strb(str,100)+'<br/><a href="javascript:;" name="'+Sdata[i].zss001+'" class="Zsxq" ait="'+Sdata[i].aar009+'"><全部></a></p></div></div>'
        			$('.LBigbox').append(html)

        		}
        		//判断轮播个数自动生成按钮
				var Ltabs = $('.LBigbox div.Ltab1').length
				for(var i = 0;i<Ltabs;i++){
					var LAspan = document.createElement("span"); 
					$('.lBnav span').eq(0).attr('class','active')
					$('.lBnav').append(LAspan)
				}
        	}
            // console.log('http://res.zgshfp.org.cn/resource/upload/zspt/image/'+e.result.pageresult.data[0].bhr002)
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
   $('body').delegate('.Hrefa', 'click', function(event) {
   		window.location.href="../page/Ldetails.html"
   		var Sids = $(this).attr('name')
   		var Lncity = $(this).attr('ait')
      setCookie('Sid',Sids,'/',1)
      setCookie('scity',Lncity,'/',1)
   		// sessionStorage.setItem('Sid',Sids)
   		// sessionStorage.setItem('scity',Lncity)
   })
   var b = 0
   //栏目类
   function SAjax(Side,Snum){
    	$.ajax({
     		url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
	        type:"get",
	        dataType:"jsonp",
	        jsonp:'callback',
	        // jsonpCallback:'success_JsonpCallback',
	        data:{pageSize:4,pageIndex:Snum,zss016:Side},
	        success:function(e){
	        	var data = e.result.pageresult.data
	        	if(data&&e.statusCode==200){
	        		for(var i = 0;i<data.length;i++){
	        			// if(data[i].bhr002||data[i].bhr002!=null){
            //                 $('.Centents p').removeClass('Flexp')
            //                 function Strb(str){
            //                     if(str.length>30){
            //                         return str.substring(0,25)+'...'
            //                     }else{
            //                         return str
            //                     }
            //                   }
            //              }else{
            //                  $('.Centents p').attr('class','Flexp') 
            //                  $('.Imghide').remove()
            //                  function Strb(str){
            //                     if(str.length>30){
            //                         return str.substring(0,30)+'...'
            //                     }else{
            //                         return str
            //                     }
            //                   } 
            //              }
                        if(data[i].aar009=='中国'){
                          data[i].aar009='全国'
                        }
                         //判断页面内容
                         if(data.length<4){
		                      $('.LMore').css({'display':'none'})
		                  }else{
		                      $('.LMore').css({'display':'block'})
		                  }
	        			var html = ''
	        			 html+='<ul><a href="javascript:;"  name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><p><span class="Ltext1">'+data[i].zss017+'</span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><span class="Ltext3"><img src="../images/Limg3.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,11)+'</sup></span></p><sup class="Imghide"><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px" class="Se"></sup></div></li></a></ul>'
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
    SAjax(1,b)
   //扶贫展示列表
   $.ajax({
   		url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/getColumn",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        // jsonpCallback:'success_JsonpCallback',
        data:{pageSize:4,pageIndex:0},
        success:function(e){
        	var data = e.result.pageresult.data
        	if(data&&e.statusCode==200){
        		for(var i =0;i<data.length;i++){
        			var html =''
        			html+='<ul><a href="javascript:;"><li name="'+data[i].aaa102+'">'+data[i].aaa103+'</li></a></ul>'
        			$('.LtopLeftlist').append(html)
        			$('.LtopLeftlist li').eq(0).attr('class','active')
        		}
        	}

        }
   })
   $('body').delegate('.LtopLeftlist li', 'click', function(event) {
   		b=0
   		var ThisTxt = $(this).html()
     	$('.LtopLeftlist li').removeClass('active')
     	$(this).addClass('active')
     	var Slist = $(this).attr('name')
      setCookie('A',Slist,'/',1)
     	// sessionStorage.setItem('A',Slist)
     	SAjax(Slist,0)
     	$('.Centents').empty()
   });
    //点击加载更多
    $('.LMore').click(function(){
    	b++
    	// SAjax(sessionStorage.getItem('A'),b)
      SAjax(getCookie('A'),b)
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
    
//$(document).on("mousewheel DOMMouseScroll", function (e) {
//		var n =2
//	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1))
//	    if (delta > 0) {
//	        // 向上滚
//	        console.log("wheelup");
//	    } else if (delta < 0) {
//	       var scrll = $(document).scrollTop()
//	       if(scrll>=308){
//	    			$('.Ltopleftnav').css({'position':'fixed','left':'70px','top':'86px','background':'#fff'});   		$('.LtopLeftlist').css({'position':'fixed','left':'70px','top':'135px','background':'#fff'})
//	       }
//	    }
//	});  
})

