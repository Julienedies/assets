/**
 * Created by julien.zhang on 2014/7/16.
 */

function userManager($rootScope, $q, $http){

    var user = {};

    return {
        getUser: function(){

            if(user.id) {
                var deferred = $q.defer();
                deferred.resolve(user);
                return deferred.promise;
            }

            return $http.get(etConfig.ajaxApi.user).then(function(res) {

                user = res.data;
                return user;

            }, function(res) {

                return res;
            });
        },

        getUserDetail: function(id, isMe){

            var k = isMe ? 'userMeDetail':'userDetail';

            var p = !id ? {} : {uid:id};
            k = !id ? 'userMeDetail' : 'userDetail';

            return $http({method:'get',url:etConfig.ajaxApi[k],params:p}).then(function(res) {

                return res.data;

            }, function(res) {

                return res;
            });


        },


        logout: function(){
            if(!user.id) return;
            return $http.put(etConfig.ajaxApi.logout).then(function(res){
                user = {};
                return res;
            }, function(error){
                return error;
            });
        },

        // 添加教育经历
        addWorkEx: function(data){

            return $http.post(etConfig.ajaxApi.userWorkEx, data).then(function(res){

                return res;

            }, function(res){

                return res;

            });

        },

        // 添加教育经历
        addEduEx: function(data){

            return $http.post(etConfig.ajaxApi.userEduEx, data).then(function(res){

                return res;

            }, function(res){

                return res;

            });

        },

        //用户编辑个人资料
        edit: function(data){

            return $http.put(etConfig.ajaxApi.user, data).then(function(res){

                return res.data;

            }, function(res){

                return res.data;

            });

        },

        //获取用户回享收益
        getIncome: function(){

            return $http.get(etConfig.ajaxApi.userIncome).then(function(res) {

                return res.data;

            }, function(res) {
                alert(res.data.msg);
            });

        },

        //获取用户的微话题
        getTopics: function(page){

            return $http.get(etConfig.ajaxApi.userTopics+'?page='+(page||1)).then(function(res) {

                return res.data;

            }, function(res) {
                alert(res.data.msg);
            });

        },

        //获取用户的回复
        getReplies: function(page){

            return $http.get(etConfig.ajaxApi.userReplies+'?page='+(page||1)).then(function(res) {

                return res.data;

            }, function(res) {
                alert(res.data.msg);
            });

        }

    };

}
