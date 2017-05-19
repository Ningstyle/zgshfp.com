$(function(){
	setCookie("InCity",'','/',-1)
	setCookie("Lcitys",'','/',1)
	setCookie("cookjz",'','/',-1)
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


	//全国
	$('#Country').click(function(){
		if(quanguo.style.display=='block'){
			$('#quanguo').css({'display':'none'})
		}else{
			$('#quanguo').css({'display':'block'})
		}
	})

	/*选择城市*/
	var numbers = 0
	$('#quanguo span').click(function(){
		var LHtml = $(this).html()
		setCookie("InCity",LHtml,'/',1)
		for(var i =0;i<iplocations.length;i++){
           if(LHtml.indexOf(iplocations[i].name)!=-1){
                numbers = iplocations[i].id
                setCookie("Lcitys",numbers,'/',1)
           }
      	}
      	 window.location.href="page/heart1.html"
	})
	/*点击其他区域隐藏城市列表*/
	$('body').click(function(e){
  		var _con = $('#Country');
  		if(!_con.is(e.target) && _con.has(e.target).length === 0){
  	     $('#quanguo').css({'display':'none'})
  		}
	});
	//扫码显示隐藏
	$('.HOVER').mouseover(function(){
		$('.OVEROUT').css({"display":"block"})
	})
	$('.HOVER').mouseout(function(){
		$('.OVEROUT').css({"display":"none"})
	})

	//贫困档案
	function getPkInfo(a){ 
		// var s = {objId:a}
		var json = {jsonStr:'{objId:"'+a+'"}',marked:"getPublishUsersInfo"};
		$.ajax({
            type: "GET",
            url:  'http://www.zgshfp.com.cn/server/receiveWebHttp/receive',
            dataType: "jsonp", 
            data: json,
			jsonp:"callbackparam",
			success: function (e) {  
				$('.Xing').html('性别：'+e.sex)	
				$('.Nian').html('年龄：'+e.age)		    
			}
		})
	}



	//信息档案显示隐藏
	$('body').delegate('.Imgg','mouseover',function(){
		$(this).next().css({"display":"block"})
		// alert($(this).attr('name'))
		getPkInfo($(this).attr('name'))
	})

	$('body').delegate('.Imgg','mouseout',function(){
		$(this).parent().find('.dangan').css({"display":"none"})
	})
	//下载
	$('#free').click(function(){
		$('.tanchu').css({'display':'block'})
	})
	$('.spanOne').click(function(){
		$('.tanchu').css({'display':'block'})
	})
	$('.spanTwo').click(function(){
		$('.tanchu').css({'display':'block'})
	})
	$('body').delegate('.jz', 'click', function(event) {
		$('.tanchu').css({'display':'block'})
	});
	$('#del').bind('click',function(e){
		$('.tanchu').css({"display":'none'})
	})

	//公益捐助选项卡
	var i=0;
	$('.zcContentTop span').click(function(){
		i=$(this).index()
		$('.zcContentTop span').eq(i).addClass('hover').siblings().removeClass('hover');
		$('.zcContentCenter>div').eq(i).show().siblings().hide()
	})
	

	//扶贫榜单选项卡
	var t=0;
	$('#Ul a').click(function(){
		t=$(this).index()
		$('#Ul a li').removeClass('active');
		$('#Ul a li').eq(t).addClass('active')
 		$('.Ltoprightlist ul').eq(t).show().siblings().hide()
	})
	//向上滚
	var bbb=$('.gundong').html()
	var timerr1=null;
	$('.zxc').html(bbb)
	var oUlH1=$('.ppp').height()
	timerr1=setInterval(function(){
		var ml1=parseInt($('.ppp').css('margin-top'))
		if(ml1<=-(oUlH1/2)){
			ml1=1
		}
		$('.ppp').css({'margin-top':--ml1})
	},30)
	$('.ppp').mouseover(function(){
		clearInterval(timerr1)
	})
	$('.ppp').mouseout(function(){
		timerr1=setInterval(function(){
			var ml1=parseInt($('.ppp').css('margin-top'))
			if(ml1<=-(oUlH1/2)){
				ml1=1
			}
			$('.ppp').css({'margin-top':--ml1})
		},30)
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


	

	//需求，对接成功，捐钱数量统计
	$.ajax({
		url:'http://djres.zgshfp.org.cn/server/receiveWebHttp/receive',
		type:'get',
		data:{marked:"getTotal",jsonStr:{}},
		dataType:'jsonp',
		jsonp: "callbackparam",
		jsonpCallback:"callbackparam",
		success:function(data){
			// console.log(data)
			$('#ax').html(data.PUBTOTAL);
			$('#dj').html(data.SUSTOTAL);
			$('#mo').html(data.MEYTOTAL);
		}
	})

	//需求列表
	aixin()
	function aixin(){
	$.ajax({
		url:addr.a+'/server/receiveWebHttp/receive',
		type:'get',
		data:{marked:"helpList",jsonStr:'{"userId":"","type":"","name":"","sort":"","itId":"","regionid":"","auditstatus":2,"pageNow":1,"pageCount":2}'},
		dataType:'jsonp',
		jsonp: "callbackparam",
		success:function(data){
			$('.xinxi').empty()
			var data=data.helpList
			
			// console.log(data)
			if(data){
				for(var i=0;i<data.length;i++){
					if(data[i].isdysj==0){
							data[i].realName = data[i].realName
						}else if(data[i].isdysj==1){
							data[i].realName = data[i].realpubname
						}
						if(data[i].realName.length==2){
							data[i].realName = data[i].realName.substring(0,1)+'*'
						}else if(data[i].realName.length==3){
							data[i].realName = data[i].realName.substring(0,1)+'*'+data[i].realName.substring(2,3)
						}else if(data[i].realName.length==4){
							data[i].realName = data[i].realName.substring(0,1)+'*'+data[i].realName.substring(3,4)
						}else if(data[i].realName.length==5){
							data[i].realName = data[i].realName.substring(0,1)+'*'+data[i].realName.substring(4,5)
						}else if(data[i].realName.length==6){
							data[i].realName = data[i].realName.substring(0,1)+'*'+data[i].realName.substring(5,6)
						}else if(data[i].realName==""){
							data[i].realName = ''
						}
					var html='';
					var arr = []
					arr.push(data[i].homePicUrl.split(','))
					html+='<div class="xinxin"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Imgg" name="'+data[i].id+'"><div class="dangan"><p style="margin-top: 3px;">贫困档案</p><p>姓名：'+data[i].realName+'</p><p class="Xing">性别：男</p><p class="Nian">年龄：23岁</p><p>家庭住址：'+Strb(data[i].bstUserAddress,9)+'</p><p>贫困等级：国家级建档立卡贫困户</p><a href="javascript:;" class="zhen">真</a></div><span><span><t>'+data[i].realName+'</t><br/><span>'+data[i].bstUserAddress+'</span><a href="javascript:;" class="jz">捐赠</a></span><p class="want">我需要 <t>'+data[i].itemsName+'</t></p><p class="like">'+data[i].reason.slice(0,62)+'...</p><div class="yueqi"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="img1"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="img1"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="img1"></div><p class="neirong">#'+data[i].itName+'#</p></span></div>'

					$('.xinxi').append(html)
					// console.log(data[0].realpubname)
					if(data[i].headpath==''){
						$('.Imgg').attr('src','images/b_header.png')
					}
				}
					for(var i =0;i<$('.yueqi .img1').length;i++){
						if($('.yueqi .img1').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.yueqi .img1').parent().children().eq(i).remove()
					}
					for(var i =0;i<$('.yueqi .img1').length;i++){
						if($('.yueqi .img1').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.yueqi .img1').parent().children().eq(i).remove()
					}
				// $('.main').append(html)
			}
		}
	})
}
//爱心捐赠
 $('.ContentTop>span').eq(0).click(function(){
 	$('#MORE1').attr('class','Mored')
 	$(this).addClass('COLOR').siblings().removeClass("COLOR")
 	$('#Country').css({'display':'block'})
 	aixin()
 	
 })

	 $('.ContentTop>span').eq(1).click(function(){
	 	$('#MORE1').attr('class','Mores')
	 	$(this).addClass('COLOR').siblings().removeClass("COLOR")
	 	
	 	$('#Country').css({'display':'none'})
	 	$.ajax({
		url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"loveDonateList",jsonStr:'{"pageNow":"1","sort":"","refreshtime+desc":"","pageCount":2,"queryString":"","itId":"","type":1}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
		success:function(data){
			$('.xinxi').empty()
			var data=data.donateList
			
			
			// console.log(data)
			if(data){
				for(var i=0;i<data.length;i++){
					var html='';
					var arr = []
					arr.push(data[i].picurl.split(','))
					html+='<div class="xinxin"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Imgg"><span><span><t>'+data[i].userName+'</t><br/><a href="javascript:;" class="jz">我想要</a></span><p class="want">我要捐赠 <t>'+data[i].itemsName+'</t></p><p class="like">'+data[i].reason.slice(0,66)+'...</p><div class="yueqi"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="img1"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="img1"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="img1"></div><p class="neirong">#'+data[i].itName+'#</p></span></div>'

					$('.xinxi').append(html)
					if(data[i].headpath==''){
						$('.Imgg').attr('src','images/b_header.png')
					}
					
				}

				for(var i =0;i<$('.yueqi .img1').length;i++){
						if($('.yueqi .img1').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.yueqi .img1').parent().children().eq(i).remove()
					}
					for(var i =0;i<$('.yueqi .img1').length;i++){
						if($('.yueqi .img1').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.yueqi .img1').parent().children().eq(i).remove()
					}
			}
		}
	})

	 })
	 
	$('body').delegate('.img1','click',function(event){
		var hel = -1;
		if(event.target.nodeName == 'IMG'){
			var imgs=$(event.target).parent().find('img')
			var srcs = [];
			for(var i=0;i<imgs.length;i++){
				srcs.push(imgs[i].currentSrc)
			}
			 hel=$(this).index()
			new Move(500,460,srcs.length,srcs,hel)
		}
		$('.pic-pos').css('display','block')
		// console.log($('.pic-pos'))
						
	})
	$('body').delegate('.img1','click',function(event){
		var hel = -1;
		if(event.target.nodeName == 'IMG'){
			var imgs=$(event.target).parent().find('img')
			var srcs = [];
			for(var i=0;i<imgs.length;i++){
				srcs.push(imgs[i].currentSrc)
			}
			 hel=$(this).index()
			new Move(500,460,srcs.length,srcs,hel)
		}
		$('.pic-pos').css('display','block')
		console.log($('.pic-pos'))
						
	})
	//筹钱列表
	$.ajax({
	   type: "get",
	   url: addr1.a+"/shfp/ajaxpagequery/zc/z004/getfpzhongchouList?callback=?",
	   data:{pageSize:1,pageIndex:0,acr012:1,xmpx:1},
	   dataType:'jsonp',
	   jsonp:'jsonpCallback',
	   success: function(data){
			
			var data=data.result.pageresult.data
			// console.log(data)
			if(data){
				// console.log(data[0].acr065)
				var html='';
				if(data[0].acr018==1){
					data[0].acr018='未开始'
				}else if(data[0].acr018==2){
					data[0].acr018='筹集中'
				}else if(data[0].acr018==3){
					data[0].acr018='执行中'
				}else if(data[0].acr018==4){
					data[0].acr018='已结束'
				}else if(data[0].acr018==4){
					data[0].acr018='撤销'
				}
				var EndTime = data[0].aar021//结束时间
                var nowtamp = Date.parse(new Date());//现在的时间戳
                var futtamp = Htime(EndTime)//结束时间戳
                var Surplus = futtamp-nowtamp//剩余时间戳
                var Endday = parseInt(Surplus/86400000)//剩余天数
                if(Endday<=0){
                  Endday=0
                }
                if(data[0].acr002.length>15){
                	data[0].acr002=data[0].acr002.slice(0,15)+'...'
                }else{
                	data[0].acr002=data[0].acr002
                }
				html='<img src="'+addr3.a+'/upload/shfp/zc/cut/'+data[0].acr065+'" alt="" width="580" height="290" id="zhongchou111"><span><q id="name_1">'+data[0].acr002+'</q><button id="choujizhuangtai">'+data[0].acr018+'</button><p>已筹<t style="color:#cd3f3b;font-size: 27px;" id="money">'+data[0].afqcount+'</t>元</p><i id="progress_wrap"><t id="progress"></t></i><div><a href="javascript:;" class="jindu" id="jindu">当前进度'+data[0].dacheng+'%</a><a href="javascript:;" class="renshu" id="renshu">捐款人数'+data[0].acrcount+'人</a><p class="faqi">此项目发起时间为<span style="color: #f2951d;" id="progress_state_span_id1">'+data[0].aar020+'</span>，目标筹集<span style="color:  #f2951d;" id="progress_state_span_id2">'+data[0].acr014+'</span>元，剩余时间为<span style="color:  #f2951d;" id="progress_state_span_id3">'+Endday+'</span>天</p><button class="Button1" name="'+data[0].acr001+'">我要支持</button></div></span>'
				$('#Zhon2').append(html)
				$('#progress').css({'width':data[0].dacheng+'%'})
			}
	   },
	   error:function(fs){
	   	
	   }
	});
	//筹物列表
	$.ajax({
	   type: "get",
	   url: addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/getcwList?callback=?",
	   data:{pageSize:1,pageIndex:0,acr012:2,xmpx:1},
	   dataType:'jsonp',
	   jsonp:'jsonpCallback',
	   success: function(data){
			
			var data=data.result.pageresult.data
			// console.log(data)
			if(data){
				// console.log(data[0].acr065)
				var html='';
				if(data[0].acr018==1){
					data[0].acr018='未开始'
				}else if(data[0].acr018==2){
					data[0].acr018='筹集中'
				}else if(data[0].acr018==3){
					data[0].acr018='执行中'
				}else if(data[0].acr018==4){
					data[0].acr018='已结束'
				}else if(data[0].acr018==4){
					data[0].acr018='撤销'
				}
				var EndTime = data[0].aar021//结束时间
                var nowtamp = Date.parse(new Date());//现在的时间戳
                var futtamp = Htime(EndTime)//结束时间戳
                var Surplus = futtamp-nowtamp//剩余时间戳
                var Endday = parseInt(Surplus/86400000)//剩余天数
                if(Endday<=0){
                  Endday=0
                }
                if(data[0].acr002.length>15){
                	data[0].acr002=data[0].acr002.slice(0,15)+'...'
                }else{
                	data[0].acr002=data[0].acr002
                }
                // alert(data[0].aar020)
				html='<img src="'+addr3.a+'/upload/shfp/zc/cut/'+data[0].acr065+'" alt="" width="580" height="290" id="zhongchou111"><span><q id="name_1">'+data[0].acr002+'</q><button id="choujizhuangtai">'+data[0].acr018+'</button><p>已筹<t style="color:#cd3f3b;font-size: 27px;" id="money">'+data[0].afqcount+'</t>件物品</p><i id="progress_wrap"><t id="progress"></t></i><div><a href="javascript:;" class="jindu" id="jindu">当前进度'+data[0].dacheng+'%</a><a href="javascript:;" class="renshu" id="renshu">支持人数'+data[0].acrcount+'人</a><p class="faqi">此项目发起时间为<span style="color: #f2951d;" id="progress_state_span_id1">'+data[0].aar020+'</span>，目标筹集<span style="color:  #f2951d;" id="progress_state_span_id2">'+data[0].acr014+'</span>件，剩余时间为<span style="color:  #f2951d;" id="progress_state_span_id3">'+Endday+'</span>天</p><button class="Button" name="'+data[0].acr001+'">我要支持</button></div></span>'
				$('#Zhon1').append(html)
				$('#progress').css({'width':data[0].dacheng+'%'})
			}
	   },
	   error:function(fs){
	   	
	   }
	});
	
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

	 //店铺榜单
	 $.ajax({
	 	url:addr.a+'/shfp/ajaxquery/mall/index/querystorebillboard?callback=?',
	 	dataType:'jsonp',
	   	jsonp:'jsonpCallback',
	   	success:function(e){
	   		var dianpu=e.result.data
	   		var Ml='';
	   		// if(dianpu.length<6){
	   			for(var i=0;i<6;i++){
		   			Ml+='<a href="'+dianpu[i].mfr004+'"><li><span>'+dianpu[i].mfr002.substring(0,10)+'</span><t>销售额：<span style="color: #ce413a;">'+dianpu[i].salevolumes.toString().split('.')[0]+'</span>元</t></li></a>'
		   		}
		   		$('#Dianpu').append(Ml)
	   		// }
	   		
	   	}
	 })
	 //商品榜单
	 $.ajax({
	 	url:addr.a+'/shfp/ajaxquery/mall/index/querygoodsBillboard?callback=?',
	 	dataType:'jsonp',
	   	jsonp:'jsonpCallback',
	   	success:function(e){
	   		var Sp='';

	   		var shangpin=e.result.data
	   		for(var i=0;i<3;i++){
	   			Sp+='<a href="'+shangpin[i].mfr054+'"><li><span>'+shangpin[i].mfr051+'</span><t>销售额：<span style="color: #ce413a;">'+shangpin[i].salevolumes.toString().split('.')[0]+'</span>元</t></li></a>'
	   		}
	   		$('#Sp').append(Sp)
	   	}
	 })


	 
	 //热门及栏目展示
	 $.ajax({
	 	url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/getColumn",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        data:{pageSize:4,pageIndex:0},
        success:function(e){
        	
        	var ZS='';
        	var data=e.result.pageresult.data
        	for(var i=0;i<data.length;i++){
        		ZS+='<a href="javascript:;" name="'+data[i].aaa102+'"><li>'+data[i].aaa103+'</li></a>'
        	}
        	$('#Ul').append(ZS)
        	$('.LtopLeftlist li').eq(0).attr('class','active')
        }
	 })

	 //其他栏目展示页
 function Ajax(a){
 	 $.ajax({
 	 	url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        data:{pageSize:4,pageIndex:0,zss016:a},
        success:function(e){
        	var data=e.result.pageresult.data
        	var haha='';
        	// console.log(data)
        	for(var i=0;i<data.length;i++){
        		if(data[i].aar009=='中国'){
        			data[i].aar009='全国'
        		}
        		haha='<a href="javascript:;" name="'+data[i].zss001+'" class="Zsxq" ait="'+data[i].aar009+'"><li><div><img src="http://res.zgshfp.org.cn/resource/upload/zspt/image/'+data[i].bhr002+'" alt="" width="160px" height="90px" class="imggg"><p class="flexP"><span class="Ltext1">'+data[i].afp001+'</span><span class="Ltext2">#'+data[i].aaa103+'#</span><br/><br/><span class="Ltext3"><img src="images/posi.png" alt="" width="10px" height="14px"><sup class="LiL">'+data[i].aar009+'</sup><sup class="LiR">'+data[i].zss013.substring(0,10)+'</sup></span></p></div></li></a>'
        		$('#oUUUL').append(haha)
        		if(data[i].bhr002!=null){
        			// alert(1)
        			$('#oUUUL li p').eq(i).removeClass('flexP')
        			// alert(i)
      			}else{
      				// alert(i)
      				if($('#oUUUL li').find('img')){
	      				$('#oUUUL li p').eq(i).addClass('flexP')
	        			$('.imggg').remove()
        			}
        		}
        	}

        }
	 })
 }
Ajax(1)



	 

	//点击进入详情页
    $('body').delegate('.Zsxq', 'click', function(event) {
           var Sids = $(this).attr('name')
           var Lncity = $(this).attr('ait')
            setCookie('Sid',Sids,'/',1)
            setCookie('scity',Lncity,'/',1)
           window.location.href="page/Ldetails.html"
    })

    $.ajax({
 	 	url:addr.a+"/shfp/ajaxpagequery/revision/zspt/z001/showlist",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        data:{pageSize:3,pageIndex:0},
        success:function(e){

        	var data=e.result.pageresult.data
        	// console.log(data)
        	var haha='';
        	for(var i=0;i<data.length;i++){

        		haha+='<li><b></b><a class="Zsxq" name="'+data[i].zss001+'" ait="'+data[i].aar009+'" href="javascript:;" style="color: #666666;">'+Strb(data[i].afp001,13)+'</a></li>'
        		
        	}
        	$('#oooo').append(haha)

        }
	 })
    
    //点击其他栏目展示

	 $('body').delegate('.LtopLeftlist a', 'click', function() {
	 	  $('#oUUUL').empty()
	 	  var NUM = $(this).attr('name')
          $('.LtopLeftlist a li').removeClass('active')
          $('.LtopLeftlist a li').eq(NUM-1).addClass('active')
          Ajax(NUM)
     });
	


$('body').delegate('.Button','click',function(){
	var Cooki=$(this).attr('name')
	setCookie('Xmbh',Cooki,'/',1)
	// alert(Cooki)
	window.location.href='page/chouwu.html'
})

$('body').delegate('.Button1','click',function(){
	var Cooki=$(this).attr('name')
	// alert(Cooki)
	setCookie('qbh',Cooki,'/',1)
	window.location.href='page/chouqian.html'
})




//个人排行榜数据请求
function fanren(url){
	$.ajax({
		url:url,
	    async:true,
	    dataType:'jsonp',
	    jsonp:'callback',
	    success:function(e){
	    	var data=e.result.pageresult.data

	    	var hhhh='';
	    	for(var i=0;i<data.length;i++){
	    		
	    		hhhh+='<li><a href="javascript:;">'+(i+1)+'</a><t>'+data[i].uus035+'</t><span>'+data[i].afa007+'积分</span></li>'
	    	}
	    	$('#dianxin1').append(hhhh)
	    	
	    }
	})
}
fanren(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getDYSJXQ?pageSize=5&pageIndex=0')

$('#YEAR1').click(function(){
	$(this).css({"color":"#cd403b"}).siblings().css({"color":"#919090"})
	$('#dianxin1').empty()
	fanren(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getXQ?pageSize=5&pageIndex=0')
})
$('#TOTAL1').click(function(){
	$(this).css({"color":"#cd403b"}).siblings().css({"color":"#919090"})
	$('#dianxin1').empty()
	fanren(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getUserN?pageSize=5&pageIndex=0')
})
$('#MONTH1').click(function(){
	$(this).css({"color":"#cd403b"}).siblings().css({"color":"#919090"})
	$('#dianxin1').empty()
	fanren(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getDYSJXQ?pageSize=5&pageIndex=0')
})

function fanren1(url){
	$.ajax({
		url:url,
	    async:true,
	    dataType:'jsonp',
	    jsonp:'callback',
	    success:function(e){
	    	var data=e.result.pageresult.data
	    	var hhhh='';
	    	for(var i=0;i<5;i++){
	    		hhhh+='<li><a href="javascript:;">'+(i+1)+'</a><t>'+data[i].uus035+'</t><span>'+data[i].afa007+'积分</span></li>'
	    	}
	    	$('#dianxin').append(hhhh)
	    	
	    }
	})
}
fanren1(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getXQ?pageSize=5&pageIndex=0')
$('#YEAR').click(function(){
	$(this).css({"color":"#cd403b"}).siblings().css({"color":"#919090"})
	$('#dianxin').empty()
	fanren1(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getXQ?pageSize=5&pageIndex=0')
})
$('#TOTAL').click(function(){
	$(this).css({"color":"#cd403b"}).siblings().css({"color":"#919090"})
	$('#dianxin').empty()
	
	fanren1(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getUserN?pageSize=5&pageIndex=0')
})
$('#MONTH').click(function(){
	$(this).css({"color":"#cd403b"}).siblings().css({"color":"#919090"})
	$('#dianxin').empty()
	fanren1(addr.a+'/shfp/ajaxpagequery/revision/pjpt/getXQ?pageSize=5&pageIndex=0')
})
		//需求更多
		$('body').delegate('.Mored', 'click', function(event) {
			window.location.href="page/heart1.html"
		});
		 //捐赠更多
		 $('body').delegate('.Mores', 'click', function(event) {
		 	setCookie('Lcitys',99999,'/',1)
			window.location.href="page/heart1.html"
		});

})


// 点击“回到顶部”按钮
window.onscroll = function() {
	if (document.body.scrollTop
			|| document.documentElement.scrollTop > 0) {
		document.getElementById('rTop').style.display = "block"
	} else {
		document.getElementById('rTop').style.display = "none"
	}
}
function toTop() {
	window.scrollTo('0', '0');
	document.getElementById('rTop').style.display = "none"
}
