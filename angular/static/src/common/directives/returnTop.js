/**
 * Created by julien.zhang on 2014/7/16.
 */

function returnTop($compile) {
    return {
        restrict : 'A',
        link: function(scope, elm, attrs) {

            var $ = jQuery;
            var win = $(window);
            var vh = win.height()/2;
            var doc = $(document.body);
            var html = '<div class="pure-button pure-button-primary returnTop">top</div>';
            var topBth = $(html).appendTo($("body"))
                .click(function () {
                    doc.animate({
                        scrollTop: 0
                    }, 240);
                });

            //$compile(topBth[0])(scope);

            var fn = function () {
                var s = doc.scrollTop();

                (s > vh) ? topBth.fadeIn() : topBth.fadeOut();
            };

            var throttled = _.throttle(fn, 200);

            win.on("scroll", throttled);

        }
    };
}