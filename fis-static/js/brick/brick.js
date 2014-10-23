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

        __inline('src/widget/slider.js');
        __inline('src/widget/tabs.js');
        __inline('src/widget/dropdown.js');
        __inline('src/widget/pagination.js');

        $(function(){
            directives.init();
        });

})(window);
