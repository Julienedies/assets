/**
 * Created by julien.zhang on 2014/7/16.
 */

function prompt($rootScope){

    var dom;

    return {
        alert: function(str){
            dom = dom || $('<div class="prompt">@@@@@</div>').appendTo($('body'));
            dom.html('<div class="wrap">' + str + '</div>');
            dom.slideDown(500).delay(2000).slideUp(500);
        }
    };

}