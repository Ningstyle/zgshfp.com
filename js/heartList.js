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
	// Axxq(1,'',3)
	function Axxq(a,lb,page){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"helpList",jsonStr:'{"userId":"","type":"","name":"","sort":"","itId":"'+lb+'","regionid":"","auditstatus":2,"pageNow":'+a+',"pageCount":'+page+'}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
				var data = e.helpList
				if(!e.sort){
					var test = '<h2 class="Tips">抱歉，没有相关内容了！</h2>'
					$('.main').append(test)
					$('#sds').css({'display':'none'})
				}else{
					$('#sds').css({'display':'block'})
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
						html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg" name="'+data[i].id+'"><div class="dangan"><p style="margin-top: 3px;">贫困档案</p><p>姓名：'+data[i].realName+'</p><p class="Xing"></p><p class="Nian"></p><p>家庭住址：'+Strb(data[i].bstUserAddress,9)+'</p><p>贫困等级：国家级建档立卡贫困户</p><a href="javascript:;" class="zhen">真</a></div><div class="neirong"><span class="neirongSpan"><p class="wang">'+data[i].realName+'</p><t>'+data[i].bstUserAddress+'</t><a href="javascript:;">捐赠</a></span><p class="want">我需要 <d>'+data[i].itemsName+'</d></p><p class="music1">'+data[i].reason+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+data[i].itName+'#</p><p class="riqi">'+data[i].publishTime.substring(0,11)+'</p></div></div>'
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
			data:{marked:"loveDonateList",jsonStr:'{"pageNow":'+a+',"sort":"","refreshtime+desc":"","pageCount":'+page+',"queryString":"","itId":"'+lb+'","type":1}'},
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
	//爱心需求详情
	function Xq(id,Tname){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"helpDetail",jsonStr:'{"type":"1","id":"'+id+'"}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
					// if(e.length>1){
					// 	$('.More1').css({'display':'none'})
					// }else{
					// 	$('.More').css({'display':'block'})
					// }
				if(e){
					if(e.realpubname.length==2){
						e.realpubname = e.realpubname.substring(0,1)+'*'
					}else if(e.realpubname.length==3){
						e.realpubname = e.realpubname.substring(0,1)+'*'+e.realpubname.substring(2,3)
					}else if(e.realpubname.length==4){
						e.realpubname = e.realpubname.substring(0,1)+'*'+e.realpubname.substring(3,4)
					}else if(e.realpubname.length==5){
						e.realpubname = e.realpubname.substring(0,1)+'*'+e.realpubname.substring(4,5)
					}else if(e.realpubname.length==6){
						e.realpubname = e.realpubname.substring(0,1)+'*'+e.realpubname.substring(5,6)
					}else if(e.realpubname==""){
						e.realpubname = ''
					}
					var arr = []
					arr.push(e.homePicUrl.split(','))
					var html =''
					html+='<div class="mainDa"><img src="'+e.headpath+'" alt="" width="60" height="60" class="Simg" name="'+e.id+'"><div class="dangan"><p style="margin-top: 3px;">贫困档案</p><p>姓名：'+e.realpubname+'</p><p class="Xing"></p><p class="Nian"></p><p>家庭住址：'+Strb(e.bstUserAddress,9)+'</p><p>贫困等级：国家级建档立卡贫困户</p><a href="javascript:;" class="zhen">真</a></div><div class="neirong"><span class="neirongSpan"><p class="wang">'+e.realpubname+'</p><t>'+e.bstUserAddress+'</t><a href="javascript:;">捐赠</a></span><p class="want">我需要 <d>'+Tname+'</d></p><p class="music">'+e.reason+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+e.itName+'#</p><p class="riqi">'+e.publishTime.substring(0,11)+'</p></div></div>'
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
	//爱心捐赠详情
	function Xq1(id,love,Tname){
		$.ajax({
			url:addr.a+'/server/receiveWebHttp/receive',
			type:'get',
			data:{marked:"donateDetail",jsonStr:'{"type":"1","id":"'+id+'","loveNo":"'+love+'"}'},
			dataType:'jsonp',
			jsonp: "callbackparam",
			success:function(e){
					// $('.More').css({'display':'none'})
					// $('.More').css({'display':'none'})
				if(e){
					var arr = []
					arr.push(e.homePicUrl.split(','))
					var html =''
					html+='<div class="mainDa"><img src="http://res.zgshfp.org.cn/upload/shfp/user/'+e.headpath+'" alt="" width="60" height="60" class="Simg"><div class="neirong"><span class="neirongSpan"><p class="wang">匿名用户</p><t></t><a href="javascript:;">我想要</a></span><p class="want">我要捐赠 <d>'+Tname+'</d></p><p class="music">'+e.itemsDesc+'</p><div class="tupian"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][1]+'" alt="" width="90" height="90" class="Se"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][2]+'" alt="" width="90" height="90" class="Se"></div><p class="yueqi">#'+e.itName+'#</p><p class="riqi">'+e.publishTime.substring(0,11)+'</p></div></div>'
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
						html+='<div class="JiaAi music" name="'+data[i].id+'" As="'+data[i].itemsName+'" sd="2"><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+data[i].headpath+'" alt="" width="60" height="60" class="Simg"><span><p>'+data[i].realName+'</p><t>'+data[i].bstUserAddress+'</t></span><p class="kouqin">我想要 <t>'+data[i].itemsName+'</t></p><p class="like">'+Strb(data[i].reason,20)+'</p></div>'
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
				if(data){
					for(var i =0;i<data.length;i++){
						var arr = []
						arr.push(data[i].picurl.split(','))
						var html =''
						html+='<div class="Jia music" love="'+data[i].loveNo+'" As="'+data[i].itemsName+'" name="'+data[i].id+'" sd="1"><span><img src="http://res.zgshfp.org.cn/upload/djpt/image/'+arr[0][0]+'" alt="" width="140" height="140"><p>'+Strb(data[i].itemsName,16)+'</p><a href="javascript:;"></a></span>'
							$('.Zbox').append(html)
					}
				}
			}
		})
	}
	var Qb = 0
	//爱心需求点击事件
	$('.axxq').click(function(){
		Qb=0
		a=1
		$('.Sx').html('爱心捐赠')
		setCookie('Lbid','','/',1)
		$('#sds').attr('class','More')
		$('#More').attr('class','more1')
		$(this).addClass('xq')
		$('.axjz').removeClass('xq')
		$('.main').empty()
		Axxq(1,'',3)
		Lb1()
		Youa()
	})
	//爱心捐赠点击事件
	$('.axjz').click(function(){
		Qb=1
		a=1
		$('.Sx').html('爱心需求')
		setCookie('Lbid','','/',1)
		$('#sds').attr('class','More1')
		$('#More').attr('class','more')
		$(this).addClass('xq')
		$('.axxq').removeClass('xq')
		$('.main').empty()
		Axjz(1,'',3)
		Lb2()
		Youx()
	})
	//需求类别点击事件
	$('body').delegate('.Leibie a.lb1', 'click', function(event) {
		a=1
		$('.contentDatop a').removeClass('active')
		$(this).addClass('active')
		var Fid = $(this).attr('name')
		setCookie('Lbid',Fid,'/',1)
		$('.main').empty()
		Axxq(1,Fid,3)
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
	
	//点击进入详情页面
	// $('body').delegate('.music1', 'click', function(event) {
	// 	var id = $(this).attr('name')
	// 	var love = $(this).attr('love')
	// 	window.location.href="../page/heart1-detail.html?id="+id+"?love="+love

	// });

	//需求列表加载更多
	$('body').delegate('.More','click',function(){
		a++
		var Sid = getCookie('Lbid')
		Axxq(a,Sid,3)
	})
	//捐赠列表加载更多
	$('body').delegate('.More1','click',function(){
		a++
		var Sid = getCookie('Lbid')
		Axjz(a,Sid,3)
	})
	// //右侧更多
	// $('body').delegate('.more', 'click', function(event) {
	// 	var Lns = escape('id=?love=?tips=xq?as=')
	// 	window.location.href='../page/heart1-detail.html?'+Lns
	// });
	// $('body').delegate('.more1', 'click', function(event) {
	// 	var Lns1 = escape('id=?love=?tips=jz?as=')
	// 	window.location.href='../page/heart1-detail.html?'+Lns1
	// });
	var mm=0
	$('body').delegate('#Mores', 'click', function(event) {
		a=1
		mm++
		if(mm%2!=0){
			$('.Sx').html('爱心捐赠')
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
			$('.Sx').html('爱心需求')
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
			
		}
		// window.location.href="heart1-detail.html"
	});
	//点击进入详情页面
	$('body').delegate('.music', 'click', function(event) {
		var id = $(this).attr('name')
		var love = $(this).attr('love')
		var As = $(this).attr('As')
		// alert(As)
		var Lns2 =escape("tips=?id="+id+"?love="+love+"?as="+As)
		window.location.href="../page/heart1-detail.html?"+Lns2

	});
	//详情展示
	var href = unescape(window.location.href.split("html?")[1])
	var id = href.split('id=')[1].split('?love')[0]
	var love = href.split('love=')[1].split('?as')[0]
	var com = href.split('tips=')[1].split('?as')[0]
	var Tname = href.split('?as=')[1]
	// alert(href)
	if(love!='undefined'){
		$('#sds').attr('class','More1')
		$('#sds').css({'display':'none'})
		$('.main').empty()
		Xq1(id,love,Tname)
		$('.Sx').html('爱心需求')
		$('.main').empty()
		$('.axjz').addClass('xq')
		$('.axxq').removeClass('xq')
		Lb2()
		Youx()
	}else{
		$('#sds').attr('class','More')
		$('#sds').css({'display':'none'})
		$('.main').empty()
		Xq(id,Tname)
		$('.Sx').html('爱心捐赠')
		$('.main').empty()
		$('.axxq').addClass('xq')
		$('.axjz').removeClass('xq')
		Lb1()
		Youa()
	}
	//更多需求展示
	if(com=='xq'){
		$('#sds').attr('class','More')
		$('.Sx').html('爱心捐赠')
		$('.main').empty()
		Axxq(1,'',3)
		$('.axxq').addClass('xq')
		$('.axjz').removeClass('xq')
		Lb1()
		Youa()
		
	}
	//更多捐赠展示
	if(com=='jz'){
		$('#sds').attr('class','More1')
		$('.Sx').html('爱心需求')
		$('.main').empty()
		Axjz(1,'',3)
		$('.axjz').addClass('xq')
		$('.axxq').removeClass('xq')
		Lb2()
		Youx()
	}

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
	//鼠标移入头像显示详情
	$('body').delegate('.main .Simg', 'mouseover', function(event) {
		$(this).parent().find('.dangan').css({'display':'block'})
		getPkInfo($(this).attr('name'))
	});
	$('body').delegate('.main .Simg', 'mouseout', function(event) {
		$(this).parent().find('.dangan').css({'display':'none'})
	});
	//全部
	$('#Qu').click(function(){
		$(this).addClass('active')
		$('.Leibie a').removeClass('active')
		if(Qb==0){
			setCookie('Lbid','','/',1)
			$('.main').empty()
    		Axxq(1,'',3)
		}else{
			setCookie('Lbid','','/',1)
			$('.main').empty()
        	Axjz(1,'',3)
		}
	})
})