/**
 * Created by julien.zhang on 2014/8/1.
 */

function phasesTagCtrl($scope, topicManager) {

    $scope.init = function (catId) {
        $scope.catId = catId;
    }

    topicManager.getCatList().then(function (data) {

        var _find = function(node, root){

            var id = typeof node === 'object' ? node.id : node;
            var _r;
            var _i;
            var b = (function f(tree){
                _r = tree;
                var node;

                for(var i=0; i<tree.length; i++){
                    _i = i;

                    node = tree[i];

                    if(node.id == id){
                        return 1;
                    }

                }

                for(i = 0; i< tree.length; i++){

                    node = tree[i];
                    if(node.son){
                        if( f(node.son) ) return 1;
                    }

                }

            })(root);

            return b ? {place: _r, index: _i} : {place:[]};
        };


        var z = _find($scope.catId, data);

        var ob = z.place[z.index];
        var pid = ob ? ob.parent_id*1 : null;

        if (pid !== null) {
          $scope.pid = pid || $scope.catId;

          for(var i in data){
              if(data[i].id === $scope.pid*1){
                  $scope.children = data[i].son;
              }
          }

          $scope.phases = data;
        }

    }, function (res) {
        //alert(res.data.msg);
    });


}
