$(function () {
  setCookie('spfl','','/',-1)
  setCookie('changjia','','/',-1)
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
  
  //轮播图
  var $container = $('#container');
  var $list = $('#list');
  var $buttons = $('#buttons');
  var PIC_WIDTH = 1002;
  var timer = null;
  var counter = 1;
  var $good = $("#uls");
  moveToB(counter);
  autoPlay();
  function moveToB(targetPage) {
    var left = PIC_WIDTH * targetPage;
    $list.animate({
      left: - left
    }, function () {
      if( 4 === targetPage ){
        $list.css({
          left: - PIC_WIDTH
        });
        counter = 1;
        targetPage = 1;
      }else if(0 === targetPage){
        $list.css({
          left: - PIC_WIDTH * 3
        });
        counter = 3;
        targetPage = 3;
      }
      $buttons.children().removeClass('on');
      $buttons.children('[index=' + targetPage + ']').addClass('on');
    });
  }
  function autoPlay() {
    timer = setInterval(function () {
      counter++;
      moveToB(counter);
    }, 3000);
  }
  $container.hover(function () {
    clearInterval(timer);
  }, function () {
    autoPlay();
  });
  //点击小圆点
  $buttons.children().click(function () {
    var index = $(this).attr('index');
    moveToB(index);
    counter = index;
  });
//点击商城
  var $item = $(".item");
  $($good).on("click",".item",function (ev) {
    $item.removeClass("sel");
    $(ev.target).addClass("sel");
  })
  
  //商家滚
  function sjg(){
	var qwe=$('.qwe').html()
	var timerr=null;
	$('.asd').html(qwe)
	var oUlH=$('.shanggun').height()
	timerr=setInterval(function(){
		var ml=parseInt($('.shanggun').css('margin-top'))
		if(ml<=-(oUlH/2)){
			ml=1
		}
		$('.shanggun').css({'margin-top':--ml})
	},30)
	$('.shanggun').mouseover(function(){
		clearInterval(timerr)
	})
	$('.shanggun').mouseout(function(){
		timerr=setInterval(function(){
			var ml=parseInt($('.shanggun').css('margin-top'))
			if(ml<=-(oUlH/2)){
				ml=1
			}
			$('.shanggun').css({'margin-top':--ml})
		},30)
	})
	}
  
  //电商平台榜单
	 $.ajax({
	 	url:addr.a+'/shfp/ajaxquery/mall/index/querySaleVolumes?callback=?',
	 	dataType:'jsonp',
	   	jsonp:'jsonpCallback',
	   	success:function(e){
	   		var dspt=e.result.data
	   		for(var i=0;i<dspt.length;i++){
	   			if(dspt[i].salevolumes<10){
	   				dspt[i].salevolumes = Number(dspt[i].salevolumes).toFixed(2)+"万";
	   			}else{
	   				if(dspt[i].salevolumes>10000){
	   					dspt[i].salevolumes = parseInt(dspt[i].salevolumes/10000)+"亿"
	   				}else if(dspt[i].salevolumes>1000){
	   					dspt[i].salevolumes = parseInt(dspt[i].salevolumes/1000)+"千万"
	   				}
	   				else if(dspt[i].salevolumes>100){
	   					dspt[i].salevolumes = parseInt(dspt[i].salevolumes/100)+"百万"
	   				}else{
	   					dspt[i].salevolumes = Number(dspt[i].salevolumes).toFixed(1)+"万"
	   				}
	   			}
	   		}
	   		$('#jd_span').html(dspt[0].salevolumes);//京东
	   		$('#lct_span').html(dspt[1].salevolumes);//乐村淘
	   		$('#dysg_span').html(dspt[2].salevolumes);//德源山沟
	   		$('#gxej_span').html(dspt[3].salevolumes);//供销e家
	   		$('#snyg_span').html(dspt[4].salevolumes);//苏宁易购
	   		sjg();
	   	}	   	
	 })

  //设置cookie函数
    function setCookie(cookie_name,value,Path,timeout){
        var date = new Date();
        date.setDate(date.getDate()+timeout)
        document.cookie = cookie_name+"="+escape(value)+";path"+"="+Path+
        ';expires='+date.toGMTString()
    }
    //获取cookie函数
    function getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
            return null;
        }
    }
    //省编号
    $.ajax({
      url:addr1.a+'/shfp/ajaxquery/mall/index/queryReagionCode',
      type:"get",
      data:{aar002:'100'},
      dataType:"jsonp",
      jsonp:'callback',
      success:function(e){
         
        var data=e.result.data
        for(var i=0;i<data.length;i++){
          var html=''
          html+='<option value="'+data[i].aar001+'">'+data[i].aar009+'</option>'
          $('#selProvince').append(html)
        }
      }
    });
    var Con
    $.ajax({
        url:addr1.a+'/shfp/ajaxquery/mall/index/queryProvinceStoreNum',
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        // jsonpCallback:'citycallback',
        success:function(e){
          // console.log(e)
          var data=e.result.data
          // console.log(data)
          Con=data[0].dfstorenum
          // console.log(Con)
          $('.search-q').html(Con)
          $('.search-s').html(Con)
        }
      })
    var arr1=[]
    var arr2=[]
    var arr4=[]
    var Bjs
    var shengj
    $('body').delegate('#selProvince','change',function(){
      $('#XIAN').empty()
      $('#XIAN').append('<option value="">--请选择--县--</option>')
      $('#SHI').empty()
      $('#SHI').append('<option value="">--请选择--市--</option>')
      var ShiYongval=$(this).val().slice(0,2)
      var ShengYongval=$(this).val()
      Bjs=this.options[this.selectedIndex].innerHTML
      if(ShiYongval){
          $.ajax({
            url:addr1.a+'/shfp/ajaxquery/mall/index/queryProvinceStoreNum',
            data:{azc001:ShiYongval},
            type:"get",
            dataType:"jsonp",
            jsonp:'callback',
            // jsonpCallback:'citycallback',
            success:function(e){
              // console.log(e)
              var data=e.result.data
              // console.log(data)
              shengj=data[0].dfstorenum
              $('.search-s').html(shengj)
            }
          })
          $.ajax({
            url:addr1.a+'/shfp/ajaxquery/mall/index/queryReagionCode',
            type:"get",
            data:{aar002:ShengYongval},
            dataType:"jsonp",
            jsonp:'callback',
            success:function(e){
             
              var data=e.result.data
              // console.log(data)
              for(var i=0;i<data.length;i++){
                var html=''
                html+='<option value="'+data[i].aar001+'">'+data[i].aar009+'</option>'
                $('#SHI').append(html)
              }
            }
          })
      }else{
        $('.search-s').html(Con)
      }

      
      
    })
    //市
    var Xianval
    var shij
    $('body').delegate('#SHI','change',function(){
     
      F=0
      Xianval=$(this).val()
      if(Xianval){
        $.ajax({
          url:addr1.a+'/shfp/ajaxquery/mall/index/queryReagionCode',
          type:"get",
          data:{aar002:Xianval},
          dataType:"jsonp",
          jsonp:'callback',
          success:function(e){
            $('#XIAN').empty()
            $('#XIAN').append('<option value="">--请选择--县--</option>')
            var data=e.result.data
            // console.log(data)
            for(var i=0;i<data.length;i++){
              var html=''
              html+='<option value="'+data[i].aar001+'">'+data[i].aar009+'</option>'
              $('#XIAN').append(html)
            }
          }
        })
        $.ajax({
          url:addr1.a+'/shfp/ajaxquery/mall/index/queryCityStoreNum',
          data:{azc002:Xianval},
          type:"get",
          dataType:"jsonp",
          jsonp:'callback',
          // jsonpCallback:'citycallback',
          success:function(e){
            // console.log(e)
            var data=e.result.data
            // console.log(data)
            shij=data[0].dfstorenum
            $('.search-s').html(shij)
          }
        })
      }else if(Xianval==''){
        $('#XIAN').empty()
        $('#XIAN').append('<option value="">--请选择--县--</option>')
        $('.search-s').html(shengj)
      }

      
      // alert(Xianval)
      

  })

    //县
    $('#XIAN').change(function(){
      F=0
      // $('#XIAN').empty()
      // $('#XIAN').append('<option value="">请选择县</option>')
      aaa=$(this).val()
      // if(aaa==''){
      //   return
      // }

      if(aaa){
        $.ajax({
          url:addr1.a+'/shfp/ajaxquery/mall/index/queryTownStoreNum',
          data:{azc003:aaa},
          type:"get",
          dataType:"jsonp",
          jsonp:'callback',
          // jsonpCallback:'citycallback',
          success:function(e){
            // console.log(e)
            var data=e.result.data
            // console.log(data)
            $('.search-s').html(data[0].dfstorenum)
          }
        })
      }else if(aaa==''){
        $('.search-s').html(shij)
      }

      
      
    })


   

  //厂家
  $('#uls a').click(function(){
    var name=$(this).attr('name')
    setCookie('changjia',name,'/',1)
  })



  
  


  //商品分类
  var callBack = '?callback=?';
  $.ajax({
    url:addr1.a+'/shfp/ajaxquery/mall/index/goodsCatQuery?callback=?',
    type:"get",
    dataType:"jsonp",
    jsonp:'callback',
    // jsonpCallback:'success_JsonpCallback',
    success:function(data){
      
      var data=data.result.data
      // console.log(data)
      for(var i=0;i<data.length;i++){
        var html=''
        html+='<li class="border-top"><a href="fplist.html#'+i+'" name="'+data[i].catid+'">'+data[i].name+'</a></li>'
        $('#nav-list').append(html)
      }
    }
  })

  $('body').delegate('#nav-list li a','click',function(){
    var index=$(this).attr('name')
    setCookie('spfl',index,'/','1')
  })


  //楼层商品信息
  
  function inforMation(w,b){
    $.ajax({
      url:addr1.a+'/shfp/ajaxquery/mall/index/queryFloorGoodsList',
      type:"get",
      data:{'catid':w},
      dataType:"jsonp",
      jsonp:'callback',
      success:function(data){
        var data=data.result.data
        data=data.slice(0,4)
        // console.log(data)
        for(var i=0;i<data.length;i++){
          var html='';
          html+='<li><a href="'+data[i].mfr054+'"><img src="'+data[i].mfr053+'" alt="" width="180" height="135"></a><p class="text">'+data[i].mfr051+'</p><p class="desc"><span class="rmb">¥</span><span class="price">'+data[i].mfr055+'</span><span class="address">岳西县</span></p></li>'
          b.append(html)
        }
      }
    })
  }


  //生鲜类列表
  inforMation(100000,$('#fresh ul'))
  //蔬果类列表
  inforMation(200000,$('#vegetables ul'))
  //干果类列表
  inforMation(300000,$('#driedFruit ul'))
  //粮油类列表
  inforMation(400000,$('#grainOil ul'))
  //其他类列表
  $.ajax({
      url:addr1.a+'/shfp/ajaxquery/mall/index/queryFloorGoodsList',
      type:"get",
      data:{'catid':'900000'},
      dataType:"jsonp",
      jsonp:'callback',
      success:function(data){
        var data=data.result.data
        data=data.slice(0,8)
        // console.log(data)
        for(var i=0;i<data.length;i++){
          var html='';
          html+='<li><a href="'+data[i].mfr054+'"><img src="'+data[i].mfr053+'" alt="" width="180" height="135"></a><p class="text">'+data[i].mfr051+'</p><p class="desc"><span class="rmb">¥</span><span class="price">70.00</span><span class="address">岳西县</span></p></li>'
          $('#else #other1').append(html)
        }
      }
    })




  
  
  
  
  //新品推荐
  $.getJSON(addr1.a+'/shfp/ajaxquery/mall/index/xptjQuery' + callBack, function (result) {
    var newShop = $('#new ul');
    var msg = result.result.data;
    // console.log(msg)
    msg.forEach(function (item, index) {
      var names = item.mfr051;
      var imgs = item.mfr053;
      var hrefs = item.mfr054;
      var price = item.mfr055;
      var addr = item.name;
      if (index<4){

        newShop.append('<li><a target="_blank" target="_blank" href="' + hrefs + '"><img src="' + imgs + '" alt=""></a><p class="text">' + names + '</p><p class="desc"> <span class="rmb">¥</span><span class="price">' + price + '</span><span class="address">' + addr + '</span> </p> </li>');
      }
    });
  });

  

  
  
  //店铺榜单
  $.getJSON(addr1.a+'/shfp/ajaxquery/mall/index/querystorebillboard' + callBack, function (result) {
    var msg = result.result.data;
    msg.forEach(function (item, index) {
      var shopWrap = $('#shopWrap ul');
      var sum = item.salevolumes.toString().split('.')[0];
      var names = item.mfr002.substring(0,10);
      var hrefs = item.mfr004;
      if (index<6){
        shopWrap.append('<li><span><a href="' + hrefs + '">' + names + '</a></span><span class="sailTotal">销售额 : &nbsp;<span class="sailPrice">' + sum + '</span>元</span> </li>');
      }
    });
  });
  //商品榜单
  $.getJSON(addr1.a+'/shfp/ajaxquery/mall/index/querygoodsBillboard' + callBack, function (result) {
    var msg = result.result.data;
    msg.forEach(function (item, index) {
      var goodsList1 = $('#goodsList1');
      var sum = item.salevolumes.toString().split('.')[0];
      var names = item.mfr051;
      var hrefs = item.mfr054;

      if (index<3){
        goodsList1.append('<li> <span><a href="' + hrefs + '">' + names + '</a></span><p class="sailTotal">销售额 : &nbsp;<span class="sailPrice">' + sum + '</span>元</p></li>');
      }
    });
  });
  $('#shengxian').click(function(){
    var asd=$(this).attr('name')
    setCookie('spfl',asd,'/',1)
    window.location.href="../page/fplist.html#0"
  })
  $('#shuguo').click(function(){
    var asd=$(this).attr('name')
    setCookie('spfl',asd,'/',1)
    window.location.href="../page/fplist.html#1"
  })
  $('#ganguo').click(function(){
    var asd=$(this).attr('name')
    setCookie('spfl',asd,'/',1)
    window.location.href="../page/fplist.html#2"
  })
  $('#liangyou').click(function(){
    var asd=$(this).attr('name')
    setCookie('spfl',asd,'/',1)
    window.location.href="../page/fplist.html#3"
  })
   $('#qita').click(function(){
    var asd=$(this).attr('name')
    setCookie('spfl',asd,'/',1)
    window.location.href="../page/fplist.html#4"
  })
	
 
  

});
