/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-05 12:47:46
 * @version $Id$
 */
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
 	
 	var index=0;
 	//列表选项卡
 	$('#oUl a').click(function(){
 		index=$(this).index()
 		$('#oUl li').removeClass('active')
 		$('#oUl li').eq(index).addClass('active')
 		$('.helpDa .Help').eq(index).show().siblings().hide()
 	})
 	//常见问题选项卡
 	var index1=0;
 	$('.fenye a').click(function(){
 		index1=$(this).index()
 		$('.fenye a').eq(index1).addClass('hover').siblings().removeClass('hover')
 		$('.liebiao ul').eq(index1).show().siblings().hide()
 	})
 	//爱心捐助选项卡
 	var index2=0;
 	$('.fenye1 a').click(function(){
 		index2=$(this).index()
 		$('.fenye1 a').eq(index2).addClass('hover').siblings().removeClass('hover')
 		$('.liebiao1 ul').eq(index2).show().siblings().hide()
 	})
 	//扶贫商城选项卡
 	var index3=0;
 	$('.fenye2 a').click(function(){
 		index3=$(this).index()
 		$('.fenye2 a').eq(index3).addClass('hover').siblings().removeClass('hover')
 		$('.liebiao2 ul').eq(index3).show().siblings().hide()
 	})

 })

