/**
 * Created by julien.zhang on 2014/10/31.
 */


directives.add('ic-ajax', function () {



    //
    $('[ic-ajax]').each(function (i) {

        var $elm = $(this);
        var namespace = $elm.attr('ic-ajax');

        //提交
        var method = $elm.attr('ic-submit-method');
        var url = $elm.attr('ic-submit-action');
        var done = $elm.attr('ic-submit-on-done');
        var failed = $elm.attr('ic-submit-on-failed');
        var before = $elm.attr('ic-submit-before');

        done = $elm.icParseProperty(done);
        failed = $elm.icParseProperty(failed);
        before = $elm.icParseProperty(before) || function(){};

        $elm.on('click', function(){
            if( $elm.attr('ic-disabled') === 'true' ) return;
            if( before() === false ) return;

            var data = $elm.attr('ic-submit-data') || $elm.data('ic-submit-data');

            $elm.setLoading();

            $.ajax({
                url: url,
                type: method,
                data: data
            }).done(
                function(data){
                    $elm.clearLoading();
                    done(data);
                }
            );

        });



    });


});

