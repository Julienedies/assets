/**
 * Created by julien.zhang on 2014/7/23.
 */

function profile($, angular, etConfig, etApp){

    var _etApp =  etApp || angular.module('etApp', [ 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);

    function profileCtrl($scope, $http, $location, userManager, followManager){

        var uid = $location.absUrl().split('profile/')[1];
        $scope.uid = uid = (uid||'').split(/\W/).shift();

        (function($scope){

            var t = (new Date).getFullYear()*1+1;
            var list = [];

            for(var i=0; i<40; i++){
                t--;
                list.push({val:t,text:t});
            }

            $scope.years = list;

        })($scope);


        $scope.user = {};

        $scope._getUserDetail = getUserDetail;

        function getUserDetail(uid, user){

            userManager.getUserDetail(uid, user.id===uid).then(function(data){

                $scope.user = data;
                //$scope.user.cat_score = [{cat_name:'php',score:35},{cat_name:'互联网',score:70}];

                (function(d){

                    var max = _.max(d, function(item){ return item.score});
                    max = max.score;
                    _.each(d, function(v, k, list){
                        v.size = v.score/1000*100;
                    })
                    $scope.cat_score = d;

                })($scope.user.cat_score);


            },function(res){

            });
        }

        userManager.getUser().then(function (user) {

            getUserDetail(uid, user);

        });


        /**
         * follow part
         */

        followManager.getFollowNum(uid).then(function(res){
            $scope.followee = res.data.followee;
            $scope.follower = res.data.follower;
        }, function(res){
            //alert('error:' + res.data.msg);
        });

        // 关注
        $scope.follow = function(id){
            followManager.follow(id||uid).then(function(res){
                alert('ok');
                $scope.followed = true;
            }, function(res){
                alert('follow error:' + res.data.msg);
            });
        };

        // 取消关注
        $scope.unfollow = function(id){
            followManager.follow(id||uid).then(function(res){
                $scope.followed = false;
            }, function(res){
                alert('follow error:' + res.data.msg);
            });
        };


        $scope.lookFollowee = function(page){
            followManager.getFollow({uid:uid,type:'followee',page:page||1}).then(function(res){
                $scope.followers = res.data.data;
                $scope.followTmpl = 'followers.html';

            }, function(res){
                alert(res.data.msg);
            });
        };

        $scope.lookFollower = function(page){
            followManager.getFollow({uid:uid,type:'follower',page:page||1}).then(function(res){
                $scope.followers = res.data.data;
                $scope.followTmpl = 'followers.html';

            }, function(res){
                alert(res.data.msg);
            });
        };


        // 编辑个人资料
        $scope.editProfile = function(){
            $scope.profileEditing = !$scope.profileEditing;
            $scope.editProfileTmpl = 'editProfile.html';
        };

        // 取消个人资料编辑
        $scope.uneditProfile = function(){
            $scope.profileEditing = !$scope.profileEditing;
            $scope.editProfileTmpl = '';
        };


        //添加工作经历
        $scope.newWorkEx = {};

        $scope.addWorkEx = function(){

            var data = {schools: [$scope.newWorkEx]};

            userManager.addWorkEx(data).then(function(res){

                $scope.unAddWorkEx();

            }, function(res){

            });

        }

        $scope.unWorkEx = function(){
            $scope.addWorkExIng=!$scope.addWorkExIng;
            $scope.newWorkEx = {};
        }


        //添加教育经历
        $scope.newEduEx = {};

        $scope.addEduEx = function(){

            var data = {schools: [$scope.newEduex]};

            userManager.addEduEx(data).then(function(res){

                $scope.unAddEduEx();

            }, function(res){

            });

        }

        $scope.unAddEduEx = function(){
            $scope.addEduExIng=!$scope.addEduExIng;
            $scope.newEduEx = {};
        }



        ///////////////////////////////////

        $scope.$on('editSuccess',function(){
            getUserDetail(uid, $scope.user);
        });


    }



    function editProfileCtrl($scope, $http, $location, userManager){

        $scope.init = function(user){

            if(user.id){

                var user = $scope.user = angular.extend({}, user);
                delete user.cat_score;
                delete user.user_type;
            }

        }


        $scope.uploadConf = {url: etConfig.ajaxApi.uploadPortrait, success: function (data) {
            $scope.$apply(function(){
                $scope.user.portrait = data.portrait;
                $scope.user.portrait_id = data.portrait_id;
            });
        }, error: function (msg) {
            alert(msg);
        }};


        //保存修改
        $scope.submit = function(){

            userManager.edit($scope.user).then(function(data){

                $scope.uneditProfile();

                $scope.$emit('editSuccess',{});
                //$location.path('/user/me');

            }, function(res){
                  alert(res.data.msg);
            });
        };


    }




    function worksExCtrl($scope){

        $scope.add = function(){
            $scope.editingWorkEx = {};
            $scope.addIng=!$scope.addIng;
            $scope.addTmpl = !$scope.addTmpl ? 'editWorkEx.html' : void(0);
        }


        $scope.submit = function(){
            $scope.user.work_exp = $scope.user.work_exp || [];
            $scope.user.work_exp.push($scope.editingWorkEx);
            $scope.add();
        }

        $scope.cancel = function(){
            $scope.add();
        }

    }

    function edusExCtrl($scope){

        $scope.add = function(){
            $scope.editingEduEx = {};
            $scope.addIng=!$scope.addIng;
            $scope.addTmpl = !$scope.addTmpl ? 'editEduEx.html' : void(0);
        }

        $scope.submit = function(){
            $scope.user.edu_exp = $scope.user.edu_exp || [];
            $scope.user.edu_exp.push($scope.editingEduEx);
            $scope.add();
        }

        $scope.cancel = function(){
            $scope.add();
        }

    }



    function workExCtrl($scope){

        $scope.init = function(index){
            $scope.workExIndex = index;
        }

        $scope.edit = function(work){
            $scope.editingWorkEx = angular.copy(work);
            $scope.editing = !$scope.editing;
            $scope.editTmpl = 'editWorkEx.html';
        };


        $scope.remove = function(works, index){
            works.splice(index,1);
        };


        $scope.cancel = function(){
            $scope.editing = !$scope.editing;
            $scope.editTmpl = '';
        };

    }


    function eduExCtrl($scope){

        $scope.init = function(index){
            $scope.eduExIndex = index;
        }

        $scope.edit = function(edu){
            $scope.editingEduEx = angular.copy(edu);
            $scope.editing = !$scope.editing;
            $scope.editTmpl = 'editEduEx.html';
        };


        $scope.remove = function(edus, index){
            edus.splice(index,1);
        };


        $scope.cancel = function(){
            $scope.editing = !$scope.editing;
            $scope.editTmpl = '';
        };

    }



    function editWorkExCtrl($scope){

        $scope.init = function(editingWorkEx){
            $scope.newWorkEx = editingWorkEx;
        }

        $scope.submit = function(work){

            if(checkout()){

                if(typeof $scope.newWorkEx.id === 'undefined'){
                    $scope.user.work_exp = $scope.user.work_exp || [];
                    $scope.user.work_exp.push($scope.newWorkEx);
                }else{
                    $scope.user.work_exp.splice($scope.workExIndex, 1, $scope.newWorkEx);
                }

            }else{

                return alert('请完整填写公司名称，时间，职位。');
            }

            $scope.cancel();
        };

        /////////////////////////////////////////////////
        function checkout(){
            var ex = $scope.newWorkEx;
            if(!ex.name|| !ex.position||!ex.start_year||!ex.end_year){
                return false;
            }
            return true;
        }


    }



    function editEduExCtrl($scope){

        $scope.init = function(editingEduEx){
            $scope.newEduEx = editingEduEx;
        }

        $scope.submit = function(work){

            if(checkout()){

                if(typeof $scope.editingEduEx.id === 'undefined'){
                    $scope.user.edu_exp = $scope.user.edu_exp || [];
                    $scope.user.edu_exp.push($scope.newEduEx);
                }else{
                    $scope.user.edu_exp.splice($scope.eduExIndex, 1, $scope.newEduEx);
                }

            }else{
                return alert('请完整填写学校名称，时间，专业。');
            }

            $scope.cancel();
        };

        //////////////////////////////////////////
        function checkout(){
            var ex = $scope.newEduEx;
            if(!ex.name|| !ex.major||!ex.start_year||!ex.end_year){
                return false;
            }
            return true;
        }

    }


    _etApp.controller('profileCtrl',['$scope','$http', '$location','userManager','followManager', profileCtrl]);
    _etApp.controller('editProfileCtrl',['$scope','$http', '$location', 'userManager', editProfileCtrl]);
    _etApp.controller('worksExCtrl',['$scope','$http', 'userManager', worksExCtrl]);
    _etApp.controller('edusExCtrl',['$scope','$http', 'userManager', edusExCtrl]);
    _etApp.controller('workExCtrl',['$scope','$http', 'userManager', workExCtrl]);
    _etApp.controller('eduExCtrl',['$scope','$http', 'userManager', eduExCtrl]);
    _etApp.controller('editWorkExCtrl',['$scope','$http', 'userManager', editWorkExCtrl]);
    _etApp.controller('editEduExCtrl',['$scope','$http', 'userManager', editEduExCtrl]);


}
