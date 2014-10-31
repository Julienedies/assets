/**
 * Created by julien.zhang on 2014/10/29.
 */


directives.add('ic-dialog', function () {

    //js调用接口
    $.fn.icDialog = function(options){

        var id = this.attr('ic-dialog');
        if(id !== void(0)){
            this.trigger('ic-dialog.call', options);
        }

    };

    var html = __inline('../tpl/dialog.html');

    var $dialogContainer = $(html).appendTo('body').hide();

    $('[ic-dialog]').each(function (i) {

        var $elm = $(this).appendTo($dialogContainer);
        var id = $elm.attr('ic-dialog');

        //处理js调用
        $elm.on('ic-dialog.call', function(e, param){

            if(param === void(0)) {
                onShow(e);
            }

        });

        $elm.on('click', '[ic-role-dialog-confirm]', function (e) {
            onClose(e, 'confirm');
        });


        $elm.on('click', '[ic-role-dialog-cancel], [ic-rold-dialog-close]', function(e){
            onClose(e, 'cancel');
        });


        function onShow(e){
            $dialogContainer.show();
            var width = $elm.width();
            $elm.css('margin-left', -width/2);
            $elm.show();
            $elm.trigger('ic-dialog.' + id + '.show');
        }

        function onClose(e, type){
            $dialogContainer.hide();
            $elm.hide();
            $elm.trigger('ic-dialog.' + id + '.' + type);
        }


    });


});

