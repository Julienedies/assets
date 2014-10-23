/**
 * Created by julien.zhang on 2014/10/20.
 */

directives.add('pagination', function (elm) {

    $(elm || '[ic-pagination]').each(function(i){

        var th = $(this);
        var name = th.attr('ic-pagination');
        var onChangeCall = th.attr('ic-pagination-on-change');
        var total = th.attr('ic-pagination-total')*1;
        var step = th.attr('ic-pagination-step')*1 || 10;
        var current = th.attr('ic-pagination-current') || 1;
        var ellipsis = th.find('[ic-role-pagination-ellipsis]')[0].outerHTML;
        var placeholder = /\{\{\}\}/g;

        var prev= th.find('[ic-role-pagination-prev]').on('click', function(e){
            if(current<2) return;
            --current
            createNums();
        });
        var next = th.find('[ic-role-pagination-next]').on('click', function(e){
            if(current>=total) return;
            ++current;
            createNums();
        });
        var num = th.find('[ic-role-pagination-num]');
        var html = num[0].outerHTML;

        function createNums(){

            var j = Math.floor(step/2);
            var k;
            var r = [];

            j = current - j;

            var i = j = j < 1 ? 1 : j;
            k = j + step -1 ;
            k = k >= total ? total : k;
            i = j = k+step>=total ? k-step : i;

            for(; j<=k; j++ ){
                r.push(html.replace(placeholder,j));
            }

            if(i > 1) {
                r.unshift(ellipsis);
                r.unshift(html.replace(placeholder, 1));
            }

            if(total-k > 2){
                r.push(ellipsis);
                r.push(html.replace(placeholder, total));
            }

            current == 1 ? prev.addClass('disabled') : prev.removeClass('disabled');
            current == total ? next.addClass('disabled') : next.removeClass('disabled');
            prev.siblings().not(next).remove();

            $(r.join('')).insertAfter(prev).filter('[ic-role-pagination-num=' + current +']').addClass('active');
            onChangeCall ? window[onChangeCall] && window[onChangeCall]({}, current) :  th.trigger('ic-pagination'+'.'+name, current);
        }


        createNums();

        th.delegate('[ic-role-pagination-num]', 'click', function(e){

            var num = $(this).attr('ic-role-pagination-num') * 1;
            if(current == num) return;
            current = num * 1;
            createNums();

        });


    });


});