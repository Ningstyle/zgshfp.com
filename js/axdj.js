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
    //退出登录(本地)
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
    setCookie('Lbid','','/',1)
    //需求类别
    Lb1()
	function Lb1(){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"getItName",jsonStr:'{}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			jsonpCallback:"callbackparam",
			success:function(e){
				var data = e.itnames
				$('.Leibie').empty()
				if(data){
					for(var i =0;i<data.length;i++){
						var html =''
						html+='<a href="javascript:;" name="'+data[i].itid+'" class="lb1">'+data[i].itname+'</a>'
						$('.Leibie').append(html)
					}
				}
			}
		})
	}
	//捐赠类别
	function Lb2(){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"getItName",jsonStr:'{}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			jsonpCallback:"callbackparam",
			success:function(e){
				var data = e.itnames
				$('.Leibie').empty()
				if(data){
					for(var i =0;i<data.length;i++){
						var html =''
						html+='<a href="javascript:;" name="'+data[i].itid+'" class="lb2">'+data[i].itname+'</a>'
						$('.Leibie').append(html)
						for(var j=0;j<$('.lb2').length;j++){
							if($('.lb2').eq(j).html().indexOf('资助')!=-1){
								$('.lb2').eq(j).remove()
							}else if($('.lb2').eq(j).html().indexOf('民生工程')!=-1){
								$('.lb2').eq(j).remove()
							}
						}
					}
				}
			}
		})
	}
	//爱心需求列表
	var a = 1;
	var page = 3
	// Axxq(1,'','',3)
	function Axxq(a,lb,Adid,page){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"helpList",jsonStr:'{"userId":"","type":"","name":"","sort":"","itId":"'+lb+'","regionid":"'+Adid+'","auditstatus":2,"pageNow":'+a+',"pageCount":'+page+'}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.helpList
				if(Adid==00){
					$('.Tips').remove()
				}else{
					if(!e.sort){
						var test = '<h2 class="Tips">抱歉，没有相关内容了！</h2>'
						$('.main').append(test)
						$('#sds').css({'display':'none'})
					}else{
						$('#sds').css({'display':'block'})
					}
				}
				if(data){
					for(var i =0;i<data.length;i++){
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
						var arr = []
						arr.push(data[i].homePicUrl.split(','))
						var html =''
						html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg" name="'+data[i].id+'"><div class="dangan"><p style="margin-top: 3px;">贫困档案</p><p>姓名：'+data[i].realName+'</p><p class="Xing"></p><p class="Nian"></p><p>家庭住址：'+Strb(data[i].bstUserAddress,9)+'</p><p>贫困等级：国家级建档立卡贫困户</p><a href="javascript:;" class="zhen">真</a></div><div class="neirong"><span class="neirongSpan"><p class="wang">'+data[i].realName+'</p><t>'+data[i].bstUserAddress+'</t><a href="javascript:;">捐赠</a></span><p class="want">我需要 <d>'+data[i].itemsName+'</d></p><p class="music">'+data[i].reason+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+data[i].itName+'#</p><p class="riqi">'+data[i].publishTime.substring(0,11)+'</p></div></div>'
						$('.main').append(html)
                        for(var m = 0;m<$('.Simg').length;m++){
                        	var Imgs = $('.Simg').eq(m).attr('src')
	                        if(Imgs.indexOf('.jpg')==-1){
	                        	$('.Simg').eq(m).attr('src','../images/b_header.png')
	                        }
                    	}

					}
					for(var i =0;i<$('.tupian .Se').length;i++){
						if($('.tupian .Se').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.tupian .Se').parent().children().eq(i).remove()
					}
					for(var i =0;i<$('.tupian .Se').length;i++){
						if($('.tupian .Se').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.tupian .Se').parent().children().eq(i).remove()
					}
					
				}
			}
		})
	}
	//爱心捐赠列表
	function Axjz(a,lb,page){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"loveDonateList",jsonStr:'{"pageNow":'+a+',"sort":"","pageCount":'+page+',"queryString":"","itId":"'+lb+'","type":1}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.donateList
				if(e.rspCode=='002'){
					var test = '<h2 class="Tips">抱歉，没有相关内容了！</h2>'
					$('.main').append(test)
					$('#sds').css({'display':'none'})
				}else{
					$('#sds').css({'display':'block'})
				}
				if(data){
					for(var i =0;i<data.length;i++){
						var arr = []
						arr.push(data[i].picurl.split(','))
						var html =''
						html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg"><div class="neirong"><span class="neirongSpan"><p class="wang">'+data[i].userName+'</p><t></t><a href="javascript:;">我想要</a></span><p class="want">我要捐赠 <d>'+data[i].itemsName+'</d></p><p class="music">'+data[i].itemsDesc+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+data[i].itName+'#</p><p class="riqi">'+data[i].publishTime.substring(0,11)+'</p></div></div>'
							$('.main').append(html)
							if(data[i].headpath==''){
								$('.Simg').attr('src','../images/b_header.png')
							}
					}
					for(var i =0;i<$('.tupian .Se').length;i++){
						if($('.tupian .Se').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.tupian .Se').parent().children().eq(i).remove()
					}
					for(var i =0;i<$('.tupian .Se').length;i++){
						if($('.tupian .Se').parent().children().eq(i).attr('src').indexOf("undefined")!=-1)$('.tupian .Se').parent().children().eq(i).remove()
					}
				}
			}
		})
	}

	//右侧爱心需求
	function Youx(){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"helpList",jsonStr:'{"userId":"","type":"","name":"","sort":"","itId":"","regionid":"","auditstatus":2,"pageNow":"2","pageCount":3}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.helpList
				$('.Zbox').empty()
				if(data){
					for(var i =0;i<data.length;i++){
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
						var html =''
						html+='<div class="JiaAi music1" name="'+data[i].id+'" As="'+data[i].itemsName+'" sd="2"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg"><span><p>'+data[i].realName+'</p><t>'+data[i].bstUserAddress+'</t></span><p class="kouqin">我想要 <t>'+data[i].itemsName+'</t></p><p class="like">'+Strb(data[i].reason,20)+'</p></div>'
							$('.Zbox').append(html)
							if(data[i].headpath==''){
								$('.Simg').attr('src','../images/b_header.png')
							}
					}
				}
			}
		})
	}
		Youa()
	//右侧爱心捐赠
	function Youa(){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"loveDonateList",jsonStr:'{"pageNow":"1","sort":"","refreshtime+desc":"","pageCount":6,"queryString":"","itId":"","type":1}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.donateList
				$('.Zbox').empty()
				// $('.Sx').html('爱心捐赠')
				if(data){
					for(var i =0;i<data.length;i++){
						var arr = []
						arr.push(data[i].picurl.split(','))
						var html =''
						html+='<div class="Jia music1" love="'+data[i].loveNo+'" As="'+data[i].itemsName+'" name="'+data[i].id+'" sd="1"><span><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="140" height="140"><p>'+Strb(data[i].itemsName,16)+'</p><a href="javascript:;"></a></span>'
							$('.Zbox').append(html)
					}
				}
			}
		})
	}
	var Qb = 0
	//爱心需求点击事件
	$('.axxq').click(function(){
		$('#Qu').addClass('active')
		$('.Leibie a').removeClass('active')
		$('.city').html('[全国]')
		setCookie('Lcitys','','/',-1)
		Qb=0
		$('.city').css({'display':'block'})
		a=1
		setCookie('Lbid','','/',1)
		$('#More').attr('class','more1')
		$('#sds').attr('class','More')
		$(this).addClass('xq')
		$('.axjz').removeClass('xq')
		$('.Sx').html('爱心捐赠')
		$('.main').empty()
		Axxq(1,'','',3)
		Lb1()
		Youa()
		$('#sds').css({'display':'block'})
	})
	//爱心捐赠点击事件
	$('.axjz').click(function(){
		$('#Qu').addClass('active')
		$('.Leibie a').removeClass('active')
		Qb=1
		$('.city').css({'display':'none'})
		a=1
		setCookie('Lbid','','/',1)
		$('#More').attr('class','more')
		$('#sds').attr('class','More1')
		$(this).addClass('xq')
		$('.axxq').removeClass('xq')
		$('.Sx').html('爱心需求')
		$('.main').empty()
		Axjz(1,'',3)
		Lb2()
		Youx()
	})
	//需求类别点击事件
	$('body').delegate('.Leibie a.lb1', 'click', function(event) {
		// setCookie('Lcitys','','/',-1)
		a=1
		$('.contentDatop a').removeClass('active')
		$(this).addClass('active')
		var Fid = $(this).attr('name')
		setCookie('Lbid',Fid,'/',1)
		$('.main').empty()
		var cityid = getCookie("Lcitys")
		if(cityid&&cityid!=00){
			Axxq(1,Fid,cityid,3)
		}else{
			Axxq(1,Fid,'',3)
		}
	});
	//捐赠类别点击事件
	$('body').delegate('.Leibie a.lb2', 'click', function(event) {
		a=1
		$('.contentDatop a').removeClass('active')
		$(this).addClass('active')
		var Fid = $(this).attr('name')
		setCookie('Lbid',Fid,'/',1)
		$('.main').empty()
		Axjz(1,Fid,3)
	});
	//右侧更多
	$('body').delegate('.more', 'click', function(event) {
		var Lns = escape('id=?love=?tips=xq?as=')
		window.location.href='../page/heart1-detail.html?'+Lns
	});
	$('body').delegate('.more1', 'click', function(event) {
		var Lns1 = escape('id=?love=?tips=jz?as=')
		window.location.href='../page/heart1-detail.html?'+Lns1
	});
	//点击进入详情页面
	$('body').delegate('.music1', 'click', function(event) {
		var id = $(this).attr('name')
		var love = $(this).attr('love')
		var As = $(this).attr('As')
		var Lns2 =escape("tips=?id="+id+"?love="+love+"?as="+As)
		window.location.href="../page/heart1-detail.html?"+Lns2

	});

	//贫困档案
	function getPkInfo(a){ 
		// var s = {objId:a}
		var json = {jsonStr:'{objId:"'+a+'"}',marked:"getPublishUsersInfo"};
		$.ajax({
            type: "GET",
            url:  addr.a+'/server/receiveWebHttp/receive',
            dataType: "jsonp", 
            data: json,
			jsonp:"callbackparam",
			success: function (e) {  
				console.log(e)
				$('.Nian').html('')
				$('.Xing').html('性别：'+e.sex)	
				$('.Nian').html('年龄：'+e.age)		    
			}
		})
	} 
		
	//鼠标移入头像显示详情
	$('body').delegate('.main .Simg', 'mouseover', function(event) {
		$(this).parent().find('.dangan').css({'display':'block'})
		// alert($(this).attr('name'))
		getPkInfo($(this).attr('name'))
	});
	$('body').delegate('.main .Simg', 'mouseout', function(event) {
		$(this).parent().find('.dangan').css({'display':'none'})
	});

	//城市选择
	$('.city').click(function(){
		if($('#quanguo').css('display')=='block'){
			$('#quanguo').css({'display':'none'})
		}else{
			$('#quanguo').css({'display':'block'})
		}
	})
	/*点击其他区域隐藏城市列表*/
	$('body').click(function(e){
  		var _con = $('.city');
  		if(!_con.is(e.target) && _con.has(e.target).length === 0){
  	     $('#quanguo').css({'display':'none'})
  		}
	});
	/*选择城市*/
	var numbers = 0
	$('.quanguo span').click(function(){
		$(this).addClass('active')
		$('#Qu').addClass('active')
		$('.Leibie a').removeClass('active')
		var LHtml = $(this).html()
		setCookie("InCity",LHtml,'/',1)
		$('.quanguo span').removeClass('active')
		$(this).addClass('active')
		$('.city').html('['+$(this).html()+']')
		for(var i =0;i<iplocations.length;i++){
           if(LHtml.indexOf(iplocations[i].name)!=-1){
                numbers = iplocations[i].id
                setCookie("Lcitys",numbers,'/',1)
                $('.main').empty()
                Axxq(1,'',numbers,3)
           }
      	}
      	if(LHtml=='全国'){
      		$('.main').empty()
            Axxq(1,'','',3)
            $('.Tips').remove()
      	}
	})
	//全部
	$('#Qu').click(function(){
		$(this).addClass('active')
		$('.Leibie a').removeClass('active')
		if(Qb==0){
			setCookie('Lbid','','/',1)
			var cityid = getCookie("Lcitys")
			if(cityid&&cityid!=00){
				$('.main').empty()
        		Axxq(1,'',cityid,3)
			}else{
				$('.main').empty()
        		Axxq(1,'','',3)
			}
			
		}else{
			setCookie('Lbid','','/',1)
			$('.main').empty()
        	Axjz(1,'',3)
		}
	})
	//需求列表加载更多
	$('body').delegate('.More','click',function(){
		// alert()
		a++
		var Sid = getCookie('Lbid')
		var cityid = getCookie("Lcitys")
		if(cityid&&cityid!=00){
			Axxq(a,Sid,cityid,3)
			// if(Sid){
			// 	Axxq(a,Sid,'',3)
			// }else{
			// 	Axxq(a,'','',3)
			// }
		}else{
			Axxq(a,Sid,'',3)
		}
		
		
	})
	//捐赠列表加载更多
	$('body').delegate('.More1','click',function(){
		a++
		var Sid = getCookie('Lbid')
		if(Sid){
			Axjz(a,Sid,3)
		}else{
			Axjz(a,'',3)
		}
	})
	//默认
	var Incity = getCookie('Lcitys')
	var chengs = getCookie('InCity')
	if(Incity){
		if(Incity==00){
			$('.city').html('['+chengs+']')
			$('.main').empty()
	        Axxq(1,'','',3)
		}else if(Incity==99999){
			$('.Sx').html('爱心需求')
			$('#Qu').addClass('active')
			$('.Leibie a').removeClass('active')
			Qb=1
			$('.city').css({'display':'none'})
			a=1
			setCookie('Lbid','','/',1)
			$('#More').attr('class','more')
			$('#sds').attr('class','More1')
			$('.axjz').addClass('xq')
			$('.axxq').removeClass('xq')
			$('.main').empty()
			Axjz(1,'',3)
			Lb2()
			Youx()
		}else{
			$('.city').html('['+chengs+']')
			$('.main').empty()
	        Axxq(1,'',Incity,3)
		}
	}else{
		$('.city').html('[全国]')
		$('.main').empty()
        Axxq(1,'','',3)
	}

	//
	// if(getCookie('cookjz')){
	// 	$('#Qu').addClass('active')
	// 	$('.Leibie a').removeClass('active')
	// 	Qb=1
	// 	$('.city').css({'display':'none'})
	// 	a=1
	// 	setCookie('Lbid','','/',1)
	// 	$('#More').attr('class','more')
	// 	$('#sds').attr('class','More1')
	// 	$('.axjz').addClass('xq')
	// 	$('.axxq').removeClass('xq')
	// 	$('.Sx').html('爱心需求')
	// 	$('.main').empty()
	// 	Axjz(1,'',3)
	// 	Lb2()
	// 	Youx()
	// }else{
	// 	$('#Qu').addClass('active')
	// 	$('.Leibie a').removeClass('active')
	// 	$('.city').html('[全国]')
	// 	setCookie('Lcitys','','/',-1)
	// 	Qb=0
	// 	$('.city').css({'display':'block'})
	// 	a=1
	// 	setCookie('Lbid','','/',1)
	// 	$('#More').attr('class','more1')
	// 	$('#sds').attr('class','More')
	// 	$('.axxq').addClass('xq')
	// 	$('.axjz').removeClass('xq')
	// 	$('.Sx').html('爱心捐赠')
	// 	$('.main').empty()
	// 	Axxq(1,'','',3)
	// 	Lb1()
	// 	Youa()
	// 	$('#sds').css({'display':'block'})
	// }
})