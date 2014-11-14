/**
 *
 * 定义输入提示指令
 * Created by julien.zhang on 2014/11/13.
 *
 */

directives.add('ic-type-ahead', function (elm) {

    $('[ic-type-ahead]' || elm).each(function (i, v) {

        var $doc = $('body');

        var $elm = $(this);
        var namespace = $elm.attr('ic-type-ahead');
        var source = $elm.attr('ic-source-ajax');

        var offset = $elm.offset();
        var left = offset.left;
        var top = offset.top;
        var w = $elm.outerWidth();
        var h = $elm.outerHeight();

        var $selectList = $('[ic-role-list=?]'.replace('?', namespace));
        var tplf = brick._tplfs[$selectList.attr('ic-tpl')];

        var pool;
        var ajax;
        var queryStr;
        var query;

        var done = function (data) {
            if (!data) return;
            var html = tplf({model: data}); //ie7模板函数会报错，有时间fix;
            $selectList.html(html);
        };

        if (source){
            query = function (queryStr) {
                ajax = $.ajax({
                    dataType: 'json',
                    type: 'post',
                    url: source,
                    data: {query: queryStr}
                }).done(done);
            }
        }else {
            source = $elm.attr('ic-source');
            pool = $elm.icParseProperty(source);
            query = function(queryStr){
                var reg = new RegExp(queryStr,'img');
                return _.filter(pool, function(item){
                    if(_.isObject(item)){
                        var result = _.filter(item, function(item){
                            return reg.test(item);
                        });
                        return result.length;
                    }else{
                        return reg.test(item);
                    }
                })
            }

        }


        $elm.on('keyup', function (e) {

            var val = $elm.val();
            if (!val || (val == queryStr)) return $selectList.hide();

            queryStr = val;

            //取消上个请求
            ajax && ajax.abort();

            $selectList.show().appendTo($doc).css({top: top + h, left: left, 'min-width': w});

            //新请求
            query(queryStr);

        }).on('blur', function (e) {
            $selectList.fadeOut(function () {
                $selectList.hide();
            });
        });


        $selectList.on('mousedown', '[ic-role-type-item]', function (e) {
            var val = $(this).attr('ic-role-type-item');
            $elm.val(val);
            $elm.trigger('type.complete', val);
        });


    });


});