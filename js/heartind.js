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
     var mn =0
     var diqu = getCookie('diqu')
     if(diqu){
     	$('.main').empty()
     	$('.city').html('['+diqu+']')
     	var test = '<h2 class="Tips">抱歉，暂无相关类别捐赠信息！</h2>'
		$('.main').append(test)
		$('.More').css({'display':'none'})
     }else{
     	setCookie('diqu','全国','/',1)
     	$('.city').html('[全国]')
     }
     if(diqu=='全国'){
     	$('.main').empty()
     	Axxq(1,'',3)
     }
	$('.city').click(function(){
		if($('.quanguo').css('display')=='block'){
			$('.quanguo').css({'display':'none'})
		}else{
			$('.quanguo').css({'display':'block'})
		}
	})
	/*点击其他区域隐藏城市列表*/
	$('body').click(function(e){
  		var _con = $('.city');
  		if(!_con.is(e.target) && _con.has(e.target).length === 0){
  	     $('.quanguo').css({'display':'none'})
  		}
	});
	//物品类别1
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
	//物品类别2
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
	//爱心需求
	var a = 1
	var page = 3
	// Axxq(1,'')
	function Axxq(a,lb,page){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"helpList",jsonStr:'{"userId":"","type":"","name":"","sort":"","itId":"'+lb+'","regionid":"","auditstatus":2,"pageNow":'+a+',"pageCount":'+page+'}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.helpList
				if(e.helpList==""){
					var test = '<h2 class="Tips">抱歉，暂无相关类别需求信息！</h2>'
					$('.main').append(test)
					$('.More').css({'display':'none'})
				}else{
					$('.More').css({'display':'block'})
				}
				if(data){
					for(var i =0;i<data.length;i++){
						// if(data.length<3){
						// 	$('.More').css({'display':'none'})
						// }
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
						// if(data[i].headpath==''){
						// 	$('.Simg').attr('src','../images/b_header.png')
						// }
						var html =''
						html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg"><div class="dangan"><p style="margin-top: 3px;">贫困档案</p><p>姓名：'+data[i].realName+'</p><p>性别：男</p><p>年龄：23岁</p><p>家庭住址：'+Strb(data[i].bstUserAddress,9)+'</p><p>贫困等级：国家级建档立卡贫困户</p><a href="javascript:;" class="zhen">真</a></div><div class="neirong"><span class="neirongSpan"><p class="wang">'+data[i].realName+'</p><t>'+data[i].bstUserAddress+'</t><a href="javascript:;">捐赠</a></span><p class="want">我需要 <d>'+data[i].itemsName+'</d></p><p class="music">'+data[i].reason+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+data[i].itName+'#</p><p class="riqi">'+data[i].publishTime.substring(0,11)+'</p></div></div>'
						$('.main').append(html)
						for(var j = 0;j<$('.Se').length;j++){
                        	var Imgs = $('.Se').eq(j).attr('src')
	                        if(Imgs.indexOf('undefined')!=-1){
	                        	$('.tupian .Se').eq(j).remove()
	                        }
                        }
                        for(var m = 0;m<$('.Simg').length;m++){
                        	var Imgs = $('.Simg').eq(m).attr('src')
	                        if(Imgs.indexOf('.jpg')==-1){
	                        	$('.Simg').eq(m).attr('src','../images/b_header.png')
	                        }
                    	}
					}
				}
			}
		})
	}
	//爱心捐赠
	function Axjz(a,lb,page){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"loveDonateList",jsonStr:'{"pageNow":'+a+',"sort":"","refreshtime+desc":"","pageCount":'+page+',"queryString":"","itId":"'+lb+'","type":1}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.donateList
				if(e.rspCode=='002'){
					var test = '<h2 class="Tips">抱歉，暂无相关类别捐赠信息！</h2>'
					$('.main').append(test)
				}
				if(data){
					if(data.length<3){
						$('.More1').css({'display':'none'})
					}
					for(var i =0;i<data.length;i++){
						var arr = []
						arr.push(data[i].picurl.split(','))
						var html =''
						html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg"><div class="neirong"><span class="neirongSpan"><p class="wang">'+data[i].userName+'</p><t></t><a href="javascript:;">我想要</a></span><p class="want">我要捐赠 <d>'+data[i].itemsName+'</d></p><p class="music">'+data[i].itemsDesc+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+data[i].itName+'#</p><p class="riqi">'+data[i].publishTime.substring(0,11)+'</p></div></div>'
							$('.main').append(html)
							if(data[i].headpath==''){
								$('.Simg').attr('src','../images/b_header.png')
							}
							for(var j = 0;j<$('.Se').length;j++){
	                        	var Imgs = $('.Se').eq(j).attr('src')
		                        if(Imgs.indexOf('undefined')!=-1){
		                        	$('.tupian .Se').eq(j).remove()
		                        }
	                        }
					}
				}
			}
		})
	}
	function Xq(id,xuayo){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"helpDetail",jsonStr:'{"type":"1","id":"'+id+'"}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
					if(e.length>1){
						$('.More1').css({'display':'none'})
					}else{
						$('.More').css({'display':'block'})
					}
				if(e){
					var arr = []
					arr.push(e.homePicUrl.split(','))
					var html =''
					html+='<div class="mainDa"><img src="'+e.headpath+'" alt="" width="60" height="60" class="Simg"><div class="dangan"><p style="margin-top: 3px;">贫困档案</p><p>姓名：'+e.realpubname+'</p><p>性别：'+e.bstGender+'</p><p>年龄：'+e.age+'</p><p>家庭住址：'+Strb(e.bstUserAddress,9)+'</p><p>贫困等级：国家级建档立卡贫困户</p><a href="javascript:;" class="zhen">真</a></div><div class="neirong"><span class="neirongSpan"><p class="wang">'+e.realpubname+'</p><t>'+e.bstUserAddress+'</t><a href="javascript:;">捐赠</a></span><p class="want">我需要 <d>'+e.itemsName+'</d></p><p class="music">'+e.reason+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+e.itName+'#</p><p class="riqi">'+e.publishTime.substring(0,11)+'</p></div></div>'
						$('.main').append(html)
						if(e.headpath==''){
							$('.Simg').attr('src','../images/b_header.png')
						}
						for(var j = 0;j<$('.Se').length;j++){
                        	var Imgs = $('.Se').eq(j).attr('src')
	                        if(Imgs.indexOf('undefined')!=-1){
	                        	$('.tupian .Se').eq(j).remove()
	                        }
                        }
				}
			}
		})
	}

	//获取捐赠详情
	
	function Xq1(id,love,xuayo){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"donateDetail",jsonStr:'{"type":"1","id":"'+id+'","loveNo":"'+love+'"}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
					$('.More').css({'display':'none'})
					// $('.More').css({'display':'none'})
				if(e){
					var arr = []
					arr.push(e.homePicUrl.split(','))
					var html =''
					html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+e.headpath+'" alt="" width="60" height="60" class="Simg"><div class="neirong"><span class="neirongSpan"><p class="wang">匿名用户</p><t></t><a href="javascript:;">我想要</a></span><p class="want">我要捐赠 <d>'+xuayo+'</d></p><p class="music">'+e.itemsDesc+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+e.itName+'#</p><p class="riqi">'+e.publishTime.substring(0,11)+'</p></div></div>'
						$('.main').append(html)
						if(e.headpath==''){
							$('.Simg').attr('src','../images/b_header.png')
						}
						for(var j = 0;j<$('.Se').length;j++){
                        	var Imgs = $('.Se').eq(j).attr('src')
	                        if(Imgs.indexOf('undefined')!=-1){
	                        	$('.tupian .Se').eq(j).remove()
	                        }
                        }
				}
			}
		})
	}
	$('.More1').css({'display':'none'})
		$('.main').empty()
		var on = getCookie('on')
		var id = $(this).attr('name')
		var xuyao = $(this).attr('As')
		var love = $(this).attr('love')
		var sd = $(this).attr('sd')
		if(on==1){
			$('.axjz').removeClass('xq')
			$('.axxq').addClass('xq')
			Xq(id,xuyao)
		}else{
			$('.axxq').removeClass('xq')
			$('.axjz').addClass('xq')
			Xq1(id,love,xuyao)
		}
	
	//需求点击
	$('.axxq').click(function(){
		$('#Qu').attr('class','Quanbu')
		// $('.asd').addClass('music')
		a=1
		$('#Qu').addClass('active')
		$('.main').empty()
		$('.axjz').removeClass('xq')
		$(this).addClass('xq')
		Axxq(1,'',page)
		Lb1()
		Youa()
		$('#sds').attr('class','More')
		$('.shang a').attr('class','morea')
		$('.city').css({
			'display':'block'
		})
	})
	//捐赠点击
	$('.axjz').click(function(){
		$('#Qu').attr('class','Quanbu1')
		mn =1
		$('#Qu').addClass('active')
		// $('.asd').addClass('music1')
		a=1
		$('.main').empty()
		$('.axxq').removeClass('xq')
		$(this).addClass('xq')
		Axjz(1,'',page)
		Lb2()
		Youx()
		$('#sds').attr('class','More1')
		$('.shang a').attr('class','mores')
		$('.city').css({
			'display':'none'
		})
		$('.More1').css({'display':'block'})
	})
	
	//类别点击1
	$('body').delegate('.lb1', 'click', function(event) {
		$('#sds').css({'display':'none'})
		a=1
		$('.main').empty()
		$('.lb1').removeClass('active')
		$('#Qu').removeClass('active')
		$(this).addClass('active')
		var side = $(this).attr('name')
		Axxq(1,side,30)
	});
	//类别点击2
	$('body').delegate('.lb2', 'click', function(event) {
		$('#sds').css({'display':'none'})
		a=1
		$('.main').empty()
		$('#Qu').removeClass('active')
		$('.lb2').removeClass('active')
		$(this).addClass('active')
		var side = $(this).attr('name')
		Axjz(1,side,30)

	});

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
				$('.Sx').html('爱心捐赠')
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
				$('.Sx').html('爱心需求')
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
						html+='<div class="JiaAi music1" name="'+data[i].id+'" As="'+data[i].realName+'" sd="2"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg"><span><p>'+data[i].realName+'</p><t>'+data[i].bstUserAddress+'</t></span><p class="kouqin">我想要 <t>'+data[i].itemsName+'</t></p><p class="like">'+Strb(data[i].reason,20)+'</p></div>'
							$('.Zbox').append(html)
							if(data[i].headpath==''){
								$('.Simg').attr('src','../images/b_header.png')
							}
					}
				}
			}
		})
	}




	//需求进入详情
	$('body').delegate('.music1', 'click', function(event) {
		var id = $(this).attr('name')
		var xuyao = $(this).attr('As')
		var love = $(this).attr('love')
		var ssd = $(this).attr('sd')
		setCookie('Id',id,'/',1)
		setCookie('indexfen',ssd,'/',1)
		setCookie('xuyao',xuyao,'/',1)
		setCookie('love',love,'/',1)
		$('.More1').css({'display':'none'})
		$('.main').empty()
		var on = getCookie('on')
		var id = $(this).attr('name')
		var xuyao = $(this).attr('As')
		var love = $(this).attr('love')
		var sd = $(this).attr('sd')
		if(on==1){
			$('.axjz').removeClass('xq')
			$('.axxq').addClass('xq')
			Xq(id,xuyao)
		}else{
			$('.axxq').removeClass('xq')
			$('.axjz').addClass('xq')
			Xq1(id,love,xuyao)
		}
		// window.location.href="heart1-detail.html"
	});
	//捐赠进入详情
	// $('body').delegate('.music1', 'click', function(event) {
	// 	var love = $(this).attr('name')
	// 	var xuyao = $(this).attr('As')
	// 	var id = $(this).attr('Ab')
	// 	setCookie('love',id,'/',1)
	// 	setCookie('xuyao',xuyao,'/',1)
	// 	setCookie('IId',id,'/',1)
	// 	alert(love)
	// 	// window.location.href="heart1-detail.html"
	// });


	var mm=0
	$('body').delegate('#More', 'click', function(event) {
		a=1
		// setCookie('indexfen','2','/',1)
		// setCookie('asd','10','/',1)
		$('.nav').css({'marginTop':'108px'})
		$('.b_banner').css({'display':'none'})
		$('.divThree').css({'display':'none'})
		$('.navContentright').css({'marginTop':'-15px'})
		mm++
		if(mm%2!=0){
			a=1
			$('#Qu').attr('class','Quanbu')
			$('#Qu').addClass('active')
			setCookie('on','2','/',1)
			$('.main').empty()
			$('.axxq').addClass('xq')
			$('.axjz').removeClass('xq')
			
			Axxq(1,'',page)
			Lb1()
			Youa()
			$('#sds').attr('class','More')
			$('.shang a').attr('class','morea')
			$('.More').css({'display':'block'})
		}else{
			a=1
			$('#Qu').attr('class','Quanbu1')
			$('#Qu').addClass('active')
			setCookie('on','1','/',1)
			$('.main').empty()
			$('.axjz').addClass('xq')
			$('.axxq').removeClass('xq')
			Axjz(1,'',page)
			Lb2()
			Youx()
			$('#sds').attr('class','More1')
			$('.shang a').attr('class','mores')
			$('.More1').css({'display':'block'})
			$('.main .mainDa').eq(0).remove()
			
		}
		// window.location.href="heart1-detail.html"
	});



//更多内容1
	$('body').delegate('.More', 'click', function(event) {
		a++
		Axxq(a,'',page)
	});
	//更多内容2
	$('body').delegate('.More1', 'click', function(event) {
		a++
		Axjz(a,'',page)
	});

	//选择城市
	$('.quanguo li span').click(function(){
		$('.quanguo li span').removeClass('active')
		$(this).addClass('active')
		var lntet = $(this).html()
		$('.city').html('['+lntet+']')
		setCookie('Axcity',lntet,'/',1)
		$('.main').empty()
		var test = '<h2 class="Tips">抱歉，暂无此地区相关信息！</h2>'
		$('.main').append(test)
		$('.More').css({'display':'none'})
		if($(this).html()=='全国'){
			$('.main').empty()
			Axxq(1,'',page)
		}
	})



	$('body').delegate('.main .Simg', 'mouseover', function(event) {
		$(this).parent().find('.dangan').css({'display':'block'})
	});
	$('body').delegate('.main .Simg', 'mouseout', function(event) {
		$(this).parent().find('.dangan').css({'display':'none'})
	});


	// $('.Zbox').click(function(){
	// 	$('.tanchu').css({"display":"block"})
	// })
	if(!getCookie("init")){
		$('.axxq').addClass("xq")
		$('.axjz').removeClass("xq")
	}
	// $('.del').click(function(){
	// 	$('.tanchu').css({"display":"none"})
	// })



	// $('#Moore').click(function(){
	// 	alert()
	// })


	$('body').delegate('.Quanbu', 'click', function(event) {
		$('#sds').css({'display':'block'})
		$(this).addClass('active')
		$('.lb1').removeClass('active')
		$('.main').empty()
		Axxq(1,'',page)
	});
	$('body').delegate('.Quanbu1', 'click', function(event) {
		$('#sds').css({'display':'block'})
		$(this).addClass('active')
		$('.lb2').removeClass('active')
		$('.main').empty()
		Axjz(1,'',page)
	});
})