/**
 * Created by julien.zhang on 2014/10/30.
 * 扩展 jquery
 */


$.fn.icParseProperty = function (name) {

    if (name === void(0)) return void(0);
    var ctrl = this.closest('[ic-ctrl]').attr('ic-ctrl');
    var namespace = ctrl ? brick.controllers.get(ctrl) : window;
    //return namespace[name];
    return (function (root, key) {

        var chain = key.split('.');

        return (function (chain, root) {

            var k = chain.shift();
            var v = root[k];

            if (chain.length) {
                return arguments.callee(chain, v);
            }

            return v;

        })(chain, root);

    })(namespace, name);

};


$.fn.icDialog = function (options) {

    this.show();
    var that = this;
    setTimeout(function () {
        var id = that.attr('ic-dialog');
        if (id !== void(0)) {
            that.trigger('ic-dialog.call', options);
        }
    });

    return this;
};

//定时器
$.fn.icTimer = function () {
    var th = this;
    var count = th.attr('ic-timer-count') * 1;

    var timer = setInterval(function () {
        if (count--) {
            th.text(count);
        } else {
            clearInterval(timer);
            th.trigger('ic-timer.' + 'end');
        }
    }, 1000);

    return this;
}
//切换场景
$.icNextScene = function () {
    var current = $('[ic-scene]').filter('[ic-scene-active=1]');

    if (current.size) current.nextScene();
}

$.fn.nextScene = function () {
    var next = this.attr('ic-scene-next');
    if (next) {
        this.hide().removeAttr('ic-scene-active');
        $('[ic-scene=?]'.replace('?', next)).show().attr('ic-scene-active', 1);
    }

    return this;
}

// 操作提示
$.fn.tips = function (parent) {
    var $parent = $(parent || 'body');
    var w = $parent.innerWidth() * 0.4 + 'px', h, top, left;
    var wraper = $('<div class="tipsBox"></div>');

    this.addClass('tips1').css({
        'width': w
    });
    this.appendTo(wraper);
    wraper.appendTo($parent);

    w = this.width()
    h = this.height();
    top = '-' + h / 2 + 'px';
    left = '-' + w / 2 + 'px';
    this.css({
        'top': 12,
        'left': left
    })

    wraper.animate({
        top: 0,
        'opacity': '1'
    }, 500, function () {
        $(this).addClass('animated wobble');
    });

    setTimeout(function () {
        wraper.animate({
            'top': -300,
            'opacity': '0'
        }, 500, function () {
            wraper.remove();
        });
    }, 4000);

    return this;
};

$.tips = function (massge) {
    $('<div>' + massge + '</div>').tips();
};

//监听enter键
$.fn.enterPress = function (call) {
    call = $.proxy(call, this);

    var fn = function (e) {
        if (e.which == 13) {
            call(e);
        }
    };

    this.focus(function () {
        $(this).keypress(fn);
    });
    this.blur(function () {
        $(this).unbind('keypress', fn);
    });

    return this;
};
//设置loading
(function ($) {

    var loading = '<span style="margin:0.2em auto;display:inline-block;text-align:center;" role="_loading_"><svg width="16" height="16" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#3d7fe6"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 150 150" to="360 150 150" begin="0s" dur="1s" fill="freeze" repeatCount="indefinite" /></path></svg></span>';

    if (window.ActiveXObject) {

        loading = __inline('../../img/loading_.gif');
        loading = '<span style="margin:0.2em; auto;display:inline-block;text-align:center;" role="_loading_"><img src="?"></span>'.replace('?', loading);

    }

    $.fn.setLoading = function () {

        //this.parent().css({position:'relative'});
        var w = this.outerWidth();
        var h = this.outerHeight();
        var offset = this.offset();
        var top = offset.top;
        var left = offset.left;
        var $loading = $(loading).css({width:w,height:h, position:'absolute','margin-left':-w});

        this.css({visibility:'hidden'}).after($loading);

        this.data('_ic-role-loading', $loading);

        return this;
    };

})(jQuery);


//清除loading
$.fn.clearLoading = function () {
    var $loading = this.data('_ic-role-loading');
    $loading &&$loading.remove();
    this.removeData('_ic-role-loading');
    this.css({visibility:'visible'});
    return this;
};