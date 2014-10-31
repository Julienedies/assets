/**
 * Created by julien.zhang on 2014/10/29.
 */


directives.add('ic-form', function () {

    /**
     * 要验证的字段 ic-role-field
     * 验证规则  ic-field-rule
     * 验证失败提示 ic-role-field-err-tip
     * 验证成功提示 ic-role-field-ok-tip
     */

    var presetRule = {
        id:/[\w_]{6,18}/,
        required: /[\w\d]+/,
        phone: /^1[0-9][0-9]\d{8}$/,
        email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
        password: /(?:[\w]|[!@#$%^&*]){8,}/
    };


    /**
     * 对ic-field-rule属性定义的字段校验规则编译处理
     * 校验规则分为3类：
     * 1：预设的规则表示符，映射到相应的正则表达式，如: 'phone';
     * 2：用户自定义的正则表达式, 如: /\d3/;
     * 3：用户自定义函数 如: equal(val); 传入校验字段校验时的字段值
     *
     * @param rule
     * @param $elm
     * @returns {XML|string|void|*}
     */
    function compileRule(rule, $elm){

        //替换预设的规则标识符
        for(var i in presetRule){
            rule = rule.replace(i, presetRule[i]);
        }

        var call = '.test("?")';
        //rule = rule.replace(/(\&\&|\|\|)(?=(?:\/|\w))/g, call+'$1');
        //rule += call;

        rule = rule.replace(/\/[igm]{0,3}(?=(?:\|\||\&\&|$))/g, function(m){
            return m + call;
        });

        return rule;
    }

    //校验函数
    function _verify(val, rules, tips, $field){

        tips = tips || 'error';

        var fns = {};

        rules = rules.replace(/(?:^|\|\||\&\&)(\w+?)\(\)(?=(?:\|\||\&\&|$))/g, function(m, $1){
            var fn = $field.icParseProperty($1);
            fns[$1] = fn;
            console.log(m,$1)
            return m.replace($1, 'fns.'+$1).replace('()','("?")');
        });

        var script = rules.replace(/\.\w+\("\?"\)/g, function(m){

                return m.replace('?', val);
        });

        console.log(script)

        try {
            if (eval(script)) {
                return false;
            } else {
                return tips;
            }
        } catch (e) {
            console.error(e);
        }

    }

    /**
     * 对外js调用接口
     */
    $.fn.icVerify = function(field){

        var namespace = this.attr('ic-role-submit');

        if(namespace){
            this.trigger('ic-form.'+namespace, field);
            return this.attr('ic-verification');
        }

        return false;
    };

    // 执行指令
    $('[ic-form]').each(function (i) {

        var $elm = $(this);
        var namespace = $elm.attr('ic-form');
        var $fields = $elm.find('[ic-role-field]');
        var $submit = $elm.find('[ic-role-submit]');

        var fields = {};

        //处理js调用
        $submit.on('ic-form.'+namespace, function(e, field){

            fields = {};

            $fields.filter(':visible').each(function(i){
                $(this).change();
            });

            for(var i in fields){
                if(fields[i]===false) {
                    return $submit.attr('ic-verification', '');
                }
            }

            //$submit.data('fields', fields);
            return $submit.attr('ic-verification', true);

        });


        //提交
        var method = $submit.attr('ic-submit-method');
        var url = $submit.attr('ic-submit-action');
        var done = $submit.attr('ic-submit-on-done');
        var failed = $submit.attr('ic-submit-on-failed');
        var before = $submit.attr('ic-submit-before');

        done = $submit.icParseProperty(done);
        failed = $submit.icParseProperty(failed);
        before = $submit.icParseProperty(before) || function(){};

        $submit.on('click', function(){

            if(!$submit.icVerify()) return;

            var data = before(fields);

            $submit.setLoading();

            $.ajax({
                url: url,
                type: method,
                data: data || fields
            }).done(
                function(data){
                    $submit.clearLoading();
                    done(data);
                }
            );

        });


        $fields.each(function(i){

            var $th = $(this);
            var name = $th.attr('ic-role-field');
            var submitName = $th.attr('name') || name;
            var $errTip = $elm.find('[ic-role-field-err-tip="?"]'.replace('?', name));
            var rules = $th.attr('ic-field-rule');
            var errTips = $th.attr('ic-field-err-tip');
            var fire = $th.attr('ic-field-verify-fire');

            rules = compileRule(rules, $elm);

            $th.on('change', function(e){

                var val = $th.val();
                var tip;

                //equal 临时处理
//                _rules = rules.replace(/(^|\|\||\&\&)(equal\((\w+)\))/, function(m, $1,$2,$3,t){
//
//                    var val = $elm.find('[ic-role-field=?]'.replace('?', $3)).val();
//                    return $1 + '/?/'.replace('?', val||'\w');
//                }).replace(/\.test\("\?"\)/g, function(m){
//
//                    return m.replace('?', val);
//                });

//                console.error( _rules);


                if(tip = _verify(val, rules, errTips, $th)){
                    //验证失败
                    $errTip.show().addClass('error').text(tip);
                    fields[name] = false;
                    fire && $th.trigger('ic-form.' + namespace + '.' + name + '.verify', 0);
                }else{
                    //验证通过
                    $errTip.hide().removeClass('error');
                    fields[submitName] = val;
                    fire && $th.trigger('ic-form.' + namespace + '.' + name + '.verify', 1);

                }



            });

        });




    });


});

