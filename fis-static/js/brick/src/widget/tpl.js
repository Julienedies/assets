/**
 * Created by julien.zhang on 2014/10/11.
 */

directives.add('ic-tpl', function (elm) {

    $(elm || '[ic-tpl]').each(function(i){

        var th = $(this);

        var id = th.attr('ic-tpl');

        var ctrl = th.parentsUntil('[ic-ctrl]').attr('ic-ctrl');

        var tplf = createRender(this);














    });


});
