//点击切换
  //获取登录信息
  $(function(){

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
 	//教育
    var jiaoyu = '<div class="Jiaoyu"><img src="../images/jiaoyuzizhu.png" alt="" width="350" height="230"><b class="B1"></b><p class="p1">教育资助，让天下的孩子有个美好未来</p><p class="p2">扶贫必扶智，中国社会扶贫网将启动“教育资助”众筹项目，向全社会募集资金和人才，精准投放到全国贫困...</p><span><i></i></span><div class="Bottom" style="margin-left: 15px;"><p>0%</p><p>达成率</p></div><div class="Bottom"><p>0%</p><p>已筹物品</p></div><div class="Bottom" style="border-right: none;"><p>0</p><p>支持人数</p></div></div>'
    //创业
    var Chuang ='<div class="Chuang"><img src="../images/chuangyezizhu.png" alt="" width="350" height="230"><b class="B1"></b><p class="p1">创业扶助，让创业能手带领身边的贫困家庭...</p><p class="p2">"创业扶助"众筹项目将致力于动员全社会的人、财、物力量，尤其是应用移动互联网的新理念、新模式、新技术...</p><span><i></i></span><div class="Bottom" style="margin-left: 15px;"><p>0%</p><p>达成率</p></div><div class="Bottom"><p>0%</p><p>已筹物品</p></div><div class="Bottom" style="border-right: none;"><p>0</p><p>支持人数</p></div></div>'
    //教育详情
    var Jyxq = '<ul id="jyzz"><div><h2>教育资助，让天下的孩子有个美好未来</h2></div><p>扶贫必扶智，中国社会扶贫网将启动“教育资助”众筹项目，向全社会募集资金和人才，精准投放到全国贫困家庭的孩子职业教育、远程教育、困难学生资助，以及就业支持等。努力改善贫困地区孩子的教育环境，优化教育资源，全力支持拥有梦想的孩子成就梦想，拥有美好未来。</p><p>项目将基于“互联网+大数据+精准扶贫”的理念，基于国家扶贫办建档立卡大数据资源，联合教育部、人社部的数据库、以及社会教育机构的数据库，精准、高效、闭环地推进现有穷必育、有育必成的目标。</p><img src="../images/教育资助.PNG"/></ul><ul id="cyfz"><div></ul>'
    //创业详情
    var chayx = '<ul id="jyzz"><div><h2>创业扶助，让创业能手带领身边的贫困家庭一起致富！</h2></div><p>"创业扶助"众筹项目将致力于动员全社会的人、财、物力量，尤其是应用移动互联网的新理念、新模式、新技术，开展“百、千、万幸福家庭”工程，一年内将覆盖100个贫困县、1000个致富带头人和1万个致富家庭，通过创业培训、资源支持、管理支撑等协助创业带头人与贫困家庭结成中、小、微合作社，由创业带头人带领身边的贫困家庭一起脱贫致富；同时，吸引和鼓励贫困地区在外务工的高素质人员返回家乡带领贫困家庭联合创业。</p><p>项目将基于“互联网+大数据+精准扶贫”的理念，基于中国社会扶贫网的“网络扶贫大学”、“扶贫专家”、线下的“扶贫培训站”等资源，聚合金融、产业、物流、技术、运营、管理等生态链资源，实现对项目带头人的精准选拔、体系认证、高效扶持、闭环管理。</p><p>核心是基于移动互联网，建立项目给贫困家庭带来收入增长的可信监管和有效跟踪，达成推动贫困人员达成真扶贫的目标。</p><img src="../images/创业辅助.PNG"/></ul>'
     //众筹列表
     var a =0
     function Alls(a){
            $.ajax({
                url:addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/getcwList",
                type:'get',
                dataType:"jsonp",
                data:{
                	'pageSize':100,
                    'pageIndex':a,
                    'acr012':'',
                    'xmpx':1
                },
                jsonp:'callback',
                jsonpCallback:'success_JsonpCallback',
                success:function(e){
                    var data = e.result.pageresult.data
                    var arr=[],arr1=[],arr2=[],arr3=[]
                    console.log(data)
                    //acr002标题
                    //acr012分类
                    //acr014目标
                    if(data){
                        console.log(data)
                        for(var n=0;n<data.length;n++){
                            if(data[n].acr018==1){
                                // data[i].acr018 ='未开始' 
                            }else if(data[n].acr018==2){
                                // data[i].acr018 ='筹集中'
                                arr1.push(data[n])  
                            }else if(data[n].acr018==3){
                                // data[i].acr018 ='执行中'
                                arr2.push(data[n])
                            }else if(data[n].acr018==4){
                                // data[i].acr018 ='已结束'
                                arr3.push(data[n])
                            }else if(data[n].acr018==5){
                                // data[i].acr018 ='撤销'
                            }
                            
                        }
                        console.log(arr1)
                        console.log(arr2)
                        console.log(arr3)
                        data=[]
                        for(var m=0;m<arr1.length;m++){
                            data.push(arr1[m])
                        }
                        for(var m=0;m<arr2.length;m++){
                            data.push(arr2[m])
                        }for(var m=0;m<arr3.length;m++){
                            data.push(arr3[m])
                        }
                        console.log(data)
                        for(var i =0;i<data.length;i++){
                            var html = ''
                            if(data[i].acr013.length>=50){
                              data[i].acr013 = data[i].acr013.substring(0, 48)+'...'
                            }else{
                              data[i].acr013 = data[i].acr013
                            }
                            if(data[i].acr002.length>=18){
                              data[i].acr002 = data[i].acr002.substring(0, 18)+'...'
                            }else{
                              data[i].acr002 = data[i].acr002
                            }
                           // console.log(dac)
                           html+='<div name="'+data[i].acr001+'" class="Xq" Xmid = "'+data[i].acr012+'"><img src="'+addr3.a+'/upload/shfp/zc/cut/'+data[i].acr065+'" alt="" width="350" height="230"><b class="B2"></b><p class="p1">'+data[i].acr002+'</p><p class="p2">'+data[i].acr013+'</p><span><i class="Dac" style="width:'+data[i].dacheng+'%"></i></span><div class="Bottom" style="margin-left: 15px;"><p>'+data[i].dacheng+'%</p><p>达成率</p></div><div class="Bottom"><p><span class="Cha"><span class="Renm" style="display:none;float:left">￥</span>'+data[i].afqcount+'</span><span class="qw">个</span></p><p class="Yc">已筹物品</p></div><div class="Bottom" style="border-right: none;"><p>'+data[i].acrcount+'</p><p>支持人数</p></div></div>'
                            	$('.Concen').append(html)
                                if(data[i].acr012==1){
                                    $('.Xq').find('.Renm').eq(i).css({'display':'block'})
                                    $('.qw').remove()
                                    $('.Concen div.Xq').eq(i).find('.Yc').html('已筹金额')
                                }
                        }
                        for(var j =0;j<data.length;j++){
                            if(data[j].acr018==1){
                                data[j].acr018 ='未开始' 
                            }else if(data[j].acr018==2){
                                data[j].acr018 ='筹集中'
                                $('.Concen div.Xq').eq(j).find('.B2').css({'background':'url(../images/choujizhong.png)'})
                            }else if(data[j].acr018==3){
                                data[j].acr018 ='执行中'
                                 $('.Concen div.Xq').eq(j).find('.B2').css({'background':'url(../images/zhixingzhong.png)'})
                            }else if(data[j].acr018==4){
                                data[j].acr018 ='已结束'
                                 $('.Concen div.Xq').eq(j).find('.B2').css({'background':'url(../images/yijieshu.png)'})

                            }else if(data[j].acr018==5){
                                data[j].acr018 ='撤销'
                            }
                        }
                        $('.Concen').append(jiaoyu)
        				        $('.Concen').append(Chuang)
                    }
                }
            })
        }
        Alls(0)
        // //hhhhhh
        // function Alls1(a){
        //     $.ajax({
        //         url:addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/getcwList",
        //         type:'get',
        //         dataType:"jsonp",
        //         data:{
        //           'pageSize':6,
        //           'pageIndex':a,
        //           'acr012':'',
        //           'xmpx':1
        //         },
        //         jsonp:'callback',
        //         jsonpCallback:'success_JsonpCallback',
        //         success:function(e){
        //             var data = e.result.pageresult.data
        //             console.log(data)
        //             //acr002标题
        //             //acr012分类
        //             //acr014目标
        //             if(data){
        //                 for(var i =0;i<data.length;i++){
        //                     var html = ''
        //                     if(data[i].acr013.length>=50){
        //                       data[i].acr013 = data[i].acr013.substring(0, 50)+'...'
        //                     }else{
        //                       data[i].acr013 = data[i].acr013
        //                     }
        //                    // console.log(dac)
        //                    html+='<div name="'+data[i].acr001+'" class="Xq" Xmid = "'+data[i].acr012+'"><img src="http://res.zgshfp.org.cn/upload/shfp/zc/cut/'+data[i].acr065+'" alt="" width="350" height="230"><b class="B2"></b><p class="p1">'+data[i].acr002+'</p><p class="p2">'+data[i].acr013+'</p><span><i class="Dac" style="width:'+data[i].dacheng+'%"></i></span><div class="Bottom" style="margin-left: 15px;"><p>'+data[i].dacheng+'%</p><p>达成率</p></div><div class="Bottom"><p><span class="Cha">'+data[i].afqcount+'</span><span class="qw">个</span></p><p class="Yc">已筹物品</p></div><div class="Bottom" style="border-right: none;"><p>'+data[i].acrcount+'</p><p>支持人数</p></div></div>'
        //                       $('.Concen').append(html)
        //                      if(data[i].acr012==1){
        //                         $('.Cha').before('<span>￥</span>');
        //                         $('.qw').remove()
        //                         $('.Yc').html('已筹金额')
        //                      }

        //                 }
        //                 for(var j =0;j<data.length;j++){
        //                     if(data[j].acr018==1){
        //                         data[j].acr018 ='未开始' 
        //                     }else if(data[j].acr018==2){
        //                         data[j].acr018 ='筹集中'
        //                         $('.Concen div.Xq').eq(j).find('.B2').css({'background':'url(../images/筹集中.png)'})
        //                     }else if(data[j].acr018==3){
        //                         data[j].acr018 ='执行中'
        //                          $('.Concen div.Xq').eq(j).find('.B2').css({'background':'url(../images/执行中.png)'})
        //                     }else if(data[j].acr018==4){
        //                         data[j].acr018 ='已结束'
        //                          $('.Concen div.Xq').eq(j).find('.B2').css({'background':'url(../images/已结束.png)'})

        //                     }else if(data[j].acr018==5){
        //                         data[j].acr018 ='撤销'
        //                     }
        //                 }
        //             }
        //         }
        //     })
        // }

        // //分页
        //    $.ajax({
        //         url:addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/getcwList",
        //         type:'get',
        //         dataType:"jsonp",
        //         jsonp:'callback',
        //         success:function(e){
        //             var data = e.result.pageresult.data.length
        //             setCookie("Len",Math.ceil(data/2),'/',1)
        //             $('.On').html(1)
        //             $('.Tw').html(Math.ceil(data/2))
        //         }
        //     })
        // //首页
        // $('#Shou').bind('click',function(){
        //     $('#Prive').css({'pointerEvents':'none'})
        //      a=0
        //     var Len = getCookie('Len')
        //     if(a==0){
        //       a=0
        //       $(this).css({'pointerEvents':'none'})
        //       $('#Next').css({'pointerEvents':'auto'})
        //       $('#Wei').css({'pointerEvents':'auto'})
        //     }
        //     $('.Concen').empty()
        //     $('.On').html(1)
        //     $('.Tw').html(Len)
        //     Alls(0)
            
        // })
        // //下一页
        // $('#Next').bind('click',function(){
        //     var Len = getCookie('Len')
        //     a++
        //     if(a==Len-1){
        //       a=Len-1
        //       $(this).css({'pointerEvents':'none'})
        //       $('#Wei').css({'pointerEvents':'none'})
        //     }
        //       $('.On').html(a+1)
        //       $('.Tw').html(Len)
        //       $('.Concen').empty()
        //       Alls(a)
        //     if(a>0){
        //       $('#Prive').css({'pointerEvents':'auto'})
        //       $('#Shou').css({'pointerEvents':'auto'})
        //       $('#Wei').css({'pointerEvents':'auto'})
        //     }
        // })
        //    //上一页
        // $('#Prive').bind('click',function(){
        //     var Len = getCookie('Len')
        //     a--
        //     if(a==0){
        //       a=0
        //       $(this).css({'pointerEvents':'none'})
        //       $('#Shou').css({'pointerEvents':'none'})
        //       $('#Wei').css({'pointerEvents':'auto'})
        //     }
        //     $('.Concen').empty()
        //     $('.On').html(a+1)
        //     $('.Tw').html(Len)
        //     Alls(a)
        //     if(a<1){
        //       $('#Next').css({'pointerEvents':'auto'})
        //       $('#Shou').css({'pointerEvents':'auto'})
        //     }
        // })  
       //尾页
        $('#Wei').bind('click',function(){
            $('#Shou').css({'pointerEvents':'auto'})
            $('#Prive').css({'pointerEvents':'auto'})
            var Len = getCookie('Len')
            a=Len-1
            if(a==Len-1){
              a=Len-1
              $(this).css({'pointerEvents':'none'})
              $('#Next').css({'pointerEvents':'none'})
            }
            $('.Concen').empty()
            $('.On').html(Len)
            $('.Tw').html(Len)
            Alls1(Len-1)
            
        })

        var On = $('.On').html()
        var Tw = $('.Tw').html()
        if(On==Tw==1){
          $('#Next').css({'pointerEvents':'none'})
        }else{
          $('#Next').css({'pointerEvents':'auto'})
        }
        // 筹物列表
        function Allw(){
            $.ajax({
                url:addr1.a+"/shfp/ajaxpagequery/zc/cw/cw004/getcwList",
                type:'get',
                dataType:"jsonp",
                data:{
                	'pageSize':100,
                    'pageIndex':0,
                    'acr012':2,
                    'xmpx':1
                },
                jsonp:'callback',
                jsonpCallback:'success_JsonpCallback',
                success:function(e){
                    var data = e.result.pageresult.data
                    var arr1=[],arr2=[],arr3=[]
                    console.log(data)
                    //acr002标题
                    //acr012分类
                    //acr014目标
                    if(data){
                        for(var n=0;n<data.length;n++){
                            if(data[n].acr018==1){
                                // data[i].acr018 ='未开始' 
                            }else if(data[n].acr018==2){
                                // data[i].acr018 ='筹集中'
                                arr1.push(data[n])  
                            }else if(data[n].acr018==3){
                                // data[i].acr018 ='执行中'
                                arr2.push(data[n])
                            }else if(data[n].acr018==4){
                                // data[i].acr018 ='已结束'
                                arr3.push(data[n])
                            }else if(data[n].acr018==5){
                                // data[i].acr018 ='撤销'
                            }
                            
                        }
                        console.log(arr1)
                        console.log(arr2)
                        console.log(arr3)
                        data=[]
                        for(var m=0;m<arr1.length;m++){
                            data.push(arr1[m])
                        }
                        for(var m=0;m<arr2.length;m++){
                            data.push(arr2[m])
                        }for(var m=0;m<arr3.length;m++){
                            data.push(arr3[m])
                        }
                        console.log(data)
                        for(var i =0;i<data.length;i++){
                            var html = ''
                            // if(data[i].acr018==1){
                            //     data[i].acr018 ='未开始' 
                            // }else if(data[i].acr018==2){
                            //     data[i].acr018 ='筹集中'  
                            // }else if(data[i].acr018==3){
                            //     data[i].acr018 ='执行中'
                            // }else if(data[i].acr018==4){
                            //     data[i].acr018 ='已结束'
                            // }else if(data[i].acr018==5){
                            //     data[i].acr018 ='撤销'
                            // }
                            if(data[i].acr013.length>=50){
                              data[i].acr013 = data[i].acr013.substring(0, 50)+'...'
                            }else{
                              data[i].acr013 = data[i].acr013
                            }
                           // console.log(dac)
                           html+='<div name="'+data[i].acr001+'" class="Xq" Xmid = "'+data[i].acr012+'"><img src="'+addr3.a+'/upload/shfp/zc/cut/'+data[i].acr065+'" alt="" width="350" height="230"><b></b><p class="p1">'+data[i].acr002+'</p><p class="p2">'+data[i].acr013+'</p><span><i class="Dac" style="width:'+data[i].dacheng+'%"></i></span><div class="Bottom" style="margin-left: 15px;"><p>'+data[i].dacheng+'%</p><p>达成率</p></div><div class="Bottom"><p><span class="Cha">'+data[i].afqcount+'</span><span class="qw">个</span></p><p class="Yc">已筹物品</p></div><div class="Bottom" style="border-right: none;"><p>'+data[i].acrcount+'</p><p>支持人数</p></div></div>'
                            	$('.Concen').append(html)

                        }
                        for(var j =0;j<data.length;j++){
                            if(data[j].acr018==1){
                                data[j].acr018 ='未开始' 
                            }else if(data[j].acr018==2){
                                data[j].acr018 ='筹集中'
                                $('.Concen div.Xq').eq(j).find('b').css({'background':'url(../images/choujizhong.png)'})
                            }else if(data[j].acr018==3){
                                data[j].acr018 ='执行中'
                                 $('.Concen div.Xq').eq(j).find('b').css({'background':'url(../images/zhixingzhong.png)'})
                            }else if(data[j].acr018==4){
                                data[j].acr018 ='已结束'
                                 $('.Concen div.Xq').eq(j).find('b').css({'background':'url(../images/yijieshu.png)'})

                            }else if(data[j].acr018==5){
                                data[j].acr018 ='撤销'
                            }
                        }
                    }
                }
            })
        }
         // 筹钱列表
        function Allq(){
            $.ajax({
                url:addr1.a+"/shfp/ajaxpagequery/zc/z004/getfpzhongchouList",
                type:'get',
                dataType:"jsonp",
                data:{
                	'pageSize':100,
                    'pageIndex':0,
                    'acr012':1,
                    'xmpx':1
                },
                jsonp:'callback',
                jsonpCallback:'success_JsonpCallback',
                success:function(e){
                    var data = e.result.pageresult.data
                    var arr1=[],arr2=[],arr3=[]
                    console.log(data)
                    //acr002标题
                    //acr012分类
                    //acr014目标
                    if(data){
                        for(var n=0;n<data.length;n++){
                            if(data[n].acr018==1){
                                // data[i].acr018 ='未开始' 
                            }else if(data[n].acr018==2){
                                // data[i].acr018 ='筹集中'
                                arr1.push(data[n])  
                            }else if(data[n].acr018==3){
                                // data[i].acr018 ='执行中'
                                arr2.push(data[n])
                            }else if(data[n].acr018==4){
                                // data[i].acr018 ='已结束'
                                arr3.push(data[n])
                            }else if(data[n].acr018==5){
                                // data[i].acr018 ='撤销'
                            }
                            
                        }
                        console.log(arr1)
                        console.log(arr2)
                        console.log(arr3)
                        data=[]
                        for(var m=0;m<arr1.length;m++){
                            data.push(arr1[m])
                        }
                        for(var m=0;m<arr2.length;m++){
                            data.push(arr2[m])
                        }for(var m=0;m<arr3.length;m++){
                            data.push(arr3[m])
                        }
                        console.log(data)
                        for(var i =0;i<data.length;i++){
                            var html = ''
                            // if(data[i].acr018==1){
                            //     data[i].acr018 ='未开始' 
                            // }else if(data[i].acr018==2){
                            //     data[i].acr018 ='筹集中'  
                            // }else if(data[i].acr018==3){
                            //     data[i].acr018 ='执行中'
                            // }else if(data[i].acr018==4){
                            //     data[i].acr018 ='已结束'
                            // }else if(data[i].acr018==5){
                            //     data[i].acr018 ='撤销'
                            // }
                             if(data[i].acr013.length>=50){
                              data[i].acr013 = data[i].acr013.substring(0, 50)+'...'
                            }else{
                              data[i].acr013 = data[i].acr013
                            }
                           // console.log(dac)
                           html+='<div name="'+data[i].acr001+'" class="Xq" Xmid = "'+data[i].acr012+'"><img src="'+addr3.a+'/upload/shfp/zc/cut/'+data[i].acr065+'" alt="" width="350" height="230"><b></b><p class="p1">'+data[i].acr002+'</p><p class="p2">'+data[i].acr013+'</p><span><i class="Dac" style="width:'+data[i].dacheng+'%"></i></span><div class="Bottom" style="margin-left: 15px;"><p>'+data[i].dacheng+'%</p><p>达成率</p></div><div class="Bottom"><p>￥<span class="Cha">'+data[i].afqcount+'</span></span></p><p class="Yc">已筹金额</p></div><div class="Bottom" style="border-right: none;"><p>'+data[i].acrcount+'</p><p>支持人数</p></div></div>'
                            	$('.Concen').append(html)

                        }
                        for(var j =0;j<data.length;j++){
                            if(data[j].acr018==1){
                                data[j].acr018 ='未开始' 
                            }else if(data[j].acr018==2){
                                data[j].acr018 ='筹集中'
                                $('.Concen div.Xq').eq(j).find('b').css({'background':'url(../images/choujizhong.png)'})
                            }else if(data[j].acr018==3){
                                data[j].acr018 ='执行中'
                                 $('.Concen div.Xq').eq(j).find('b').css({'background':'url(../images/zhixingzhong.png)'})
                            }else if(data[j].acr018==4){
                                data[j].acr018 ='已结束'
                                 $('.Concen div.Xq').eq(j).find('b').css({'background':'url(../images/yijieshu.png)'})

                            }else if(data[j].acr018==5){
                                data[j].acr018 ='撤销'
                            }
                        }

                    }
                }
            })
        }
        //精选
        $('.Jxx').click(function(){
        	$('.Contop span').removeClass('Hover')
        	$(this).addClass('Hover')
        	$('.Concen').empty()
        	 Alls(0)
        })
        //公益
        $('.Gy').click(function(){
        	$('.Contop span').removeClass('Hover')
        	$(this).addClass('Hover')
        	$('.Concen').empty()
        	Allw()
        })
        //医疗
        $('.Yl').click(function(){
        	$('.Contop span').removeClass('Hover')
        	$(this).addClass('Hover')
        	$('.Concen').empty()
        	Allq()
        })
        //教育
        $('.Jy').click(function(){
        	$('.Contop span').removeClass('Hover')
        	$(this).addClass('Hover')
        	$('.Concen').empty()
        	$('.Concen').append(jiaoyu)
        })
        //创业
          $('.Chy').click(function(){
        	$('.Contop span').removeClass('Hover')
        	$(this).addClass('Hover')
        	$('.Concen').empty()
        	$('.Concen').append(Chuang)
        	
        })
      	//教育详情
      	$('body').delegate('.Jiaoyu', 'click', function(event) {
      		$('.Concen').empty()
      		$('.Concen').css({'background':"#fff"})
      		$('.Concen').append(Jyxq)
      		$('.Jy').addClass('Hover')
      		$('.Jxx').removeClass('Hover')

      	});
      	//创业详情
         $('body').delegate('.Chuang', 'click', function(event) {
          	$('.Concen').empty()
          	$('.Concen').append(chayx)
          	$('.Chy').addClass('Hover')
      		$('.Jxx').removeClass('Hover')
         });
        $('body').delegate('.Xq', 'click', function(event) {
        	var xmid = $(this).attr('Xmid')
        	var xmbh = $(this).attr('name')
        	if(xmid==1){
        		setCookie('qbh',xmbh,'/',1)
        		window.location.href='../page/chouqian.html'
        	}else{
        		setCookie('Xmbh',xmbh,'/',1)
        		window.location.href='../page/chouwu.html'
        	}
        });


})