/**
 * Created by julien.zhang on 2014/10/28.
 */

directives.add('ic-timer', function () {

    $('[ic-timer]').each(function (i) {

        var th = $(this);
        var count = th.attr('ic-timer-count') * 1;

        var timer = setInterval(function(){
            if(count--){
                th.text(count);
            }else{
                clearInterval(timer);
                th.trigger('ic-timer.' + 'end');
            }
        }, 1000);




    });


});

