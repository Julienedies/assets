/**
 * Created by julien.zhang on 2014/7/17.
 */

function reditor() {
    return {
        restrict : 'A',
        scope : {
            reditor : '=reditor'
        },
        link : function(scope, elm, attrs) {
            var _conf = {
                language: 'zh_cn',
                contentChangedCallback:function(){

                    var content = _elm.editable("getHTML")[0];

                    if(content === '<p><br></p>'){
                        content = '';
                    };
                    _elm.val(content);
                    _elm.trigger('change');
                    scope.$apply(function(){

                    });
                },
                autosave: true, // Enable autosave option. Enabling autosave helps preventing data loss.
                autosaveInterval: 100, // Time in milliseconds to define when the autosave should be triggered.
                saveURL: null, // Defines where to post the data when save is triggered. The editor will initialize a POST request to the specified URL passing the editor content in the body parameter of the HTTP request.
                blockTags: ["n", "p", "blockquote", "pre", "h4", "h5", "h6"], // Defines what tags list to format a paragraph and their order.
                borderColor: "", // Customize the appearance of the editor by changing the border color.
                buttons: ["bold", "italic", "underline", "strikeThrough", "fontSize", "color", "sep", "formatBlock", "align", "insertOrderedList", "insertUnorderedList", "outdent", "indent", "sep", "selectAll", "createLink", "insertImage", "undo", "redo"], // Defines the list of buttons that are available in the editor.
                crossDomain: false, // Make AJAX requests using CORS.
                direction: "ltr", // Sets the direction of the text.
                editorClass: "", // Set a custom class for the editor element.
                height: "auto", // Set a custom height for the editor element.
                imageMargin: 20, // Define a custom margin for image. It will be visible on the margin of the image when float left or right is active.
                imageErrorCallback: function(){console.log(JSON.stringify(arguments))},
                imageUploadParam: "imgFile", // Customize the name of the param that has the image file in the upload request.
                imageUploadURL: "/editor/php/upload_json.php",//etConfig.ajaxApi.editorUpload, // A custom URL where to save the uploaded image.
                inlineMode: false, // Enable or disable inline mode.
                placeholder: " ", // Set a custom placeholder to be used when the editor body is empty.
                shortcuts: true, // Enable shortcuts. The shortcuts are visible when you hover a button in the editor.
                spellcheck: false, // Enables spellcheck.
                typingTimer: 12250, // Time in milliseconds to define how long the typing pause may be without the change to be saved in the undo stack.
                minHeight: 120,
                width: "auto" // Set a custom width for the editor element.
            };


            var _elm = jQuery(elm[0]);

            var _reditor =  {};
            var conf = $.extend( {}, _conf, _reditor.conf || {});

            //console.log('#######', scope.reditor);

            _elm.editable(conf);

            _elm.editable("setHTML", _elm.val() || scope.reditor||'<p><br></p>', false);

        }
    };

}
