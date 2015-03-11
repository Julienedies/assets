/**
 * Created by julien.zhang on 2014/7/16.
 */

function fixed() {
    return {
        restrict : 'A',
        scope : {
            etFixed : '@'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var win = $(window);
            var doc = $(document);
            var h = win.height();
            var p = JSON.parse(scope.etFixed);


            win.scroll(function(){
                var sh = doc.scrollTop();
                var css = {};
                for(var i in p){
                    css[i] = p[i]+sh;
                }
                elm.css(css);
            });

        }
    };
}