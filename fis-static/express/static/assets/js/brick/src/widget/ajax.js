/**
 * Created by julien.zhang on 2014/10/31.
 */


directives.add('ic-ajax', function () {


    $(document).on('click', '[ic-ajax]', function (e) {

        var that = this;
        var $elm = $(this);
        var namespace = $elm.attr('ic-ajax');

        var $loading = $('[ic-role-loading=?]'.replace('?', namespace));

        //提交
        var method = $elm.attr('ic-submit-method') || 'get';
        var url = $elm.attr('ic-submit-action');
        if(!url) return console.log('ic-submit-action：url is must be;');
        var done = $elm.attr('ic-submit-on-done');
        var always = $elm.attr('ic-submit-on-always');
        var failed = $elm.attr('ic-submit-on-failed');
        var before = $elm.attr('ic-submit-before');
        var dataType = $elm.attr('ic-submit-data-type') || 'json';

        always = $elm.icParseProperty(always) || function(){};
        done = $elm.icParseProperty(done);
        failed = $elm.icParseProperty(failed) || function(msg){console.log(msg)};
        before = $elm.icParseProperty(before) || function () {};


        if ($elm.attr('ic-disabled') === 'true') return;
        if (before.apply(that) === false) return;

        var data = $elm.data('ic-submit-data') || $elm.attr('ic-submit-data');

        $loading.size() ? $loading.show() && $elm.hide() : $elm.setLoading();

        $.ajax({
            url: url,
            type: method,
            dataType: dataType,
            data: data
        }).done(function (data) {
                //$elm.clearLoading() && $loading.hide() && $elm.show();
                done.apply(that,[data]);
            }
        ).fail(function(data){
                failed.apply(that,[data]);
            }
        ).always(function(){
                $elm.clearLoading() && $loading.hide() && $elm.show();
                always.apply(that);
            });

    });


});

