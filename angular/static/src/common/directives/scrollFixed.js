/**
 * Created by julien.zhang on 2014/7/23.
 */

function scrollFixed() {
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

            var throttled = _.throttle(function(){
                var sh = doc.scrollTop();
                console.log(sh);
                elm.css({'top':sh+40});
            }, 200);

            win.scroll(throttled);

        }
    };
}