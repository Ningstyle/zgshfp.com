/**
 * Created by 王 on 2017/4/3.
 */

$(function () {
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

  
  var mainS = $('#main ul');
  

  //all所有
  //商城首页的商品分类cookie值
  var spfl=getCookie('spfl')
  //商城首页的厂家cookie值
  var changjia=getCookie('changjia')
  //分页值
  var F=0
  //本页的商品分类name值
  var sp
  $('#pl a').click(function(){
    sales.options[0].selected=true
    price.options[0].selected=true
    F=0
    $(this).addClass('current').siblings().removeClass('current')
    var indexS=$(this).index()//2开始
    var espfl=$(this).attr('name')
    setCookie('sp',espfl,'/',1)
    //本页的商品分类name值cookie
    sp=getCookie('sp')
      if(ShengYongval&&Xianval&&aaa){
        if(changjia&&sp&&cj){
          // alert(1)
          all(sp,cj,ShengYongval,Xianval,aaa,'','',F)
        }else if(sp&&changjia){
          // alert(2)
          all(sp,changjia,ShengYongval,Xianval,aaa,'','',F)
        }else if(cj){
          // alert(3)
          all(sp,cj,ShengYongval,Xianval,aaa,'','',F)
        }else if(changjia){
          // alert(4)
          all(sp,changjia,ShengYongval,Xianval,aaa,'','',F)
        }else{
          // alert(5)
          all(sp,cj,ShengYongval,Xianval,aaa,'','',F)
        }
      }else if(ShengYongval&&Xianval){
        if(changjia&&sp&&cj){
          // alert(1)
          all(sp,cj,ShengYongval,Xianval,'','','',F)
        }else if(sp&&changjia){
          // alert(2)
          all(sp,changjia,ShengYongval,Xianval,'','','',F)
        }else if(cj){
          // alert(3)
          all(sp,cj,ShengYongval,Xianval,'','','',F)
        }else if(changjia){
          // alert(4)
          all(sp,changjia,ShengYongval,Xianval,'','','',F)
        }else{
          // alert(5)
          all(sp,cj,ShengYongval,Xianval,'','','',F)
        }
      }else if(ShengYongval){
        if(changjia&&sp&&cj){
          // alert(1)
          all(sp,cj,ShengYongval,'','','','',F)
        }else if(sp&&changjia){
          // alert(2)
          all(sp,changjia,ShengYongval,'','','','',F)
        }else if(cj){
          // alert(3)
          all(sp,cj,ShengYongval,'','','','',F)
        }else if(changjia){
          // alert(4)
          all(sp,changjia,ShengYongval,'','','','',F)
        }else{
          // alert(5)
          all(sp,cj,ShengYongval,'','','','',F)
        }
      }else{
      if(changjia&&sp&&cj){
        // alert(1)
        all(sp,cj,'','','','','',F)
      }else if(sp&&changjia){
        // alert(2)
        all(sp,changjia,'','','','','',F)
      }else if(cj){
        // alert(3)
        all(sp,cj,'','','','','',F)
      }else if(changjia){
        // alert(4)
        all(sp,changjia,'','','','','',F)
      }else{
        // alert(5)
        all(sp,cj,'','','','','',F)
      }
    }

    
    
  })
  
 
  
  //本页的厂家name值
  var cj
  $('#shops a').click(function(){
    sales.options[0].selected=true
    price.options[0].selected=true
    F=0
    if(sp){
      if(sp==10000){
        $('#pl a').eq(1).addClass('current').siblings().removeClass('current')
      }else if(sp==20000){
        $('#pl a').eq(2).addClass('current').siblings().removeClass('current')
      }else if(sp==30000){
        $('#pl a').eq(3).addClass('current').siblings().removeClass('current')
      }else if(sp==40000){
        $('#pl a').eq(4).addClass('current').siblings().removeClass('current')
      }else if(sp==90000){
        $('#pl a').eq(5).addClass('current').siblings().removeClass('current')
      }
    }else if(spfl){
      $('#pl a').eq(0).addClass('current').siblings().removeClass('current')
      if(spfl==10000){
        $('#pl a').eq(1).addClass('current').siblings().removeClass('current')
      }else if(spfl==20000){
        $('#pl a').eq(2).addClass('current').siblings().removeClass('current')
      }else if(spfl==30000){
        $('#pl a').eq(3).addClass('current').siblings().removeClass('current')
      }else if(spfl==40000){
        $('#pl a').eq(4).addClass('current').siblings().removeClass('current')
      }else if(spfl==90000){
        $('#pl a').eq(5).addClass('current').siblings().removeClass('current')
      }
    }
    
    $(this).addClass('bor').siblings().removeClass('bor')
    var indexC=$(this).index()//2开始
    var echangjia=$(this).attr('name')
    setCookie('cj',echangjia,'/',1)
    //本页的厂家name值cookie
    cj=getCookie('cj')
    if(ShengYongval&&Xianval&aaa){
      if(changjia&&changjia==cj&&spfl){
        all(spfl,changjia,ShengYongval,Xianval,aaa,'','',F)
      }else{
        all(sp,cj,ShengYongval,Xianval,aaa,'','',F)
      }
    }else if(ShengYongval&&Xianval){
      if(changjia&&changjia==cj&&spfl){
        all(spfl,changjia,ShengYongval,Xianval,'','','',F)
      }else{
        all(sp,cj,ShengYongval,Xianval,'','','',F)
      }
    }else if(ShengYongval){
      if(changjia&&changjia==cj&&spfl){
        all(spfl,changjia,ShengYongval,'','','','',F)
      }else{
        all(sp,cj,ShengYongval,'','','','',F)
      }
    }else{
      if(changjia&&changjia==cj&&spfl){
        all(spfl,cj,'','','','','',F)
      }else{
        all(sp,cj,'','','','','',F)
      }
    }
    
  })
  var URL=window.location.href.split('?')[1]
 
  //厂家获取cookie

  // if(changjia==''){
  //   alert()
  //   all('',changjia'','','','','',F)
  // }

  if(changjia){
    // alert(changjia)
    if(URL==0){
      return
    }else if(URL==1){
      $('#shops a').eq(0).addClass('bor').siblings().removeClass('bor')
    }else if(URL==2){
      $('#shops a').eq(1).addClass('bor').siblings().removeClass('bor')
    }else if(URL==3){
      $('#shops a').eq(2).addClass('bor').siblings().removeClass('bor')
    }else if(URL==4){
      $('#shops a').eq(3).addClass('bor').siblings().removeClass('bor')
    }else if(URL==5){
      $('#shops a').eq(4).addClass('bor').siblings().removeClass('bor')
    }
    all('',changjia,'','','','','',F)
  }else if(changjia==''){
    all('','','','','','','',F)
  }
  var URL1=window.location.href.split('#')[1]

  //商品分类获取cookie
  if(spfl){
    if(URL1==0){
      $('#pl a').eq(1).addClass('current').siblings().removeClass('current')
    }else if(URL1==1){
      $('#pl a').eq(2).addClass('current').siblings().removeClass('current')
    }else if(URL1==2){
      $('#pl a').eq(3).addClass('current').siblings().removeClass('current')
    }else if(URL1==3){
      $('#pl a').eq(4).addClass('current').siblings().removeClass('current')
    }else if(URL1==4){
      $('#pl a').eq(5).addClass('current').siblings().removeClass('current')
    }
    all(spfl,'','','','','','',F)
    // setCookie('spfl','','/',-1)
  }
  var Zong
  function all(a,b,sf,shi,xian,money,xiaoliang,f){
    $.ajax({
      url:addr1.a+'/shfp/mall/index/search',
      type:"get",
      data:{"pageSize":100,'pageIndex':f,'catid':a,'ebpcode':b,'azc001':sf,'azc002':shi,'azc003':xian,'priceorderflag':money,'salesorderflag':xiaoliang},
      dataType:"jsonp",
      jsonp:'callback',
      beforeSend:function(){ 
          
          $('.Tanchu').css({'display':'block'})
      },
      complete:function(data) { 
          $('.Tanchu').css({'display':'none'})
      },
      success:function(data){
        $('#goods').empty()
        // console.log(data)
        var total=data.result.total
        Zong=parseInt(total/20+1)
        $('#ZZZZ').html(F+1+'/'+Zong)
        var data=data.result.data
        if(data.length>0){
          $('#bottom').css({'display':'block'})
        
          $('#totalID').html(total)
          for(var i=0;i<data.length;i++){

          var html='';
          if(data[i].name==null){
            data[i].name=''
          }
          html+='<li class="good"><a target="_blank" href="' + data[i].mfr054 + '"><img src="' + data[i].mfr053 + '" alt=""></a><p><a href="' + data[i].mfr054 + '">' + data[i].mfr051 + '</a></p><div class="bt-bar"><span class="s1">¥</span><span class="s2">' + data[i].mfr055.split('.')[0]+'.'+data[i].mfr055.split('.')[1].slice(0,2) + '</span><span class="s3">' + data[i].name + '</span> </div> </li>'
          $('#goods').append(html)
          }
        }else{
          $('#totalID').html('0')
          $('#bottom').css({'display':'none'})
          $('#goods').append('<h1 style="text-align:center;padding:20px 0;font-size:30px;">暂无相关数据</h1>')
        }
        // alert(Zong)
      }
    })
  }

  var arr2=[]
  var arr4=[]
  var Bjs
  //省
  var ShiYongval,ShengYongval,DATA1


  $('body').delegate('#selProvince','change',function(){
    Xianval=''
    aaa=''
    F=0

    sales.options[0].selected=true
    price.options[0].selected=true
    $('#SHI').empty()
    $('#SHI').append('<option value="">请选择--市--</option>')
    $('#XIAN').empty()
    $('#XIAN').append('<option value="">请选择--县--</option>')

    F=0
    Bjs=this.options[this.selectedIndex].innerHTML
    ShiYongval=$(this).val().slice(0,2)
    ShengYongval=$(this).val()
    if(ShengYongval==''){
      $('#SHI').empty()
      $('#SHI').append('<option value="">请选择--市--</option>')
      $('#XIAN').empty()
      $('#XIAN').append('<option value="">请选择--县--</option>')
      if(changjia&&changjia==cj&&spfl){
      
        all(spfl,changjia,'','','','','',F)
      }else if(sp&&cj){
        
        all(sp,cj,'','','','','',F)
      }else if(cj&&spfl){
        
        all(spfl,cj,'','','','','',F)
      }else if(changjia&&sp){
        
        all(sp,changjia,'','','','','',F)
      }else if(sp){
        
        all(sp,'','','','','','',F)
      }else if(cj){
        
        all('',cj,'','','','','',F)
      }else if(spfl){
        
        all(spfl,'','','','','','',F)
      }else if(changjia){
        
        all('',changjia,'','','','','',F)
      }else if(changjia==''){
        all('','','','','','','',F)
      }
    }else{
      if(changjia&&changjia==cj&&spfl){
        
        all(spfl,changjia,ShengYongval,'','','','',F)
      }else if(sp&&cj){
        
        all(sp,cj,ShengYongval,'','','','',F)
      }else if(cj&&spfl){
        
        all(spfl,cj,ShengYongval,'','','','',F)
      }else if(changjia&&sp){
        
        all(sp,changjia,ShengYongval,'','','','',F)
      }else if(sp){
        
        all(sp,'',ShengYongval,'','','','',F)
      }else if(cj){
        
        all('',cj,ShengYongval,'','','','',F)
      }else if(spfl){
        
        all(spfl,'',ShengYongval,'','','','',F)
      }else if(changjia){
        
        all('',changjia,ShengYongval,'','','','',F)
      }else if(changjia==''){
        all('','',ShengYongval,'','','','',F)
      }
      $.ajax({
      url:addr1.a+'/shfp/ajaxquery/mall/index/queryReagionCode',
      type:"get",
      async:false,
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
    }
    
    

    
    
})
  //市
  var Ind,DATA2,Idx
  var Xianval,DATA3
    var arr3=[]
    $('body').delegate('#SHI','change',function(){
      aaa=''
      F=0
     sales.options[0].selected=true
     price.options[0].selected=true
      F=0
      Xianval=$(this).val()
      if(Xianval==''){
        $('#XIAN').empty()
        $('#XIAN').append('<option value="">请选择--县--</option>')
        if(changjia&&changjia==cj&&spfl){
          
          all(spfl,changjia,ShengYongval,'','','','',F)
        }else if(sp&&cj){
          
          all(sp,cj,ShengYongval,'','','','',F)
        }else if(cj&&spfl){
          
          all(spfl,cj,ShengYongval,'','','','',F)
        }else if(changjia&&sp){
          
          all(sp,changjia,ShengYongval,'','','','',F)
        }else if(sp){
         
          all(sp,'',ShengYongval,'','','','',F)
        }else if(cj){
          
          all('',cj,ShengYongval,'','','','',F)
        }else if(spfl){
          
          all(spfl,'',ShengYongval,'','','','',F)
        }else if(changjia){
          
          all('',changjia,ShengYongval,'','','','',F)
        }else if(changjia==''){
          all('','',ShengYongval,'','','','',F)
        }
      }else{
        if(changjia&&changjia==cj&&spfl){
      
          all(spfl,changjia,ShengYongval,Xianval,'','','',F)
        }else if(sp&&cj){
          
          all(sp,cj,ShengYongval,Xianval,'','','',F)
        }else if(cj&&spfl){
          
          all(spfl,cj,ShengYongval,Xianval,'','','',F)
        }else if(changjia&&sp){
          
          all(sp,changjia,ShengYongval,Xianval,'','','',F)
        }else if(sp){
         
          all(sp,'',ShengYongval,Xianval,'','','',F)
        }else if(cj){
          
          all('',cj,ShengYongval,Xianval,'','','',F)
        }else if(spfl){
          
          all(spfl,'',ShengYongval,Xianval,'','','',F)
        }else if(changjia){
          
          all('',changjia,ShengYongval,Xianval,'','','',F)
        }else if(changjia==''){
           all('','',ShengYongval,Xianval,'','','',F)
        }
        $.ajax({
          url:addr1.a+'/shfp/ajaxquery/mall/index/queryReagionCode',
          type:"get",
          data:{aar002:Xianval},
          dataType:"jsonp",
          jsonp:'callback',
          success:function(e){
            $('#XIAN').empty()
            $('#XIAN').append('<option value="">请选择--县--</option>')
            var data=e.result.data
            // console.log(data)
            for(var i=0;i<data.length;i++){
              var html=''
              html+='<option value="'+data[i].aar001+'">'+data[i].aar009+'</option>'
              $('#XIAN').append(html)
            }
          }
        })
      }
      // alert(Xianval)
      

    


    
  })
    var aaa
    //县
    $('#XIAN').change(function(){
      F=0
      sales.options[0].selected=true
      price.options[0].selected=true
      F=0
      // $('#XIAN').empty()
      // $('#XIAN').append('<option value="">请选择县</option>')
      aaa=$(this).val()

      if(aaa==''){
        if(changjia&&changjia==cj&&spfl){
      
          all(spfl,changjia,ShengYongval,Xianval,'','','',F)
        }else if(sp&&cj){
          
          all(sp,cj,ShengYongval,Xianval,'','','',F)
        }else if(cj&&spfl){
          
          all(spfl,cj,ShengYongval,Xianval,'','','',F)
        }else if(changjia&&sp){
          
          all(sp,changjia,ShengYongval,Xianval,'','','',F)
        }else if(sp){
          
          all(sp,'',ShengYongval,Xianval,'','','',F)
        }else if(cj){
          
          all('',cj,ShengYongval,Xianval,'','','',F)
        }else if(spfl){
          
          all(spfl,'',ShengYongval,Xianval,'','','',F)
        }else if(changjia){
          
          all('',changjia,ShengYongval,Xianval,'','','',F)
        }else if(changjia==''){
           all('','',ShengYongval,Xianval,'','','',F)
        }
      }else{
        if(changjia&&changjia==cj&&spfl){
      
          all(spfl,changjia,ShengYongval,Xianval,aaa,'','',F)
        }else if(sp&&cj){
          
          all(sp,cj,ShengYongval,Xianval,aaa,'','',F)
        }else if(cj&&spfl){
          
          all(spfl,cj,ShengYongval,Xianval,aaa,'','',F)
        }else if(changjia&&sp){
          
          all(sp,changjia,ShengYongval,Xianval,aaa,'','',F)
        }else if(sp){
          
          all(sp,'',ShengYongval,Xianval,aaa,'','',F)
        }else if(cj){
          
          all('',cj,ShengYongval,Xianval,aaa,'','',F)
        }else if(spfl){
          
          all(spfl,'',ShengYongval,Xianval,aaa,'','',F)
        }else if(changjia){
          
          all('',changjia,ShengYongval,Xianval,aaa,'','',F)
        }else if(changjia==''){
          all('','',ShengYongval,Xianval,aaa,'','',F)
        }
      }
      
    
    })
    //销量
    var XXval
  $('#sales').change(function(){
    price.options[0].selected=true
      XXval=$(this).val()
      if(ShengYongval&&Xianval&&aaa){
        if(changjia&&changjia==cj&&spfl){
            all(spfl,changjia,ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(cj&&sp){
            all(sp,cj,ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(cj&&spfl){
            all(spfl,cj,ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(changjia&&sp){
            all(sp,changjia,ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(sp){
            all(sp,'',ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(cj){
            all('',cj,ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(spfl){
            all(spfl,'',ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(changjia){
            all('',changjia,ShengYongval,Xianval,aaa,0,XXval,F)
          }else if(changjia==''){
            all('','',ShengYongval,Xianval,aaa,0,XXval,F)
          }
      }else if(ShengYongval&&Xianval){
           if(changjia&&changjia==cj&&spfl){
            all(spfl,changjia,ShengYongval,Xianval,'',0,XXval,F)
          }else if(cj&&sp){
            all(sp,cj,ShengYongval,Xianval,'',0,XXval,F)
          }else if(cj&&spfl){
            all(spfl,cj,ShengYongval,Xianval,'',0,XXval,F)
          }else if(changjia&&sp){
            all(sp,changjia,ShengYongval,Xianval,'',0,XXval,F)
          }else if(sp){
            all(sp,'',ShengYongval,Xianval,'',0,XXval,F)
          }else if(cj){
            all('',cj,ShengYongval,Xianval,'',0,XXval,F)
          }else if(spfl){
            all(spfl,'',ShengYongval,Xianval,'',0,XXval,F)
          }else if(changjia){
            all('',changjia,ShengYongval,Xianval,'',0,XXval,F)
          }else if(changjia==''){
            all('','',ShengYongval,Xianval,'',0,XXval,F)
          }
      }else if(ShengYongval){
          if(changjia&&changjia==cj&&spfl){
            all(spfl,changjia,ShengYongval,'','',0,XXval,F)
          }else if(cj&&sp){
            all(sp,cj,ShengYongval,'','',0,XXval,F)
          }else if(cj&&spfl){
            all(spfl,cj,ShengYongval,'','',0,XXval,F)
          }else if(changjia&&sp){
            all(sp,changjia,ShengYongval,'','',0,XXval,F)
          }else if(sp){
            all(sp,'',ShengYongval,'','',0,XXval,F)
          }else if(cj){
            all('',cj,ShengYongval,'','',0,XXval,F)
          }else if(spfl){
            all(spfl,'',ShengYongval,'','',0,XXval,F)
          }else if(changjia){
            all('',changjia,ShengYongval,'','',0,XXval,F)
          }else if(changjia==''){
            all('','',ShengYongval,'','',0,XXval,F)
          }
      }else{
          if(changjia&&changjia==cj&&spfl){
            
            all(spfl,changjia,'','','',0,XXval,F)
          }else if(cj&&sp){
            all(sp,cj,'','','',0,XXval,F)
          }else if(cj&&spfl){
            
            all(spfl,cj,'','','',0,XXval,F)
          }else if(changjia&&sp){
            all(sp,changjia,'','','',0,XXval,F)
          }else if(sp){
            all(sp,'','','','',0,XXval,F)
          }else if(cj){
            all('',cj,'','','',0,XXval,F)
          }else if(spfl){
            all(spfl,'','','','',0,XXval,F)
          }else if(changjia){
            all('',changjia,'','','',0,XXval,F)
          }else if(changjia==''){
            all('','','','','',0,XXval,F)
          }
      }

      
      
  })

  
  //价格
  var Mval
  $('#price').change(function(){
    // $('#sales option').eq(0).html('销量')
    sales.options[0].selected=true
    Mval=$(this).val()
    if(ShengYongval&&Xianval&&aaa){
        if(changjia&&changjia==cj&&spfl){
          all(spfl,changjia,ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(cj&&sp){
          all(sp,cj,ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(cj&&spfl){
          all(spfl,cj,ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(changjia&&sp){
          all(sp,changjia,ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(sp){
          all(sp,'',ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(cj){
          all('',cj,ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(changjia){
          all('',changjia,ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(spfl){
          all(spfl,'',ShengYongval,Xianval,aaa,Mval,'',F)
        }else if(changjia==''){
          all('','',ShengYongval,Xianval,aaa,Mval,'',F)
        }
    }else if(ShengYongval&&Xianval){
        if(changjia&&changjia==cj&&spfl){
          all(spfl,changjia,ShengYongval,Xianval,'',Mval,'',F)
        }else if(cj&&sp){
          all(sp,cj,ShengYongval,Xianval,'',Mval,'',F)
        }else if(cj&&spfl){
          all(spfl,cj,ShengYongval,Xianval,'',Mval,'',F)
        }else if(changjia&&sp){
          all(sp,changjia,ShengYongval,Xianval,'',Mval,'',F)
        }else if(sp){
          all(sp,'',ShengYongval,Xianval,'',Mval,'',F)
        }else if(cj){
          all('',cj,ShengYongval,Xianval,'',Mval,'',F)
        }else if(changjia){
          all('',changjia,ShengYongval,Xianval,'',Mval,'',F)
        }else if(spfl){
          all(spfl,'',ShengYongval,Xianval,'',Mval,'',F)
        }else if(changjia==''){
          all('','',ShengYongval,Xianval,'',Mval,'',F)
        }
    }else if(ShengYongval){
        if(changjia&&changjia==cj&&spfl){
          all(spfl,changjia,ShengYongval,'','',Mval,'',F)
        }else if(cj&&sp){
          all(sp,cj,ShengYongval,'','',Mval,'',F)
        }else if(cj&&spfl){
          all(spfl,cj,ShengYongval,'','',Mval,'',F)
        }else if(changjia&&sp){
          all(sp,changjia,ShengYongval,'','',Mval,'',F)
        }else if(sp){
          all(sp,'',ShengYongval,'','',Mval,'',F)
        }else if(cj){
          all('',cj,ShengYongval,'','',Mval,'',F)
        }else if(changjia){
          all('',changjia,ShengYongval,'','',Mval,'',F)
        }else if(spfl){
          all(spfl,'',ShengYongval,'','',Mval,'',F)
        }else if(changjia==''){
          all('','',ShengYongval,'','',Mval,'',F)
        }
    }else{
        if(changjia&&changjia==cj&&spfl){
          all(spfl,changjia,'','','',Mval,'',F)
        }else if(cj&&sp){
          all(sp,cj,'','','',Mval,'',F)
        }else if(cj&&spfl){
          all(spfl,cj,'','','',Mval,'',F)
        }else if(changjia&&sp){
          all(sp,changjia,'','','',Mval,'',F)
        }else if(sp){
          all(sp,'','','','',Mval,'',F)
        }else if(cj){
          all('',cj,'','','',Mval,'',F)
        }else if(changjia){
          all('',changjia,'','','',Mval,'',F)
        }else if(spfl){
          all(spfl,'','','','',Mval,'',F)
        }else if(changjia==''){
          all('','','','','',Mval,'',F)
        }
    }
    
  })
function Page(){
      if(ShengYongval&&Xianval&aaa){
          if(changjia&&changjia==cj&&spfl){
            all(spfl,changjia,ShengYongval,Xianval,aaa,'','',F)
          }else if(sp&&cj){
            all(sp,cj,ShengYongval,Xianval,aaa,'','',F)
          }else if(changjia&&sp){
            all(sp,changjia,ShengYongval,Xianval,aaa,'','',F)
          }else if(cj&&spfl){
            all(spfl,cj,ShengYongval,Xianval,aaa,'','',F)
          }else if(sp){
            all(sp,'',ShengYongval,Xianval,aaa,'','',F)
          }else if(sp==''){
            all('','',ShengYongval,Xianval,aaa,'','',F)
          }else if(cj){
            all('',cj,ShengYongval,Xianval,aaa,'','',F)
          }else if(spfl){
            all(spfl,'',ShengYongval,Xianval,aaa,'','',F)
          }else if(changjia){
            all('',changjia,ShengYongval,Xianval,aaa,'','',F)
          }else if(changjia==''){
             all('','',ShengYongval,Xianval,aaa,'','',F)
          }
      }else if(ShengYongval&&Xianval){

          if(changjia&&changjia==cj&&spfl){
            all(spfl,changjia,ShengYongval,Xianval,'','','',F)
          }else if(sp&&cj){
            all(sp,cj,ShengYongval,Xianval,'','','',F)
          }else if(changjia&&sp){
            all(sp,changjia,ShengYongval,Xianval,'','','',F)
          }else if(cj&&spfl){
            all(spfl,cj,ShengYongval,Xianval,'','','',F)
          }else if(sp){
            all(sp,'',ShengYongval,Xianval,'','','',F)
          }else if(sp==''){
            all('','',ShengYongval,Xianval,'','','',F)
          }else if(cj){
            all('',cj,ShengYongval,Xianval,'','','',F)
          }else if(spfl){
            all(spfl,'',ShengYongval,Xianval,'','','',F)
          }else if(changjia){
            all('',changjia,ShengYongval,Xianval,'','','',F)
          }else if(changjia==''){
            all('','',ShengYongval,Xianval,'','','',F)
          }
      }else if(ShengYongval){

          if(changjia&&changjia==cj&&spfl){
            
            all(spfl,changjia,ShengYongval,'','','','',F)
          }else if(sp&&cj){
            
            all(sp,cj,ShengYongval,'','','','',F)
          }else if(changjia&&sp){
            all(sp,changjia,ShengYongval,'','','','',F)
          }else if(cj&&spfl){
            
            all(spfl,cj,ShengYongval,'','','','',F)
          }else if(sp){
            
            all(sp,'',ShengYongval,'','','','',F)
          }else if(sp==''){
            
            all('','',ShengYongval,'','','','',F)
          }else if(cj){
            
            all('',cj,ShengYongval,'','','','',F)
          }else if(spfl){
            
            all(spfl,'',ShengYongval,'','','','',F)
          }else if(changjia){
            
            all('',changjia,ShengYongval,'','','','',F)
          }else if(changjia==''){
            all('','',ShengYongval,'','','','',F)
          }
      }else{
          if(changjia&&changjia==cj&&spfl){
            all(spfl,changjia,'','','','','',F)
          }else if(sp&&cj){
            all(sp,cj,'','','','','',F)
          }else if(changjia&&sp){
            all(sp,changjia,'','','','','',F)
          }else if(sp==''&&cj){
            all('',cj,'','','','','',F)
          }else if(sp){
            all(sp,'','','','','','',F)
          }else if(sp==''){
            all('','','','','','','',F)
          }else if(cj){
            all('',cj,'','','','','',F)
          }else if(spfl){
            all(spfl,'','','','','','',F)
          }else if(changjia){
            all('',changjia,'','','','','',F)
          }else if(changjia==''){
            all('','','','','','','',F)
          }
      }
}
  //下一页
  $('#Xia').click(function(){
    F++
    if(F==Zong){
        F=Zong-1
    }
    Page()
  })
// 上一页
    $('#Shang').click(function(){
      F--
      if(F==-1){
        F=0
      }
      Page()
    })
    
    //首页
    $('#Shou').click(function(){
      F=0
      Page()
    })
    // 尾页
    $('#Wei').click(function(){
      F=Zong-1
      Page()
    })



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
    })

});





	
