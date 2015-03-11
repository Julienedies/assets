/**
 * Created by julien.zhang on 2014/7/16.
 */

function enterPress() {
    return {
        restrict : 'A',
        scope : {
            enterPress : '=etEnterPress'
        },
        link : function(scope, elm, attrs) {

            var fn = function(e){
                if(e.which == 13){
                    scope.enterPress();
                }
            };

            elm.focus(function(){
                elm.keypress(fn);
            });
            elm.blur(function(){
                elm.unbind('keypress',fn);
            });

        }
    };

}