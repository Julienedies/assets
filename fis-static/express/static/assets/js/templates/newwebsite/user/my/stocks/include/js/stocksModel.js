/**
 * Created by julien.zhang on 2014/11/7.
 */

function _stocksModel(eventManager, recordManager){

    //return new recordManager({scope:eventManager,eventPrefix:'stocksModel'});
    var stocks = [{code:'000010_SZ', inds:{x:'x205555555',y:'y30',z:'z30',a:'a555555530',b:'b3555555555550',c:'c30',d:'d40'}}, {code:'000010_SZ', inds:{x:'x20',y:'y30xxxx',z:'z30xxxxxxxxxxx',a:'a30',b:'b30',c:'c30',d:'d40'}}];

    return {
        getIndicatorsTable: function(indArr){
            var arr = [];
            var o;
            for(var i in stocks){
                o = {};
                var inds = stocks[i].inds;

                for(var j in indArr){
                    var ind = indArr[j];
                    o[ind] = inds[ind];
                }

                arr.push(o);

            }

            return arr;
        }
    }
}