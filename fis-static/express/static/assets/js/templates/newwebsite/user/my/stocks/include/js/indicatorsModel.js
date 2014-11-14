/**
 * Created by julien.zhang on 2014/11/7.
 */

function _indicatorsModel(eventManager) {
    //所有指标列表
    var indicators = {
        'x': '',
        'y': '',
        'z': '',
        'a': '',
        'b': '',
        'c': '',
        'd': ''
    };
    //用户自定义指标
    var custom = ['x', 'y', 'z'];

    return {
        get: function () {
            return custom;
        },
        update: function (arr) {
            if(custom.join()===arr.join()) return;
            custom = arr;
            eventManager.fire('indicatorsModel.change', custom);
        }


    };
}