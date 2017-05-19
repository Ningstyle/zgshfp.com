//公网
var comUrl = 'http://www.zgshfp.com.cn';
//测试
//var comUrl = 'http://www.shfp.com';

(function(){
	$('.by-header').load('header.html');
	$('.by-left').load('left.html');
    $('.by-right').load('by-rank.html');
    $('.by-footer').load('footer.html');
})();

//左侧标题点击事件
$('.by-left').on('click', '.left-title', function(){
    $('.by-left li').removeClass('active');
    $('.by-right').load('by-rank.html');
});

//左侧菜单点击事件
$('.by-left').on('click', '.nav-list li span', function(){
    //事件交互
    $(this).parents('.nav-list').find('li').removeClass('active');
    $(this).parent().addClass('active');
    //事件处理
    $('.by-right').load($(this).attr('url'));
});


//个人排行榜数据请求
function getPersonRankInfo(t){
	var url;
	if(t=='0'){
		url = comUrl+'/shfp/ajaxpagequery/revision/pjpt/getUser?pageSize=10&pageIndex=0';
	}else if(t=='1'){
		url = comUrl+'/shfp/ajaxpagequery/revision/pjpt/getUserN?pageSize=10&pageIndex=0';
	}else if(t=='2'){
        url = comUrl+'/shfp/ajaxpagequery/revision/pjpt/getUserN?pageSize=10&pageIndex=0';
    }else if(t=='3'){
        url = comUrl+'/shfp/ajaxpagequery/revision/pjpt/getDysjY?pageSize=10&pageIndex=0';
    }else if(t=='4'){
        url = comUrl+'/shfp/ajaxpagequery/revision/pjpt/getDysjN?pageSize=10&pageIndex=0';
    }else if(t=='5'){
        url = comUrl+'/shfp/ajaxpagequery/revision/pjpt/getDysjN?pageSize=10&pageIndex=0';
    }

    if(!url) return;

	$.ajax({
        type:'get',
        url:url,
        async:true,
        dataType:'jsonp',
        jsonp:'callback',
        success:function(data){
            if(data && data.statusCode=='200'){
                var info = data.result.pageresult.data;
                buildPersonRankHtml(info, t);
            }
        }
    })
}

//个人排行榜数据处理
function buildPersonRankHtml(data, t){
	var html='';
    for(var i=0;i<10;i++){
        html += '<li>';
        html += '<i class="num num'+(i+1)+'">'+(i+1)+'</i>';
        html += '<span class="name">'+data[i].uus035+'</span>';
        html += '<span class="score">'+data[i].afa007+'</span>';
        html += '<img class="icon person" src="img/by-no-person-icon.png">';
        html += '</li>';
    }
    $('ul.person:eq('+t+')').html(html);
}

//光荣榜点击链接
$('.by-right').on('click', '.fj-list-2 li', function(){
    var url = 'grb/prize_detail_prize_id='+$(this).attr('id')+'.html';
    $('.by-right').load(url);
});

//登录
//获取登录信息
$.ajax({
    url:comUrl+"/shfp/user/u002/getlogonUser",
    type:"get",
    dataType:"jsonp",
    jsonp:'callback',
    // jsonpCallback:'success_JsonpCallback',
    success:function(e){
        debugger;
        var data = e.result.result
        if(data){
            $('.Bangzhu').empty()
            var html = ''
            html+='<a href="../user/usercenters.html"target="_back">用户中心</a><span class="LineS"></span><a href="javascript:;"" class="Out">退出登录</a>'
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
        url:comUrl+"/shfp/user/u002/lognOut",
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
        url:comUrl+"/ssoredis/login/l001/logout",
        type:"get",
        dataType:"jsonp",
        jsonp:'callback',
        success:function(e){
           console.log(e)
        }
    })
})
