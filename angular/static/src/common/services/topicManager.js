/**
 * Created by julien.zhang on 2014/7/21.
 */

function topicManager($rootScope, $q, $http){


    return {

        getCatList: function(){

           return $http.get(etConfig.ajaxApi.catList)
               .then(function(response){
                   return response.data;
               }, function(response){
                   return response;
               });
        },

        getTopic: function(id){

            $http({method: 'GET', url: etConfig.ajaxApi.topic, params:{tid:tid}}).
                success(function (data, status, headers, config) {

                    $scope.topic = data;

                })
                .error(function (data, status, headers, config) {

                });

        },

        create: function(topic){

        },

        edit: function(topic){

           return $http.put(etConfig.ajaxApi.topic, {cat:topic.cat,type:topic.type,tid:topic.id,tit:topic.tit,txt:topic.txt})
               .then(function(response){
                   return response;
               }, function(err){
                   return response;
               })

        },

        getTopicRel: function(id){

            return $http({method: 'GET', url:etConfig.ajaxApi.topicRel,params:{tid:id}})
                .then(function(response){
                    return response.data;
                }, function(response){
                    return response;
                });

        }

    };

}