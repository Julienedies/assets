/**
 * Created by julien.zhang on 2014/10/30.
 * 扩展 jquery
 */

$.fn.icParseProperty = function(name){

    if(name === void(0)) return void(0);
    var ctrl = this.closest('[ic-ctrl]').attr('ic-ctrl');
    var namespace = ctrl ? brick.controllers.get(ctrl) : window;
    return namespace[name];

}

///////////////////////////////////////////////////////
//设置loading
//////////////////////////////////////////////////////
$.fn.setLoading = function(){

    var loading =  '<span style="margin:0.2em; auto;display:inline-block;width:100%;text-align:center;" role="_loading_"><svg width="16" height="16" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#3d7fe6"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 150 150" to="360 150 150" begin="0s" dur="1s" fill="freeze" repeatCount="indefinite" /></path></svg></span>';

    this.hide().after(loading);

    return this;
};

///////////////////////////////////////////////////////
//清除loading
//////////////////////////////////////////////////////
$.fn.clearLoading = function(){
    this.show().next('[role="_loading_"]').remove();
    return this;
};
