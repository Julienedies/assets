/**
 * Created by julien.zhang on 2014/7/16.
 */

function upload($http) {

    return {
        restrict : 'A',
        scope : {
            upload : '=etUpload'
        },
        link : function(scope, elm, attrs) {

            elm.change(function(){

                //创建FormData对象
                var data = new FormData();

                //为FormData对象添加数据
                $.each(elm[0].files, function (i, file) {
                    data.append('headphoto', file);
                });

                console.log(data);

                $.ajax({
                    url: scope.upload.url,
                    type: 'POST',
                    data: data,
                    cache: false,
                    contentType: false,    //不可缺
                    processData: false,    //不可缺
                    success: function (data) {
                        var call = scope.upload.success;
                        call && call(data);
                    },
                    error: function(err){
                        alert(err.msg);
                    }
                });


            });

        }
    };

}