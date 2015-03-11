/**
 * Created by julien.zhang on 2014/7/16.
 */

function tagBall() {

    return {
        restrict : 'A',
        scope : {
            etTagCloud : '=etTagCloud'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var _ = window._;
            var data = scope.etTagCloud;
            var ew = elm.width();
            var eh = elm.height();

            scope.$watch('etTagCloud', function (data, oldVal){

                var elms =  [];

                console.log(JSON.stringify(data));

                var x = 0;
                var y = 0;

                _.each(data, function(v, i, list){

                    var b = '<b></b>';
                    var padding = Math.round(Math.random() * 24)+4;
                    i = i+1;
                    b  = $(b).appendTo(elm).text(v.name).addClass('tag-'+i);
                    b.css({'padding':padding+'px'});
                    var w = b.width();

                    var top = 0;
                    var left = 0;


                    left = Math.round(Math.random() * 10 + y);

                    if(left > (ew - w)){
                        top = Math.round(Math.random() * 10 + x);
                    }

                    b.css({'height':w+'px',
                        'line-height':w+'px',
                        'border-radius':w/2+padding+'px',
                        'top':top+'px',
                        'left':left+'px'});

                    x += left;
                    y += top;


                });


            });

        }
    };
}