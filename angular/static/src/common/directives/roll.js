/**
 * Created by julien.zhang on 2014/7/16.
 */

function roll() {

    return {
        restrict : 'A',
        scope : {
            roll : '=roll'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var vh = elm.parent().height()+'px';

            function f(){

                var one = elm.children(':first');
                var sec = one.next();

                if(sec.length){

                    one.css('height',vh);
                    sec.css('height',vh);

                    $(elm).animate({
                        top:'-'+vh
                    },500,function(){
                       // one.remove();
                       // scope.roll.shift();
                        one.appendTo(elm);
                        elm.css({top:0});
                    })

                }
            }

            setInterval(f, 2800);

        }
    };
}