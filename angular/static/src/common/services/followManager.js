/**
 * Created by julien.zhang on 2014/8/4.
 */

function followManager($http, etConfig){

    return {

        follow: function(id){

            return $http({method:'put', url:etConfig.ajaxApi.follow, params:{uid:id}});

        },

        getFollowNum: function(id){

            return $http({method:'get', url:etConfig.ajaxApi.followNum, params:{uid:id}});

        },

        getFollow: function(p){

            return $http({method:'get',url:etConfig.ajaxApi.follows, params:p});

        }


    };

}