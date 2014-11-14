/**
 * Created by julien.zhang on 2014/11/7.
 */

function _myStocksCtrl(scope, stocksModel, indicatorsModel){

    var $elm = $('[ic-ctrl=myStocksCtrl]');

    var $analysis =  $('[ic-dialog=analysis]');
    var $custom = $('[ic-dialog=custom]');

    //$custom.icDialog();

    //
    scope.watch('indicatorsModel.change', function(e, inds){
        inds = ['x','y','z','a','b','c','d'];
        var data = stocksModel.getIndicatorsTable(inds);
        scope.render('index', {indicators:inds, stocks:data});
    });

    scope.watch('stocksModel.change', function(e, stocks){
        var data = stocksModel.getIndicatorsTable(inds);
        scope.render('stocksTable', {indicators:inds, stocks:data});
    });

    //scope.fire('indicatorsModel.change');


    //查看资讯
    scope.view = function(e){

    };

    //弹出盈亏分析对话框
    scope.showAnalysisDialog = function(e){
        $analysis.icDialog();
    }

    //弹出自定义指标对话框
    scope.showCustomDialog = function(e){
        $custom.icDialog();
    };

    //删除股票
    scope.deleted = function(data){
        var code = $(this).data('code');
        $elm.find('tbody tr[data-code=?]'.replace('?',code)).remove();
    };


    scope.before = function(){
        var val = $(this).prev().val();
        if(!val) return false;
        $(this).data('ic-submit-data', {code:val});
    }

    scope.done = function(data){
        $.tips('add stock ok;')
    }

    //////////////////////////////

    var stocksIndexTable = $('[role=stocksIndexTable]');


    ////////////////////////
    //
    /////////////////////
    $('[ic-ajax="addStock"]').on('type.complete', function(e){

    });


}