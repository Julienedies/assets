/**
 * Created by julien.zhang on 2014/10/11.
 */

directives.add('ic-tabs', function () {

    $('[ic-tabs]').each(function (i) {

        var th = $(this);
        var tabc = th.attr('ic-tabs');
        tabc = $('[ic-role-tabc=' + tabc + ']');

        var interval = th.attr('ic-tabs-interval');
        var timer;

        if (interval) {

        }

        var activeTab = th.find('[ic-role-tab]').first().addClass('active');

        var active = activeTab.attr('ic-role-tab');

        active = tabc.find('[ic-role-con]').hide().filter('[ic-role-con=' + active + ']').show();

        th.delegate('[ic-role-tab]', 'click', function (e) {
            activeTab && activeTab.removeClass('active');
            var th = activeTab = $(this).addClass('active');
            var con = th.attr('ic-role-tab');
            active && active.hide();
            active = tabc.find('[ic-role-con=' + con + ']').show();
        });

    });


});

