$(function () {
	//�ϴ��ļ��ؼ�
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
        alert('�ļ��ϴ�ʧ�ܣ���ȷ��ͼƬ��ʽΪjpg,png,gif,��С������1MB��');
      }
    }
    // Put your options here
  });


    //��֤��ˢ��
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

//ˢ����֤��
function refreshAuthCode(){
    var timestamp = Date.parse(new Date());
    var url = catcha_url+'/'+timestamp;
    $('#captcha_box').find('img').attr('src',url);
}
