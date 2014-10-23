/**
 * Created by julien.zhang on 2014/10/11.
 */

directives.add('ic-tabs', function () {

    $('[ic-tabs]').each(function (i) {

        var th = $(this);
        var name = th.attr('ic-tabs');
        var tabSelect= th.attr('ic-tab-select');
        var conSelect = th.attr('ic-con-select');

        if(tabSelect){
            th.find(tabSelect).each(function(i){
                $(this).attr('ic-role-tab', i);
            });
        }

        tabc = $('[ic-role-tabc=' + name + ']');

        if(tabc && conSelect){
            tabc.find(conSelect).each(function(i){
                $(this).attr('ic-role-con', i);
            });
        }

        var interval = th.attr('ic-tabs-interval');
        var timer;

        if (interval) {

        }

        var activeTab = th.find('[ic-role-tab]').first().addClass('active');

        var activeCon = activeTab.attr('ic-role-tab');

        activeCon = tabc.length && tabc.find('[ic-role-con]').hide().filter('[ic-role-con=' + activeCon + ']').show();

        th.delegate('[ic-role-tab]', 'click', tabc.length ? call_1 : call_2);
        

        function call_1(e){
            call_2(e, this);

            var con = activeTab.attr('ic-role-tab');
            activeCon && activeCon.hide();
            activeCon = tabc.find('[ic-role-con=' + con + ']').show();
        }

        function call_2(e, that){
            activeTab && activeTab.removeClass('active');
            activeTab = $(that || this).addClass('active');
            th.trigger('ic-tabs.'+name+'.change', {activeTab:activeTab});
            _cc('ic-tabs.'+name+'.change', {activeTab:activeTab});
        }


    });


});

