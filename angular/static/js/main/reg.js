$(function () {
	//上传文件控件
	$('#new_media_file').uploadify({
    //'debug'   : true,
    'height'   :200,
    'width'    :200,
    'auto'    : true,
    'multi'    : false,
    'removeCompleted' :true,
    'queueSizeLimit' : 1,
    'fileSizeLimit' : '1MB',
    'swf'     : assets_url+'/js/uploadify.swf',
    'buttonImage':'',
    'uploader' : upload_url+'/user/fileupload',
    'onUploadSuccess' : function(file, data, response) {
      var dataobj = $.parseJSON(data);
      if(dataobj.stat != 0 ){
				$("#file_id").val(dataobj.file_id);
				$('#new_media_file').css("background","url("+dataobj.file_url+")");
				$(".uploadify-button-text").show();
      } else {
				$("#file_id").val('');
				$(".uploadify-button-text").hide();
        alert('文件上传失败，请确认图片格式为jpg,png,gif,大小限制在1MB内');
      }
    }
    // Put your options here
  });


    //验证码刷新
    $('#captcha_box').click(function(){
        refreshAuthCode();
    });

    $('#reg_submit').click(function(){
        $.ajax({
            type: "post",
            url: app_url + "/user/ajaxDoSignUp",
            data: $("#reg_form").serialize(),
            success: function(data){
                var data_info = $.parseJSON(data);

                if(1==data_info.stat){
                    window.location.href = app_url;
                }else{
										$('#error_msg').html(data_info.msg);
                    refreshAuthCode();
                    return false;
                }
            }
        });
    });
});

//刷新验证码
function refreshAuthCode(){
    var timestamp = Date.parse(new Date());
    var url = catcha_url+'/'+timestamp;
    $('#captcha_box').find('img').attr('src',url);
}
