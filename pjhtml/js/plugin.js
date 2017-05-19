/**
 * Created by admin_1 on 2017/4/3.
 */
//分页控件
function paginationPlugin(cPage, tPage){
    var o = {
        se:'.pagination_box',
        cs:2					//以选中页数为中心，左右各显示cs个页数
    };

    function init(){
        if($(o.se).length<1) return; //判断选择器是否存在
        if(tPage<1) return; //判断总页数是否为正数

        buildHtml();
    };

    function buildHtml(){
        var html='';

        //是否显示上一页
        if(cPage>'1'){
            html+='<li page="'+(cPage-1)+'">上一页</li>';
        }

        //中间页数显示
        if(tPage<(o.cs*2+1)){
            for(var i=1,len=tPage;i<=len;i++){
                html+='<li page="'+i+'" '+(i==cPage?'class="active"':'')+'>'+i+'</li>';
            }
        }else{
            if(cPage>3){
                html+='<li page="1">1</li>';
                html+='<li>...</li>';
            }

            if(cPage<=3){
                for(var i=1,len=cPage+2;i<=len;i++){
                    html+='<li page="'+i+'" '+(i==cPage?'class="active"':'')+'>'+i+'</li>';
                }
            }else if(cPage>=(tPage-3)){
                for(var i=cPage-2,len=tPage;i<=len;i++){
                    html+='<li page="'+i+'" '+(i==cPage?'class="active"':'')+'>'+i+'</li>';
                }
            }else{
                for(var i=cPage-1,len=cPage+2;i<=len;i++){
                    html+='<li page="'+i+'" '+(i==cPage?'class="active"':'')+'>'+i+'</li>';
                }
            }

            if(cPage<(tPage-3)){
                html+='<li>...</li>';
                html+='<li page="'+tPage+'">'+tPage+'</li>';
            }
        }

        //是否显示最后一页
        if(cPage<tPage){
            html+='<li page="'+(cPage+1)+'">下一页</li>';
        }

        $(o.se).empty().html(html);
    }

    init();
}