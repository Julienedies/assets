/**
 * Created by julien.zhang on 2014/11/13.
 */

directives.add('ic-type-select', function (elm) {

    $('[ic-type-select]' || elm).each(function (i) {

        var $elm = $(this);
        var namespace = $elm.attr('ic-type-select');
        var source = $elm.attr('ic-source');

        var $selectList = $('[ic-role-list=?]'.replace('?',namespace));

        var ajax;

        $elm.on('keyup', function(e){
            var query = this.value;
            if(!query) return;

            //取消上个请求
            ajax.abort();

            //新请求
            ajax = $.ajax({
                type:'post',
                url:source,
                data:query
            }).done(function(data){
                $selectList.html(data);
            });


        }).on('blur', function(e){
            $selectList.hide();
        });






    });


});