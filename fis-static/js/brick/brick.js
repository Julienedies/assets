/**
 * Created by Julien on 2014/6/30.
 *
 */
;(function(root, undefined){

        __inline('src/config.js');
        __inline('src/eventManager.js');
        __inline('src/controllers.js');
        __inline('src/services.js');
        __inline('src/directives.js');
        __inline('src/recordManager.js');
        __inline('src/parser.js');
        __inline('src/createRender.js');
        __inline('src/init.js');

        __inline('src/widget/$extension.js');
        __inline('src/widget/slider.js');
        __inline('src/widget/tabs.js');
        __inline('src/widget/dropdown.js');
        __inline('src/widget/pagination.js');
        __inline('src/widget/scene.js');
        __inline('src/widget/timer.js');
        __inline('src/widget/dialog.js');
        __inline('src/widget/form.js');
        __inline('src/widget/ajax.js');


        $(function(){

            setTimeout(function(){
                //console.table(brick.controllers._look());
                controllers.init();
                directives.init();
            }, 30);

        });



})(window);
