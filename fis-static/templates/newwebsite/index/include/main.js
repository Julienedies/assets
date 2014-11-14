/**
 * Created by julien.zhang on 2014/10/10.
 */

brick.controllers.add('recommend', function (scope) {

    var timer;

    $('[ic-slider=b]').on('ic-slider-pagination', function (e, active) {

        clearInterval(timer);
        var list = $(active).find('[ic-role-tab]');
        var current = list.first().click();
        var next;

        timer = setInterval(function () {
            next = current.next();
            next = next.size() ? next : list.first();

            next.click();
            current = next;
        }, 4000);
    }).delegate('[ic-role-tab]', 'mousedown', function (e) {
        clearInterval(timer);
    });

});


