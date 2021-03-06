/**
 * Created by julien.zhang on 2014/7/4.
 */
etConfig = {

    ajaxApi:{

        user:  '/api/user/me',

        userDetail: '/api/user/info/detail',
        userMeDetail: '/api/user/me/detail',

        //用户收益
        userIncome: '/api/user/income',
        //用户微话题
        userTopics: '/api/user/topics',
        //用户回复
        userReplies: '/api/user/replies',
        // 用户通知
        notify: '/api/user/notif',
        //

        // 工作经历
        userWorkEx: '/api/user/companies',
        // 教育经历
        userEduEx: '/api/user/schools',

        // 社交
        follow: '',
        followNum: '',
        follows: '',


        login:  '/api/user/login',
        logout:  '/api/user/logout',
        register: '/api/user/register',

        suggest:  '/api/user/suggest',

        uploadPortrait:  '/api/user/portrait/upload',

        // 首页
        catsOverview:  '/api/cat/overview',
        catList: '/api/cat/list',

        cats:  '/api/cats',
        topics:  '/api/topics',

        topic:  '/api/topic',
        topicUp:  '/api/topic/up',
        topicDown:  '/api/topic/down',

        topicRel: '/api/topic/related',

        topicReplyUp:  '/api/topic/reply/up',
        topicReplyDown:  '/api/topic/reply/down',

        topicReplyCommentUp:  '/api/topic/reply/comment/up',
        topicReplyCommentDown:  '/api/topic/reply/comment/down',

        topicReplies:  '/api/topic/replies',

        topicReply:  '/api/topic/reply',
        topicReplyEdit: '/api/topic/reply',


        topicReplyComments:  '/api/topic/reply/comments',

        topicReplyComment:  '/api/topic/reply/comment',

        editorUpload: '/editor/php/upload_json.php',

        //刮刮卡图片
        scratchCardImage: '/api/scratch_card',
        //刮刮卡中奖提交
        scratchCardPrize: '/api/scratch_card/prize',

        repStoreList: '/api/rep_store/list',
        repStoreBuy: '/api/rep_store/buy',

        topTopic: '/api/top/topic',

        //收益显示列表
        enjoyerShow: '/api/user/enjoyer/topshow'


    }


};

/*
 //微话题图片上传（目前只支持微话题的图片）
 {
 url: "/editor/php/upload_json.php",
 req: "POST",
 arg: {
 FILE: {
 imgFile: FILE                          //input type=file name=imgFile
 }
 },
 ret: {
 error: 0/1,                                   //0成功, 1失败
 url: "http://www.25qr.com/...jpg",            //图片url
 message: ""                                   //失败原因
 }
 }
 */
