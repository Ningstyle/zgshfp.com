/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-04 14:21:06
 * @version $Id$
 */

    //超长限制
       function Strb(str,num){
            if(str.length>num){
                return str.substring(0,num)+'...'
            }else{
                return str
            }
       }
	//ajax
    function getData(getDatas,callBack){
        $.ajax({
            url:getDatas.url,
            type:getDatas.type,
            data:getDatas.data,
            async:getDatas.isTrue,
            success:callBack
        })
    }
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
    //时间戳转日期格式
    function Gtime(Stime,Year,Month,Dat){
    	var date = new Date(Stime);
		Y = date.getFullYear() + Year;
		M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + Month;
		D = date.getDate() + Dat+' ';
		h = date.getHours() + ':';
		m = date.getMinutes() + ':';
		s = date.getSeconds(); 
		var Time = Y+M+D+h+m+s
		return Time
    }
    //日期格式转时间戳
    function Htime(Stime){
    	var date = new Date(Stime)
    	var time1 = date.getTime()
    	return time1
    }
    