/*!
 * froala_editor v1.0.5 (http://editor.froala.com)
 * Copyright 2014-2014 Froala
 */
if ("undefined" == typeof jQuery) throw new Error("Froala requires jQuery");
!
    function(a) {
        "use strict";
        var b = function(c, d) {
            this.options = a.extend({}, b.DEFAULTS, a(c).data(), "object" == typeof d && d), this.browser = b.browser(), this.disabledList = [], this.init(c);
            console.log(this.options);
        };
        b.VALID_NODES = ["P", "PRE", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6", "DIV"], b.COLORS = ["#000000", "#444444", "#666666", "#999999", "#CCCCCC", "#EEEEEE", "#F3F3F3", "#FFFFFF", "#FF0000", "#FF9900", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9900FF", "#FF00FF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6FA8DC", "#8E7CC3", "#C27BA0", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3D85C6", "#674EA7", "#A64D79", "#990000", "#B45F06", "#BF9000", "#38771D", "#134F5C", "#0B5394", "#351C75", "#741B47", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#073763", "#201211", "#4C1130"], b.commands = {
            bold: {
                title: "Bold (Ctrl + B)",
                icon: "fa fa-bold"
            },
            italic: {
                title: "Italic (Ctrl + I)",
                icon: "fa fa-italic"
            },
            underline: {
                cmd: "underline",
                title: "Underline (Ctrl + U)",
                icon: "fa fa-underline"
            },
            strikeThrough: {
                title: "Strike Through",
                icon: "fa fa-strikethrough"
            },
            fontSize: {
                title: "Font Size",
                icon: "fa fa-text-height",
                seed: [{
                    min: 11,
                    max: 52
                }]
            },
            color: {
                icon: "fa fa-font",
                seed: [{
                    cmd: "backColor",
                    value: b.COLORS,
                    title: "Background Color"
                }, {
                    cmd: "foreColor",
                    value: b.COLORS,
                    title: "Foreground Color"
                }]
            },
            formatBlock: {
                title: "Format Block",
                icon_alt: "&para;",
                seed: [{
                    value: "n",
                    title: "Normal"
                }, {
                    value: "p",
                    title: "Paragraph"
                }, {
                    value: "pre",
                    title: "Code"
                }, {
                    value: "blockquote",
                    title: "Quote"
                }, {
                    value: "h1",
                    title: "Heading 1"
                }, {
                    value: "h2",
                    title: "Heading 2"
                }, {
                    value: "h3",
                    title: "Heading 3"
                }, {
                    value: "h4",
                    title: "Heading 4"
                }, {
                    value: "h5",
                    title: "Heading 5"
                }, {
                    value: "h6",
                    title: "Heading 6"
                }]
            },
            align: {
                title: "Align",
                icon: "fa fa-align-center",
                seed: [{
                    cmd: "justifyLeft",
                    title: "Align Left",
                    icon: "fa fa-align-left"
                }, {
                    cmd: "justifyCenter",
                    title: "Align Center",
                    icon: "fa fa-align-center"
                }, {
                    cmd: "justifyRight",
                    title: "Align Right",
                    icon: "fa fa-align-right"
                }, {
                    cmd: "justifyFull",
                    title: "Align Justify",
                    icon: "fa fa-align-justify"
                }]
            },
            insertOrderedList: {
                title: "Numbered List",
                icon: "fa fa-list-ol"
            },
            insertUnorderedList: {
                title: "Bulleted List",
                icon: "fa fa-list-ul"
            },
            outdent: {
                title: "Indent Less (Ctrl + <)",
                icon: "fa fa-dedent",
                activeless: !0
            },
            indent: {
                title: "Indent More (Ctrl + >)",
                icon: "fa fa-indent",
                activeless: !0
            },
            selectAll: {
                title: "Select All (Ctrl + A)",
                icon: "fa fa-file-text"
            },
            createLink: {
                title: "Insert Link (Ctrl + K)",
                icon: "fa fa-link"
            },
            insertImage: {
                title: "Insert Image (Ctrl + P)",
                icon: "fa fa-picture-o",
                activeless: !0
            },
            undo: {
                title: "Undo (Ctrl+Z)",
                icon: "fa fa-undo",
                activeless: !0
            },
            redo: {
                title: "Redo (Shift+Ctrl+Z)",
                icon: "fa fa-repeat",
                activeless: !0
            },
            html: {
                title: "Show Html",
                icon: "fa fa-code"
            }
        }, b.DEFAULTS = {
            autosave: !1,
            autosaveInterval: 1e3,
            saveURL: null,
            blockTags: ["n", "p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
            borderColor: "#252528",
            buttons: ["bold", "italic", "underline", "strikeThrough", "fontSize", "color", "sep", "formatBlock", "align", "insertOrderedList", "insertUnorderedList", "outdent", "indent", "sep", "selectAll", "createLink", "insertImage", "undo", "redo", "html"],
            crossDomain: !1,
            direction: "ltr",
            editorClass: "",
            height: "auto",
            imageMargin: 20,
            //imageErrorCallback: !1,
            //imageUploadParam: "file",
            //imageUploadURL: "/editor/php/upload_json.php",
            inlineMode: !0,
            placeholder: "Type something",
            shortcuts: !0,
            spellcheck: !1,
            typingTimer: 250,
            width: "auto"
        }, b.hexToRGB = function(a) {
            var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            a = a.replace(b, function(a, b, c, d) {
                return b + b + c + c + d + d
            });
            var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return c ? {
                r: parseInt(c[1], 16),
                g: parseInt(c[2], 16),
                b: parseInt(c[3], 16)
            } : null
        }, b.hexToRGBString = function(a) {
            var b = this.hexToRGB(a);
            return "rgb(" + b.r + ", " + b.g + ", " + b.b + ")"
        }, b.browser = function() {
            var a = navigator.userAgent.toLowerCase(),
                b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [],
                c = {
                    browser: b[1] || "",
                    version: b[2] || "0"
                },
                d = {};
            return b[1] && (d[c.browser] = !0), parseInt(c.version, 10) < 9 && d.msie && (d.oldMsie = !0), d.chrome ? d.webkit = !0 : d.webkit && (d.safari = !0), d
        }, b.prototype.text = function() {
            var a = "";
            return window.getSelection ? a = window.getSelection() : document.getSelection ? a = document.getSelection() : document.selection && (a = document.selection.createRange().text), a
        }, b.prototype.selectionInEditor = function() {
            var b = this.getSelectionParent(),
                c = !1;
            return b == this.$element.get(0) ? !0 : (a(b).parents().each(a.proxy(function(a, b) {
                b == this.$element.get(0) && (c = !0)
            }, this)), c)
        }, b.prototype.getSelection = function() {
            var a = "";
            return a = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange()
        }, b.prototype.getRange = function() {
            if (window.getSelection) {
                var a = window.getSelection();
                if (a.getRangeAt && a.rangeCount) return a.getRangeAt(0)
            }
            return document.createRange()
        }, b.prototype.clearSelection = function() {
            if (window.getSelection) {
                var a = window.getSelection();
                a.removeAllRanges()
            } else if (document.selection.createRange) {
                {
                    document.selection.createRange()
                }
                document.selection.empty()
            }
        }, b.prototype.getSelectionElement = function() {
            var a = this.getSelection();
            if (a.rangeCount) {
                var b = a.getRangeAt(0).startContainer;
                return 1 != b.nodeType ? b.parentNode : b
            }
            return this.$element.get(0)
        }, b.prototype.getSelectionParent = function() {
            var a, b = null;
            return window.getSelection ? (a = window.getSelection(), a.rangeCount && (b = a.getRangeAt(0).commonAncestorContainer, 1 != b.nodeType && (b = b.parentNode))) : (a = document.selection) && "Control" != a.type && (b = a.createRange().parentElement()), b
        }, b.prototype.nodeInRange = function(a, b) {
            var c;
            if (a.intersectsNode) return a.intersectsNode(b);
            c = b.ownerDocument.createRange();
            try {
                c.selectNode(b)
            } catch (d) {
                c.selectNodeContents(b)
            }
            return -1 == a.compareBoundaryPoints(Range.END_TO_START, c) && 1 == a.compareBoundaryPoints(Range.START_TO_END, c)
        }, b.prototype.getElementFromNode = function(c) {
            for (1 != c.nodeType && (c = c.parentNode); null != c && b.VALID_NODES.indexOf(c.tagName) < 0;) c = c.parentNode;
            return jQuery.makeArray(a(c).parents()).indexOf(this.$element.get(0)) >= 0 ? c : null
        }, b.prototype.nextNode = function(a) {
            if (a.hasChildNodes()) return a.firstChild;
            for (; a && !a.nextSibling;) a = a.parentNode;
            return a ? a.nextSibling : null
        }, b.prototype.getRangeSelectedNodes = function(a) {
            var b = a.startContainer,
                c = a.endContainer;
            if (b == c) return [b];
            for (var d = []; b && b != c;) d.push(b = this.nextNode(b));
            for (b = a.startContainer; b && b != a.commonAncestorContainer;) d.unshift(b), b = b.parentNode;
            return d
        }, b.prototype.getSelectedNodes = function() {
            if (window.getSelection) {
                var a = window.getSelection();
                if (!a.isCollapsed) return this.getRangeSelectedNodes(a.getRangeAt(0))
            }
            return []
        }, b.prototype.getSelectionElements = function() {
            var b = this.getSelectedNodes(),
                c = [];
            return a.each(b, a.proxy(function(a, b) {
                if (null != b) {
                    var d = this.getElementFromNode(b);
                    c.indexOf(d) < 0 && d != this.$element.get(0) && null != d && c.push(d)
                }
            }, this)), 0 == c.length && c.push(this.$element.get(0)), c
        }, b.prototype.getSelectionLink = function() {
            var a, b;
            return window.getSelection ? (b = window.getSelection(), a = b.anchorNode.parentNode.href) : (b = document.selection) && "Control" != b.type && (a = b.createRange().parentElement().href), a
        }, b.prototype.saveSelection = function() {
            var a, b, c, d = this.getSelection();
            if (d.getRangeAt && d.rangeCount) {
                for (c = [], a = 0, b = d.rangeCount; b > a; a += 1) c.push(d.getRangeAt(a));
                this.savedRanges = c
            } else this.savedRanges = null
        }, b.prototype.restoreSelection = function() {
            var a, b, c = this.getSelection();
            if (this.savedRanges) for (c.removeAllRanges(), a = 0, b = this.savedRanges.length; b > a; a += 1) c.addRange(this.savedRanges[a])
        }, b.prototype.saveSelectionByMarkers = function() {
            if ("" != this.getSelection()) {
                var a = this.getRange();
                this.placeMarker(a, !0), this.placeMarker(a, !1)
            }
        }, b.prototype.restoreSelectionByMarkers = function() {
            var a = this.$element.find("#marker-true"),
                b = this.$element.find("#marker-false");
            return a.length && b.length ? (this.$element.focus(), this.setSelection(a[0], 0, b[0], 0), void this.removeMarkers()) : !1
        }, b.prototype.setSelection = function(a, b, c, d) {
            null == c && (c = a), null == d && (d = b);
            var e = this.getSelection();
            if (e) {
                var f = this.getRange();
                f.setStart(a, b), f.setEnd(c, d);
                try {
                    e.removeAllRanges()
                } catch (g) {}
                e.addRange(f)
            }
        }, b.prototype.placeMarker = function(b, c) {
            var d = b.cloneRange();
            d.collapse(c), d.insertNode(a('<span id="marker-' + c + '">', document)[0]), d.detach()
        }, b.prototype.removeMarkers = function() {
            this.$element.find("#marker-true, #marker-false").removeAttr("id")
        }, b.prototype.repositionEditor = function() {
            if (this.options.inlineMode) {
                var b = this.getRange().getBoundingClientRect();
                if (b.left && b.top && b.right && b.bottom) {
                    var c = b.left + b.width / 2 + a(window).scrollLeft(),
                        d = b.top + b.height + a(window).scrollTop();
                    this.isTouch() && (c = b.left + b.width / 2, d = b.top + b.height), this.showByCoordinates(c, d)
                } else {
                    document.execCommand("selectAll");
                    var b = this.getRange().getBoundingClientRect(),
                        c = b.left + a(window).scrollLeft(),
                        d = b.top + b.height + a(window).scrollTop();
                    this.isTouch() && (c = b.left, d = b.top + b.height), this.showByCoordinates(c, d - 20), this.getRange().collapse(!1)
                }
            }
        }, b.prototype.destroy = function() {
            this.sync(), this.$editor.remove(), this.$element.replaceWith(this.getHTML()), this.$box.removeClass("froala-box"), this.$box.find(".html-switch").remove(), clearTimeout(this.typingTimer), clearTimeout(this.ajaxInterval), this.$textarea && (this.$box.remove(), this.$textarea.show())
        }, b.prototype.callback = function(b, c) {
            var d = b + "Callback";
            this.options[d] && a.isFunction(this.options[d]) && (c ? this.options[d].call(this, c) : this.options[d].call(this)), this.sync()
        }, b.prototype.sync = function() {
            this.$textarea && this.$textarea.val(this.getHTML()), this.$element.find("span:empty").remove()
        }, b.prototype.init = function(a) {
            this.initElement(a), this.initElementStyle(), this.initUndoRedo(), this.initShortcuts(), this.initEditor(), this.initDrag(), this.initOptions(), this.initEditorSelection(), this.initAjaxSaver(), this.initImageResizer(), this.initImagePopup(), this.initLink()
        }, b.prototype.initLink = function() {
            var b = this;
            this.$element.on("click touchend", "a", function(c) {
                c.stopPropagation(), c.preventDefault(), b.link = !0, "" == b.text() && (a(this).prepend('<span id="marker-true"></span>'), a(this).append('<span id="marker-false"></span>'), b.restoreSelectionByMarkers(), b.$bttn_wrapper.find('[data-cmd="createLink"]').click(), b.$link_wrapper.find('input[type="text"]').val(a(this).attr("href")), b.$link_wrapper.find('input[type="checkbox"]').prop("checked", "_blank" == a(this).attr("target")), b.repositionEditor(), b.$popup_editor.show())
            })
        }, b.prototype.imageHandle = function() {
            var b = this,
                c = a("<span>").addClass("f-img-handle").on({
                    movestart: function(c) {
                        b.hide(), b.$element.addClass("f-non-selectable").removeAttr("contenteditable"), b.isResizing = !0, a(this).attr("data-start-x", c.startX), a(this).attr("data-start-y", c.startY)
                    },
                    move: function(b) {
                        {
                            var c = a(this),
                                d = b.pageX - parseInt(c.attr("data-start-x"));
                            b.pageY - parseInt(c.attr("data-start-y"))
                        }
                        c.attr("data-start-x", b.pageX), c.attr("data-start-y", b.pageY);
                        var e = c.prevAll("img");
                        e.width(c.hasClass("f-h-ne") || c.hasClass("f-h-se") ? e.width() + d : e.width() - d)
                    },
                    moveend: function() {
                        if (b.isResizing = !1, a(this).removeAttr("data-start-x"), a(this).removeAttr("data-start-y"), b.$element.removeClass("f-non-selectable").attr("contenteditable", !0), b.browser.mozilla) try {
                            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
                        } catch (c) {}
                    }
                });
            return c
        }, b.prototype.initImageResizer = function() {
            if (this.browser.mozilla) try {
                document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
            } catch (b) {}
            var c = this;
            this.$element.on("mousedown", "img", function() {
                c.$element.attr("contenteditable", !1)
            }), this.$element.on("mouseup", "img", function() {
                c.$element.attr("contenteditable", !0)
            }), this.$element.on("click touchend", "img", function(b) {
                b.preventDefault(), b.stopPropagation(), c.$element.blur(), c.$image_editor.find("button").removeClass("active");
                var d = a(this).css("float");
                c.$image_editor.find('button[data-cmd="floatImage' + d.charAt(0).toUpperCase() + d.slice(1) + '"]').addClass("active"), c.$image_editor.find('.f-image-alt input[type="text"]').val(a(this).attr("alt") || a(this).attr("title")), c.showImageEditor(), c.showByCoordinates(a(this).offset().left + a(this).width() / 2, a(this).offset().top + a(this).height()), a(this).parent().hasClass("f-img-editor") && "SPAN" == a(this).parent().get(0).tagName || (a(this).wrap('<span class="f-img-editor" style="float: ' + a(this).css("float") + "; margin-left:" + a(this).css("margin-left") + " ; margin-right:" + a(this).css("margin-right") + "; margin-bottom: " + a(this).css("margin-bottom") + ';"></span>'), a(this).css("margin-left", "auto"), a(this).css("margin-right", "auto"), a(this).css("margin-bottom", "auto"));
                var e = c.imageHandle();
                a(this).parent().append(e.clone(!0).addClass("f-h-ne")), a(this).parent().append(e.clone(!0).addClass("f-h-se")), a(this).parent().append(e.clone(!0).addClass("f-h-sw")), a(this).parent().append(e.clone(!0).addClass("f-h-nw")), c.clearSelection(), c.imageMode = !0
            }), this.$element.find("img").each(function(a, b) {
                b.oncontrolselect = function() {
                    return !1
                }
            })
        }, b.prototype.initImagePopup = function() {
            var b = a("<button>").addClass("cl-bttn").attr("data-cmd", "floatImageLeft").attr("title", "Float left").html('<i class="fa fa-align-left"></i>'),
                c = a("<button>").addClass("cl-bttn").attr("data-cmd", "floatImageNone").attr("title", "Float none").html('<i class="fa fa-align-justify"></i>'),
                d = a("<button>").addClass("cl-bttn").attr("data-cmd", "floatImageRight").attr("title", "Float right").html('<i class="fa fa-align-right"></i>'),
                e = a("<button>").addClass("cl-bttn").attr("data-cmd", "linkImage").attr("title", "Insert link").html('<i class="fa fa-link"></i>'),
                f = a("<button>").addClass("cl-bttn").attr("data-cmd", "replaceImage").attr("title", "Replace image").html('<i class="fa fa-exchange"></i>'),
                g = a("<button>").addClass("cl-bttn").attr("data-cmd", "removeImage").attr("title", "Remove image").html('<i class="fa fa-trash-o"></i>'),
                h = a('<div class="f-image-alt">').append("<label>Title: </label>").append(a('<input type="text">').on("mouseup touchend keydown", function(a) {
                    a.stopPropagation()
                })).append(a("<button>").attr("data-cmd", "setImageAlt").attr("title", "OK").html("OK"));
            this.$image_editor = a("<div>").addClass("bttn-wrapper f-image-editor").append(b).append(c).append(d).append(e).append(f).append(g).append("<hr/>").append(h);
            var i = this;
            this.$image_editor.find("button").click(function(b) {
                b.stopPropagation(), i[a(this).attr("data-cmd")](i.$element.find("span.f-img-editor"))
            }), this.$popup_editor.append(this.$image_editor)
        }, b.prototype.floatImageLeft = function(a) {
            a.css("margin-left", "auto"), a.css("margin-right", this.options.imageMargin), a.css("margin-bottom", this.options.imageMargin), a.css("float", "left"), a.find("img").css("float", "left"), this.saveUndoStep(), this.callback("floatImageLeft"), a.find("img").click()
        }, b.prototype.floatImageNone = function(a) {
            a.css("margin-left", "auto"), a.css("margin-right", "auto"), a.css("margin-bottom", this.options.imageMargin), a.css("float", "none"), a.find("img").css("float", "none"), a.parent().get(0) == this.$element.get(0) ? a.wrap('<div style="text-align: center;"></div>') : a.parent().css("text-align", "center"), this.saveUndoStep(), this.callback("floatImageNone"), a.find("img").click()
        }, b.prototype.floatImageRight = function(a) {
            a.css("margin-right", "auto"), a.css("margin-left", this.options.imageMargin), a.css("margin-bottom", this.options.imageMargin), a.css("float", "right"), a.find("img").css("float", "right"), this.saveUndoStep(), this.callback("floatImageRight"), a.find("img").click()
        }, b.prototype.linkImage = function(a) {
            this.showInsertLink(), this.imageMode = !0, "A" == a.parent().get(0).tagName ? (this.$link_wrapper.find('input[type="text"]').val(a.parent().attr("href")), "_blank" == a.parent().attr("target") ? this.$link_wrapper.find('input[type="checkbox"]').prop("checked", !0) : this.$link_wrapper.find('input[type="checkbox"]').prop("checked", !1)) : this.$link_wrapper.find('input[type="text"]').val("http://")
        }, b.prototype.replaceImage = function(a) {
            this.showInsertImage(), this.imageMode = !0, this.$image_wrapper.find('input[type="text"]').val(a.find("img").attr("src"))
        }, b.prototype.removeImage = function(a) {
            this.callback("beforeRemoveImage"), confirm("Are you sure? Image will be deleted.") ? (a.remove(), this.hide(), this.saveUndoStep(), this.callback("afterRemoveImage")) : a.find("img").click()
        }, b.prototype.setImageAlt = function(a) {
            a.find("img").attr("alt", this.$image_editor.find('.f-image-alt input[type="text"]').val()), a.find("img").attr("title", this.$image_editor.find('.f-image-alt input[type="text"]').val()), this.saveUndoStep(), this.hide(), this.closeImageMode(), this.callback("setImageAlt")
        }, b.prototype.initElement = function(b) {
            "TEXTAREA" == b.tagName ? (this.$textarea = a(b), this.$element = a("<div>").html(this.$textarea.val()), this.$textarea.before(this.$element).hide()) : ("DIV" != b.tagName && this.options.buttons.indexOf("formatBlock") >= 0 && this.disabledList.push("formatBlock"), this.$element = a(b)), this.$box = this.$element, this.$element = a("<div>"), this.setHTML(this.$box.html()), this.$box.empty(), this.$box.html(this.$element).addClass("froala-box"), this.$element.on("drop", function() {
                setTimeout(function() {
                    a("html").click()
                }, 1)
            })
        }, b.prototype.trim = function(a) {
            return String(a).replace(/^\s+|\s+$/g, "")
        }, b.prototype.wrapText = function() {
            var b = [],
                c = ["SPAN", "A", "B", "I", "EM", "STRONG", "STRIKE", "FONT"];
            this.$element.contents().filter(function() {
                if (this.nodeType == Node.TEXT_NODE && a(this).text().trim().length > 0 || c.indexOf(this.tagName) >= 0) b.push(this);
                else {
                    var d = a("<div>");
                    for (var e in b) d.append(a(b[e]).clone()), e == b.length - 1 ? a(b[e]).replaceWith(d) : a(b[e]).remove();
                    b = []
                }
            }), this.$element.find("div:empty, > br").remove()
        }, b.prototype.setHTML = function(b) {
            this.$element.html(a.htmlClean(b, {
                format: !0
            })), this.wrapText()
        }, b.prototype.initElementStyle = function() {
            this.$element.attr("contentEditable", !0), this.$element.addClass("froala-element").addClass(this.options.editorClass), this.$element.css("outline", 0)
        }, b.prototype.initUndoRedo = function() {
            (this.isEnabled("undo") || this.isEnabled("redo")) && (this.undoStack = [], this.undoIndex = 0, this.saveUndoStep(), this.enableTypingUndo()), this.disableBrowserUndo()
        }, b.prototype.enableTypingUndo = function() {
            this.typingTimer = null, this.$element.on("keydown", a.proxy(function() {
                clearTimeout(this.typingTimer), this.ajaxSave = !1, this.oldHtml = this.$element.html(), this.typingTimer = setTimeout(a.proxy(function() {
                    this.$element.html() != this.oldHtml && this.$element.html() != this.undoStack[this.undoIndex - 1] && this.saveUndoStep()
                }, this), Math.max(this.options.typingTimer, 200))
            }, this))
        }, b.prototype.getHTML = function() {
            var b = this.$element.clone();
            return b.find(".f-img-editor > img").each(function(b, c) {
                a(c).css("margin-left", a(c).parent().css("margin-left")), a(c).css("margin-right", a(c).parent().css("margin-right")), a(c).css("margin-bottom", a(c).parent().css("margin-bottom")), a(c).siblings("span.f-img-handle").remove().end().unwrap()
            }), a.htmlClean(b.html())
        }, b.prototype.initAjaxSaver = function() {
            if (this.options.autosave) {
                this.ajaxHTML = this.getHTML(), this.ajaxSave = !0, this.ajaxInterval = setInterval(a.proxy(function() {
                    this.ajaxHTML != this.getHTML() && this.ajaxSave && (this.save(), this.ajaxHTML = this.getHTML()), this.ajaxSave = !0
                }, this), Math.max(this.options.autosaveInterval, 1e3)); {
                    this.$element.html()
                }
            }
        }, b.prototype.disableBrowserUndo = function() {
            a("body").keydown(function(a) {
                var b = a.which,
                    c = a.ctrlKey || a.metaKey;
                if (!this.isHTM && c) {
                    if (75 == b) return a.preventDefault(), !1;
                    if (90 == b && a.shiftKey) return a.preventDefault(), !1;
                    if (90 == b) return a.preventDefault(), !1
                }
            })
        }, b.prototype.saveUndoStep = function() {
            if (this.isEnabled("undo") || this.isEnabled("redo")) {
                for (; this.undoStack.length > this.undoIndex;) this.undoStack.pop();
                this.undoStack.push(this.getHTML()), this.undoIndex++, this.refreshUndoRedo()
            }
            this.sync()
        }, b.prototype.initShortcuts = function() {
            this.options.shortcuts && this.$element.on("keydown", a.proxy(function(a) {
                var b = a.which,
                    c = a.ctrlKey || a.metaKey;
                if (!this.isHTML && c) {
                    if (70 == b) return this.show(null), !1;
                    if (66 == b) return this.execDefaultShortcut("bold");
                    if (73 == b) return this.execDefaultShortcut("italic");
                    if (85 == b) return this.execDefaultShortcut("underline");
                    if (75 == b) return this.execDefaultShortcut("createLink");
                    if (80 == b) return this.repositionEditor(), this.execDefaultShortcut("insertImage");
                    if (65 == b) return this.execDefaultShortcut("selectAll");
                    if (190 == b) return this.execDefaultShortcut("indent");
                    if (188 == b) return this.execDefaultShortcut("outdent");
                    if (72 == b) return this.execDefaultShortcut("html");
                    if (48 == b) return this.execDefaultShortcut("formatBlock", "n");
                    if (49 == b) return this.execDefaultShortcut("formatBlock", "h1");
                    if (50 == b) return this.execDefaultShortcut("formatBlock", "h2");
                    if (51 == b) return this.execDefaultShortcut("formatBlock", "h3");
                    if (52 == b) return this.execDefaultShortcut("formatBlock", "h4");
                    if (53 == b) return this.execDefaultShortcut("formatBlock", "h5");
                    if (54 == b) return this.execDefaultShortcut("formatBlock", "h6");
                    if (90 == b && a.shiftKey) return this.redo(), a.stopPropagation(), !1;
                    if (90 == b) return this.undo(), a.stopPropagation(), !1
                }
                9 != b || a.shiftKey ? 9 == b && a.shiftKey && a.preventDefault() : (a.preventDefault(), this.insertHTML("&nbsp;&nbsp;&nbsp;&nbsp;", !1))
            }, this))
        }, b.prototype.insertHTML = function(a, b) {
            var c, d;
            if (window.getSelection) {
                if (c = window.getSelection(), c.getRangeAt && c.rangeCount) {
                    d = c.getRangeAt(0), d.deleteContents();
                    var e = document.createElement("div");
                    e.innerHTML = a;
                    for (var f, g, h = document.createDocumentFragment(); f = e.firstChild;) g = h.appendChild(f);
                    var i = h.firstChild;
                    d.insertNode(h), g && (d = d.cloneRange(), d.setStartAfter(g), b ? d.setStartBefore(i) : d.collapse(!0), c.removeAllRanges(), c.addRange(d))
                }
            } else if ((c = document.selection) && "Control" != c.type) {
                var j = c.createRange();
                j.collapse(!0), c.createRange().pasteHTML(a), b && (d = c.createRange(), d.setEndPoint("StartToStart", j), d.select())
            }
        }, b.prototype.execDefaultShortcut = function(a, b) {
            return this.isEnabled(a) ? (this.exec(a, b), !1) : !0
        }, b.prototype.initEditor = function() {
            this.$editor = a("<div>"), this.$editor.addClass("froala-editor").hide(), a("body").append(this.$editor), this.options.inlineMode ? this.initInlineEditor() : this.initBasicEditor()
        }, b.prototype.initBasicEditor = function() {
            this.$element.addClass("f-basic"), this.$popup_editor = this.$editor.clone(), this.$popup_editor.appendTo(a("body")), this.$editor.addClass("f-basic").show(), this.$editor.insertBefore(this.$element)
        }, b.prototype.initInlineEditor = function() {
            this.$popup_editor = this.$editor
        }, b.prototype.initDrag = function() {
            this.isEnabled("insertImage") && (this.drag_support = {
                filereader: "undefined" != typeof FileReader,
                formdata: !! window.FormData,
                progress: "upload" in new XMLHttpRequest
            })
        }, b.prototype.initOptions = function() {
            this.setDimensions(), this.setDirection(), this.setBorderColor(), this.setPlaceholder(), this.setPlaceholderEvents(), this.setSpellcheck(), this.setButtons()
        }, b.prototype.closeImageMode = function() {
            this.$element.find("span.f-img-editor > img").each(function(b, c) {
                a(c).css("margin-left", a(c).parent().css("margin-left")), a(c).css("margin-right", a(c).parent().css("margin-right")), a(c).css("margin-bottom", a(c).parent().css("margin-bottom")), a(c).siblings("span.f-img-handle").remove().end().unwrap()
            }), this.$element.find("span.f-img-editor").length && this.$element.find("span.f-img-editor").remove(), this.$element.attr("contenteditable", !0), this.$image_editor.hide()
        }, b.prototype.isTouch = function() {
            return "ontouchstart" in window || "onmsgesturechange" in window
        }, b.prototype.initEditorSelection = function() {
            this.$element.on("mousedown touchstart", a.proxy(function() {
                this.$element.attr("data-resize") || (this.closeImageMode(), this.hide())
            }, this)), this.$element.on("mouseup touchend", a.proxy(function(a) {
                var b = this.text();
                "" == b || this.isTouch() ? this.options.inlineMode || this.refreshButtons() : (a.stopPropagation(), this.show(a)), this.imageMode = !1
            }, this)), this.$element.on("mousedown touchstart", "img", a.proxy(function(a) {
                this.isResizing || a.stopPropagation()
            }, this)), this.$element.on("mousedown touchstart", ".f-img-handle", a.proxy(function() {
                this.$element.attr("data-resize", !0)
            }, this)), this.$element.on("mouseup touchend", ".f-img-handle", a.proxy(function() {
                this.$element.removeAttr("data-resize")
            }, this)), this.$popup_editor.on("mouseup touchend", a.proxy(function(a) {
                var b = this.text();
                ("" != b || this.imageMode) && a.stopPropagation()
            }, this)), this.$link_wrapper.on("mouseup", a.proxy(function(a) {
                a.stopPropagation()
            })), this.$image_wrapper.on("mouseup", a.proxy(function(a) {
                a.stopPropagation()
            })), a(window).on("mouseup touchend", a.proxy(function() {
                this.selectionInEditor() && "" != this.text() && !this.isTouch() ? this.show(null) : (this.hide(), this.closeImageMode())
            }, this)), a(document).on("selectionchange", a.proxy(function(a) {
                if (this.options.inlineMode && this.selectionInEditor() && 1 != this.link && this.isTouch()) {
                    var b = this.text();
                    "" != b ? (this.show(null), a.stopPropagation()) : this.hide()
                }
            }, this)), a(window).keydown(a.proxy(function(a) {
                a.ctrlKey || (this.hide(), this.closeImageMode())
            }, this))
        }, b.prototype.setPlaceholder = function(a) {
            a && (this.options.placeholder = a)
        }, b.prototype.setPlaceholderEvents = function() {
            this.$element.on("blur", a.proxy(function() {
                "" == this.$element.text() ? (this.placeholderVisible = !0, this.$element.addClass("f-placeholder"), this.$element.text(this.options.placeholder)) : this.placeholderVisible = !1
            }, this)), this.$element.on("focus", a.proxy(function() {
                this.placeholderVisible && (this.$element.removeClass("f-placeholder"), this.placeholderVisible = !1, this.$element.html(""))
            }, this))
        }, b.prototype.setDimensions = function(a, b) {
            a && (this.options.height = a), b && (this.options.widht = b), "auto" != this.options.height && this.$element.css("height", this.options.height), "auto" != this.options.width && this.$element.css("width", this.options.width)
        }, b.prototype.setDirection = function(a) {
            a && (this.options.direction = a), "ltr" != this.options.direction && "rtl" != this.options.direction && (this.options.direction = "ltr"), this.$element.css("direction", this.options.direction)
        }, b.prototype.setBorderColor = function(a) {
            a && (this.options.borderColor = a);
            var c = b.hexToRGB(this.options.borderColor);
            null != c && (this.$editor.css("border-color", this.options.borderColor), this.$editor.attr("data-border-color", this.options.borderColor))
        }, b.prototype.setSpellcheck = function(a) {
            a && (this.options.spellcheck = a), this.$element.attr("spellcheck", this.options.spellcheck)
        }, b.prototype.setButtons = function(c) {
            c && (this.options.buttons = c), this.$bttn_wrapper = a("<div>").addClass("bttn-wrapper"), this.$editor.append(this.$bttn_wrapper);
            for (var d in this.options.buttons) {
                "sep" == this.options.buttons[d] && this.$bttn_wrapper.append(this.options.inlineMode ? '<div class="f-clear"></div><hr/>' : '<span class="f-sep"></span>');
                var e = b.commands[this.options.buttons[d]];
                if (void 0 != e) switch (e.cmd = this.options.buttons[d], e.cmd) {
                    case "color":
                        var f = this.buildDropdownColor(e),
                            g = this.buildDropdownButton(e, "clump-color-picker").append(f);
                        this.$bttn_wrapper.append(g);
                        break;
                    case "align":
                        var f = this.buildDropdownAlign(e),
                            g = this.buildDropdownButton(e, "clump-selector").append(f);
                        this.$bttn_wrapper.append(g);
                        break;
                    case "fontSize":
                        var f = this.buildDropdownFontsize(e),
                            g = this.buildDropdownButton(e).append(f);
                        this.$bttn_wrapper.append(g);
                        break;
                    case "formatBlock":
                        var f = this.buildDropdownFormatblock(e),
                            g = this.buildDropdownButton(e).append(f);
                        this.$bttn_wrapper.append(g);
                        break;
                    case "createLink":
                        var g = this.buildDefaultButton(e);
                        this.$bttn_wrapper.append(g), this.buildCreateLink();
                        break;
                    case "insertImage":
                        var g = this.buildDefaultButton(e);
                        this.$bttn_wrapper.append(g), this.buildInsertImage();
                        break;
                    case "undo":
                    case "redo":
                        var g = this.buildDefaultButton(e);
                        this.$bttn_wrapper.append(g), g.prop("disabled", !0);
                        break;
                    case "html":
                        var g = this.buildDefaultButton(e);
                        this.$bttn_wrapper.append(g), this.options.inlineMode && this.$box.append(g.clone(!0).addClass("html-switch").attr("title", "Hide HTML").click(a.proxy(function() {
                            this.html()
                        }, this)));
                        this.$html_area = a('<textarea wrap="hard">').keydown(function(b) {
                            var c = b.keyCode || b.which;
                            if (9 == c) {
                                b.preventDefault();
                                var d = a(this).get(0).selectionStart,
                                    e = a(this).get(0).selectionEnd;
                                a(this).val(a(this).val().substring(0, d) + "	" + a(this).val().substring(e)), a(this).get(0).selectionStart = a(this).get(0).selectionEnd = d + 1
                            }
                        });
                        break;
                    default:
                        var g = this.buildDefaultButton(e);
                        this.$bttn_wrapper.append(g)
                }
            }
            this.bindButtonEvents()
        }, b.prototype.buildDefaultButton = function(b) {
            var c = a("<button>").addClass("cl-bttn").attr("title", b.title).attr("data-cmd", b.cmd).attr("data-activeless", b.activeless);
            return this.addButtonIcon(c, b), c
        }, b.prototype.addButtonIcon = function(b, c) {
            b.append(c.icon ? a("<i>").addClass(c.icon) : c.icon_alt ? a("<i>").addClass("for-text").html(c.icon_alt) : c.title)
        }, b.prototype.buildDropdownButton = function(b, c) {
            c = c || "";
            var d = a("<div>").addClass("cl-bttn clump-dropdown").addClass(c),
                e = a("<button>").addClass("cl-trigger").attr("title", b.title);
            return this.addButtonIcon(e, b), d.append(e), d
        }, b.prototype.buildDropdownColor = function(b) {
            var c = a("<div>").addClass("clump-dropdown-menu");
            for (var d in b.seed) {
                var e = b.seed[d],
                    f = a("<div>").append(a("<p>").html(e.title));
                for (var g in e.value) {
                    var h = e.value[g];
                    f.append(a("<button>").addClass("clump-color-bttn").attr("data-cmd", e.cmd).attr("data-val", h).attr("data-activeless", b.activeless).css("background-color", h).html("&nbsp;")), g % 8 == 7 && g > 0 && (f.append("<hr/>"), (7 == g || 15 == g) && f.append(a("<div>").addClass("separator")))
                }
                c.append(f)
            }
            return c
        }, b.prototype.buildDropdownAlign = function(b) {
            var c = a("<ul>").addClass("clump-dropdown-menu");
            for (var d in b.seed) {
                var e = b.seed[d],
                    f = a("<li>").append(a("<button>").addClass("cl-bttn").attr("data-cmd", e.cmd).attr("title", e.title).attr("data-activeless", b.activeless).append(a("<i>").addClass(e.icon)));
                c.append(f)
            }
            return c
        }, b.prototype.buildDropdownFontsize = function(b) {
            var c = a("<ul>").addClass("clump-dropdown-menu f-font-sizes");
            for (var d in b.seed) for (var e = b.seed[d], f = e.min; f <= e.max; f++) {
                var g = a("<li>").attr("data-cmd", b.cmd).attr("data-val", f + "px").attr("data-activeless", b.activeless).append(a('<a href="#">').append(a("<span>").text(f + "px")));
                c.append(g)
            }
            return c
        }, b.prototype.buildDropdownFormatblock = function(b) {
            var c = a("<ul>").addClass("clump-dropdown-menu");
            for (var d in b.seed) {
                var e = b.seed[d];
                if ("n" == e.value || -1 != a.inArray(e.value, this.options.blockTags)) {
                    var f = a("<li>").append(a("<li>").attr("data-cmd", b.cmd).attr("data-val", e.value).attr("data-activeless", b.activeless).append(a('<a href="#">').addClass("format_" + e.value).attr("title", e.title).text(e.title)));
                    c.append(f)
                }
            }
            return c
        }, b.prototype.buildInsertImage = function() {
            this.$image_wrapper = a("<div>").addClass("image-wrapper"), this.$popup_editor.append(this.$image_wrapper);
            var b = this;
            this.$progress_bar = a('<p class="f-progress">').append("<span></span>");
            var c = a('<div class="f-upload">').append("<strong>Drop Image</strong><br>(or click)").append(a('<form method="post" enctype="multipart/form-data">').append(a('<input type="file" name="' + this.options.imageUploadParam + '" accept="image/*" />').change(function() {
                b.uploadFile(this.files)
            })));
            this.buildDragUpload(c);
            var d = a('<input type="text" placeholder="http://example.com"/>').on("mouseup touchend keydown", a.proxy(function(a) {
                a.stopPropagation()
            }, this));
            this.$image_list = a("<ul>").append(a('<li class="drop-upload">').append(c)).append(a('<li class="url-upload">').append("<label>Enter URL: </label>").append(d).append(a("<button>OK</button>").click(a.proxy(function() {
                this.writeImage(d.val())
            }, this)))), this.$image_wrapper.append(a("<h4>").text("Insert image").append(a('<i class="fa fa-times" title="Cancel">').click(a.proxy(function() {
                this.$bttn_wrapper.show(), this.$image_wrapper.hide(), this.restoreSelection(), this.options.inlineMode || this.imageMode ? this.imageMode && this.showImageEditor() : this.hide()
            }, this)))).append(this.$image_list).append(this.$progress_bar).click(function(a) {
                a.stopPropagation()
            }).find("*").click(function(a) {
                a.stopPropagation()
            }).end().hide()
        }, b.prototype.buildCreateLink = function() {
            this.$link_wrapper = a("<div>").addClass("link-wrapper"), this.$popup_editor.append(this.$link_wrapper);
            var b = a('<input type="text">').attr("placeholder", "http://www.example.com").on("mouseup touchend keydown", function(a) {
                    a.stopPropagation()
                }),
                c = a('<input type="checkbox" id="f-checkbox">').click(function(a) {
                    a.stopPropagation()
                }),
                d = a('<button type="button">').text("OK").on("touchend", function(a) {
                    a.stopPropagation()
                }).click(a.proxy(function() {
                    this.writeLink(b.val(), c.prop("checked"))
                }, this)),
                e = a('<button type="button" class="f-unlink">').text("UNLINK").on("click touch", a.proxy(function() {
                    this.link = !0, this.writeLink("", c.prop("checked"))
                }, this));
            this.$link_wrapper.append(a("<h4>").text("Insert link").append(a('<i class="fa fa-times" title="Cancel">').click(a.proxy(function() {
                this.$bttn_wrapper.show(), this.$link_wrapper.hide(), this.options.inlineMode || this.imageMode ? this.imageMode && this.showImageEditor() : this.hide(), this.restoreSelection()
            }, this)))).append(b).append(a("<p>").append(c).append(' <label for="f-checkbox">Open in new tab</label>').append(d).append(e)).end().hide()
        }, b.prototype.buildDragUpload = function(b) {
            var c = this;
            b.on({
                dragover: function() {
                    return a(this).addClass("f-hover"), !1
                },
                dragend: function() {
                    return a(this).removeClass("f-hover"), !1
                },
                drop: function(b) {
                    a(this).removeClass("f-hover"), b.preventDefault(), c.uploadFile(b.originalEvent.dataTransfer.files)
                }
            })
        }, b.prototype.writeImage = function(b) {
            if (this.imageMode) {
                var c = new Image;
                return this.options.imageErrorCallback && a.isFunction(this.options.imageErrorCallback) && (c.onerror = this.options.imageErrorCallback({
                    errorCode: 1,
                    errorStatus: "Bad link."
                })), c.onload = a.proxy(function() {
                    this.$element.find(".f-img-editor > img").attr("src", b), this.hide(), this.$progress_bar.hide(), this.$progress_bar.find("span").css("width", "0%").text(""), this.$image_list.show(), this.$image_editor.show(), this.saveUndoStep(), this.callback("replaceImage", {
                        imageURL: b
                    })
                }, this), c.src = b, !1
            }
            var d = this.getSelectionElements()[0],
                c = new Image;
            this.options.imageErrorCallback && a.isFunction(this.options.imageErrorCallback) && (c.onerror = this.options.imageErrorCallback({
                errorCode: 1,
                errorStatus: "Bad link."
            })), c.onload = a.proxy(function() {
                a(d).prepend('<img alt="Image title" src="' + b + '" width="200" style="float: left; min-width: 16px; min-height: 16px; margin-bottom: ' + this.options.imageMargin + "px; margin-right: " + this.options.imageMargin + 'px">'), a(d).find("img:first").get(0).oncontrolselect = function() {
                    return !1
                }, this.saveUndoStep(), this.hide(), this.$progress_bar.hide(), this.$progress_bar.find("span").css("width", "0%").text(""), this.$image_list.show(), this.callback("insertImage", {
                    imageURL: b
                })
            }, this), c.src = b
        }, b.prototype.uploadFile = function(b) {
            var c = this.drag_support.formdata ? new FormData : null;
            if (b.length > 0 && this.drag_support.formdata && c.append(this.options.imageUploadParam, b[0]), this.drag_support.formdata) {
                var d;
                this.options.crossDomain ? d = this.createCORSRequest("POST", this.options.imageUploadURL) : (d = new XMLHttpRequest, d.open("POST", this.options.imageUploadURL)), d.onload = a.proxy(function() {
                    this.$progress_bar.find("span").css("width", "100%").text("Please wait!");
                    var b = jQuery.parseJSON(d.responseText);
                    "http://uploads.im/api" == this.options.imageUploadURL ? 200 == b.status_code ? this.writeImage(b.data.img_url) : this.options.imageErrorCallback({
                        errorCode: 3,
                        errorStatus: "Error during file upload."
                    }) : b.link ? this.writeImage(b.link) : this.options.imageErrorCallback && a.isFunction(this.options.imageErrorCallback) && (img.onerror = this.options.imageErrorCallback({
                        errorCode: 2,
                        errorStatus: "No link in upload response."
                    }))
                }, this), d.onerror = a.proxy(function() {
                    this.options.imageErrorCallback && a.isFunction(this.options.imageErrorCallback) && (img.onerror = this.options.imageErrorCallback({
                        errorCode: 3,
                        errorStatus: "Error during file upload."
                    })), this.$progress_bar.hide(), this.$progress_bar.find("span").css("width", "0%").text(""), this.$image_list.show()
                }, this), d.upload.onprogress = a.proxy(function(a) {
                    if (a.lengthComputable) {
                        var b = a.loaded / a.total * 100 | 0;
                        this.$progress_bar.find("span").css("width", b + "%")
                    }
                }, this), d.send(c), this.$image_list.hide(), this.$progress_bar.show()
            }
        }, b.prototype.createCORSRequest = function(a, b) {
            var c = new XMLHttpRequest;
            return "withCredentials" in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null, c
        }, b.prototype.writeLink = function(b, c) {
            if (this.imageMode) return "" != b ? ("A" != this.$element.find(".f-img-editor").parent().get(0).tagName ? this.$element.find(".f-img-editor").wrap(1 == c ? '<a href="' + b + '" target="_blank"></a>' : '<a href="' + b + '"></a>') : 1 == c ? this.$element.find(".f-img-editor").parent().attr("target", "_blank") : (this.$element.find(".f-img-editor").parent().removeAttr("target"), this.$element.find(".f-img-editor").parent().attr("href", b)), this.callback("insertImageLink", {
                URL: b
            })) : ("A" == this.$element.find(".f-img-editor").parent().get(0).tagName && a(this.$element.find(".f-img-editor").get(0)).unwrap(), this.callback("removeImageLink")), this.saveUndoStep(), this.showImageEditor(), this.$element.find(".f-img-editor").find("img").click(), this.link = !1, !1;
            if (this.restoreSelection(), document.execCommand("unlink", !1, b), this.saveSelectionByMarkers(), this.$element.find("span.f-link").each(function(b, c) {
                a(c).replaceWith(a(c).html())
            }), this.restoreSelectionByMarkers(), "" != b) {
                document.execCommand("createLink", !1, b);
                for (var d = this.getSelectionLinks(), e = 0; e < d.length; e++) 1 == c && a(d[e]).attr("target", "_blank"), a(d[e]).addClass("f-link");
                this.$element.find("a:empty").remove(), this.callback("insertLink", {
                    URL: b
                })
            } else this.$element.find("a:empty").remove(), this.callback("removeLink");
            this.saveUndoStep(), this.$link_wrapper.hide(), this.$bttn_wrapper.show(), this.options.inlineMode || this.hide(), this.link = !1
        }, b.prototype.getSelectionLinks = function() {
            var a, b, c, d, e = [];
            if (window.getSelection) {
                var f = window.getSelection();
                if (f.getRangeAt && f.rangeCount) {
                    d = document.createRange();
                    for (var g = 0; g < f.rangeCount; ++g) if (a = f.getRangeAt(g), b = a.commonAncestorContainer, 1 != b.nodeType && (b = b.parentNode), "a" == b.nodeName.toLowerCase()) e.push(b);
                    else {
                        c = b.getElementsByTagName("a");
                        for (var h = 0; h < c.length; ++h) d.selectNodeContents(c[h]), d.compareBoundaryPoints(a.END_TO_START, a) < 1 && d.compareBoundaryPoints(a.START_TO_END, a) > -1 && e.push(c[h])
                    }
                    d.detach()
                }
            } else if (document.selection && "Control" != document.selection.type) if (a = document.selection.createRange(), b = a.parentElement(), "a" == b.nodeName.toLowerCase()) e.push(b);
            else {
                c = b.getElementsByTagName("a"), d = document.body.createTextRange();
                for (var h = 0; h < c.length; ++h) d.moveToElementText(c[h]), d.compareEndPoints("StartToEnd", a) > -1 && d.compareEndPoints("EndToStart", a) < 1 && e.push(c[h])
            }
            return e
        }, b.prototype.isEnabled = function(b) {
            return a.inArray(b, this.options.buttons) >= 0
        }, b.prototype.show = function(b) {
            if (this.options.inlineMode) if (null != b && "touchend" != b.type) {
                var c = b.pageX,
                    d = b.pageY;
                20 > c && (c = 20), 0 > d && (d = 0), c + this.$editor.width() > a(window).width() - 50 ? (this.$editor.addClass("right-side"), c = a(window).width() - (c + 30), this.$editor.css("top", d + 20), this.$editor.css("right", c), this.$editor.css("left", "auto")) : (this.$editor.removeClass("right-side"), this.$editor.css("top", d + 20), this.$editor.css("left", c - 20), this.$editor.css("right", "auto")), a(".froala-editor:not(.f-basic)").hide(), this.$editor.show()
            } else a(".froala-editor:not(.f-basic)").hide(), this.$editor.show(), this.repositionEditor();
            this.isEnabled("createLink") && this.$link_wrapper.hide(), this.isEnabled("insertImage") && this.$image_wrapper.hide(), this.$bttn_wrapper.show(), this.$bttn_wrapper.find(".clump-dropdown").removeClass("active"), this.refreshButtons(), this.imageMode = !1
        }, b.prototype.showByCoordinates = function(b, c) {
            b -= 20, c += 15, b + this.$popup_editor.width() > a(window).width() - 50 ? (this.$popup_editor.addClass("right-side"), b = a(window).width() - (b + 40), this.$popup_editor.css("top", c), this.$popup_editor.css("right", b), this.$popup_editor.css("left", "auto")) : (this.$popup_editor.removeClass("right-side"), this.$popup_editor.css("top", c), this.$popup_editor.css("left", b), this.$popup_editor.css("right", "auto")), this.$popup_editor.show()
        }, b.prototype.showInsertLink = function() {
            this.options.inlineMode && this.$bttn_wrapper.hide(), this.$link_wrapper.show(), this.$image_wrapper.hide(), this.$image_editor.hide(), this.link = !0
        }, b.prototype.showInsertImage = function() {
            this.options.inlineMode && this.$bttn_wrapper.hide(), this.$link_wrapper.hide(), this.$image_wrapper.show(), this.$image_editor.hide()
        }, b.prototype.showImageEditor = function() {
            this.options.inlineMode && this.$bttn_wrapper.hide(), this.$link_wrapper.hide(), this.$image_wrapper.hide(), this.$image_editor.show(), this.$element.attr("contenteditable", !1)
        }, b.prototype.hide = function() {
            this.$popup_editor.hide(), this.$link_wrapper.hide(), this.$image_wrapper.hide(), this.$image_editor.hide(), this.link = !1
        }, b.prototype.positionPopup = function(a) {
            this.$popup_editor.css("top", this.$editor.find('button.cl-bttn[data-cmd="' + a + '"]').offset().top + 30), this.$popup_editor.css("left", this.$editor.find('button.cl-bttn[data-cmd="' + a + '"]').offset().left), this.$popup_editor.show()
        }, b.prototype.bindButtonEvents = function() {
            this.bindDropdownEvents(), this.bindCommandEvents()
        }, b.prototype.bindDropdownEvents = function() {
            this.$bttn_wrapper.find(".clump-dropdown .cl-trigger").on("click touchend", function(b) {
                return b.stopPropagation(), b.preventDefault(), a(this).parents(".clump-dropdown").attr("data-disabled") ? !1 : (a(".clump-dropdown").not(a(this).parents(".clump-dropdown")).removeClass("active"), void a(this).parents(".clump-dropdown").toggleClass("active"))
            }), a(window).on("click touchend", a.proxy(function() {
                this.$editor.find(".clump-dropdown").removeClass("active")
            }, this));
            var b = this.$bttn_wrapper.find(".clump-selector button.cl-bttn");
            b.bind("select", function() {
                a(this).parents(".clump-selector").find(" > button > i").attr("class", a(this).find("i").attr("class"))
            }).on("click touch", function() {
                a(this).parents("ul").find("button").removeClass("active"), a(this).trigger("select")
            })
        }, b.prototype.bindCommandEvents = function() {
            this.$bttn_wrapper.find("[data-cmd]").on("click touchend", a.proxy(function(b) {
                b.stopPropagation(), b.preventDefault();
                var c = b.currentTarget,
                    d = a(c).data("cmd"),
                    e = a(c).data("val");
                a(c).parents(".clump-dropdown").removeClass("active"), this.exec(d, e)
            }, this))
        }, b.prototype.exec = function(a, b) {
            if (!this.selectionInEditor() && "html" != a && "undo" != a && "redo" != a && "selectAll" != a) return !1;
            if (this.selectionInEditor() && "" == this.text() && "fontSize" != a && "formatBlock" != a && "indent" != a && "outdent" != a && "justifyLeft" != a && "justifyRight" != a && "justifyFull" != a && "justifyCenter" != a && "html" != a && "undo" != a && "redo" != a && "selectAll" != a && "insertImage" != a) return !1;
            switch (a) {
                case "fontSize":
                    this.fontSize(b);
                    break;
                case "backColor":
                    this.backColor(b);
                    break;
                case "foreColor":
                    this.foreColor(b);
                    break;
                case "formatBlock":
                    this.formatBlock(b);
                    break;
                case "createLink":
                    this.insertLink();
                    break;
                case "insertImage":
                    this.insertImage();
                    break;
                case "indent":
                    this.indent();
                    break;
                case "outdent":
                    this.outdent(!0);
                    break;
                case "justifyLeft":
                case "justifyRight":
                case "justifyCenter":
                case "justifyFull":
                    this.align(a);
                    break;
                case "insertOrderedList":
                case "insertUnorderedList":
                    this.formatList(a);
                    break;
                case "indent":
                case "outdent":
                    this.execDefault(a, b), this.repositionEditor();
                    break;
                case "undo":
                    this.undo();
                    break;
                case "redo":
                    this.redo();
                    break;
                case "html":
                    this.html();
                    break;
                case "selectAll":
                    this.$element.focus(), this.execDefault(a, b);
                    break;
                default:
                    this.execDefault(a, b)
            }
            "undo" != a && "redo" != a && "selectAll" != a && "createLink" != a && "insertImage" != a && "html" != a && this.saveUndoStep(), "createLink" != a && "insertImage" != a && this.refreshButtons()
        }, b.prototype.undo = function() {
            if (this.undoIndex > 1) {
                var a = this.$element.html();
                this.$element.html(this.undoStack[--this.undoIndex - 1]), this.hide(), this.callback("undo", {
                    newHTML: this.$element.html(),
                    oldHTML: a
                })
            }
            this.refreshUndoRedo()
        }, b.prototype.redo = function() {
            if (this.undoIndex < this.undoStack.length) {
                var a = this.$element.html();
                this.$element.html(this.undoStack[this.undoIndex++]), this.hide(), this.callback("redo", {
                    newHTML: this.$element.html(),
                    oldHTML: a
                })
            }
            this.refreshUndoRedo()
        }, b.prototype.save = function() {
            this.options.saveURL ? (this.callback("beforeSave"), a.post(this.options.saveURL, {
                body: this.getHTML()
            }, a.proxy(function(a) {
                this.callback("afterSave", a)
            }, this))) : console.log("Save URL missing.")
        }, b.prototype.clean = function() {
            this.$element.html(a.htmlClean(this.$element.html(), {
                format: !0
            }))
        }, b.prototype.html = function() {
            if (this.isHTML) {
                this.isHTML = !1;
                var b = a.htmlClean(this.$html_area.val(), {
                    format: !0
                });
                this.$element.html(b).attr("contenteditable", !0), this.$box.removeClass("f-html"), this.$editor.find('.cl-bttn:not([data-cmd="html"])').prop("disabled", !1), this.$editor.find("div.cl-bttn").removeAttr("data-disabled"), this.$editor.find('.cl-bttn[data-cmd="html"]').removeClass("active"), this.saveUndoStep(), this.callback("htmlHide", {
                    html: b
                })
            } else {
                this.isHTML = !0;
                var b = "\n\n" + a.htmlClean(this.$element.html(), {
                    format: !0
                });
                this.$html_area.val(b).trigger("resize"), this.options.inlineMode && this.$box.find(".html-switch").css("top", this.$box.css("padding-top")), this.$html_area.css("height", this.$element.height() + 20), this.$element.html(this.$html_area).removeAttr("contenteditable"), this.$box.addClass("f-html"), this.$editor.find('button.cl-bttn:not([data-cmd="html"])').prop("disabled", !0), this.$editor.find("div.cl-bttn").attr("data-disabled", !0), this.$editor.find('.cl-bttn[data-cmd="html"]').addClass("active"), this.options.inlineMode && this.hide(), this.callback("htmlShow", {
                    html: b
                })
            }
        }, b.prototype.fontSize = function(b) {
            document.execCommand("fontSize", !1, 1), this.saveSelectionByMarkers();
            var c = [];
            this.$element.find("font").each(function(d, e) {
                var f = a("<span>").css("font-size", b).html(a(e).html());
                0 == a(e).parents("font").length && c.push(f), a(e).replaceWith(f)
            });
            for (var d in c) {
                var e = c[d];
                a(e).find("*").each(function(c, d) {
                    a(d).css("font-size", b)
                })
            }
            this.restoreSelectionByMarkers(), this.repositionEditor(), this.callback("fontSize")
        }, b.prototype.backColor = function(c) {
            var d = "backColor";
            this.browser.msie || (d = "hiliteColor");
            var e = a(this.getSelectionElement()).css("background-color");
            document.execCommand(d, !1, c);
            var f = this.$editor.find('button.clump-color-bttn[data-cmd="backColor"][data-val="' + c + '"]');
            f.addClass("active"), f.siblings().removeClass("active"), this.callback("backColor", {
                newColor: b.hexToRGBString(c),
                oldColor: e
            })
        }, b.prototype.foreColor = function(c) {
            var d = a(this.getSelectionElement()).css("color");
            document.execCommand("foreColor", !1, c), this.saveSelectionByMarkers(), this.$element.find("font[color]").each(function(b, d) {
                a(d).replaceWith(a("<span>").css("color", c).html(a(d).html()))
            }), this.restoreSelectionByMarkers();
            var e = this.$editor.find('button.clump-color-bttn[data-cmd="foreColor"][data-val="' + c + '"]');
            e.addClass("active"), e.siblings().removeClass("active"), this.callback("foreColor", {
                newColor: b.hexToRGBString(c),
                oldColor: d
            })
        }, b.prototype.formatBlock = function(b) {
            if (this.disabledList.indexOf("formatBlock") >= 0) return !1;
            this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
            var c = this.getSelectionElements();
            for (var d in c) {
                var e = a(c[d]);
                if ("n" == b) var f = a("<div>").html(e.html());
                else var f = a("<" + b + ">").html(e.html());
                if (e.get(0) != this.$element.get(0) && "LI" != e.get(0).tagName) {
                    var g = e.prop("attributes");
                    f.attr && a.each(g, function() {
                        f.attr(this.name, this.value)
                    }), e.replaceWith(f)
                } else e.html(f)
            }
            this.clearSelection(), this.hide(), this.callback("formatBlock")
        }, b.prototype.formatList = function(b) {
            this.saveSelectionByMarkers();
            var c = this.getSelectionElements();
            c[0] == this.$element.get(0);
            var d = !0,
                e = !1;
            for (var f in c) {
                var g = a(c[f]);
                g.parents("li").length > 0 ? (g.parents("ol").length > 0 ? (g.parents("li").before('<span class="close-ol"></span>'), g.parents("li").after('<span class="open-ol"></span>')) : g.parents("ul").length > 0 && (g.parents("li").before('<span class="close-ul"></span>'), g.parents("li").after('<span class="open-ul"></span>')), g.parents("li").replaceWith(g.parents("li").contents()), e = !0) : d = !1
            }
            if (e) {
                var h = this.$element.html();
                h = h.replace(new RegExp('<span class="close-ul"></span>', "g"), "</ul>"), h = h.replace(new RegExp('<span class="open-ul"></span>', "g"), "<ul>"), h = h.replace(new RegExp('<span class="close-ol"></span>', "g"), "</ol>"), h = h.replace(new RegExp('<span class="open-ol"></span>', "g"), "<ol>"), this.$element.html(h), this.$element.find("ul:empty, ol:empty").remove()
            }
            if (this.clearSelection(), this.wrapText(), this.restoreSelectionByMarkers(), 0 == d) {
                var c = this.getSelectionElements();
                c[0] == this.$element.get(0), this.saveSelectionByMarkers();
                var i = a("<ol>");
                "insertUnorderedList" == b && (i = a("<ul>"));
                for (var f in c) {
                    var g = a(c[f]);
                    g.get(0) != this.$element.get(0) && (i.append(a("<li>").append(g.clone())), f != c.length - 1 ? g.remove() : g.replaceWith(i))
                }
                this.restoreSelectionByMarkers()
            }
            this.repositionEditor(), this.callback(b)
        }, b.prototype.align = function(b) {
            var c = this.getSelectionElements();
            this.saveSelection(), "justifyLeft" == b ? b = "left" : "justifyRight" == b ? b = "right" : "justifyCenter" == b ? b = "center" : "justifyFull" == b && (b = "justify");
            for (var d in c) a(c[d]).css("text-align", b);
            this.restoreSelection(), this.repositionEditor(), this.callback("align")
        }, b.prototype.indent = function(b) {
            var c = 20;
            b && (c = -20), this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
            var d = this.getSelectionElements();
            this.saveSelectionByMarkers();
            for (var e in d) {
                var f = a(d[e]);
                if (f.get(0) != this.$element.get(0)) {
                    var g = parseInt(f.css("margin-left").replace(/px/, "")),
                        h = Math.max(0, g + c);
                    f.css("marginLeft", h)
                } else {
                    var i = a("<div>").html(f.html());
                    f.html(i), i.css("marginLeft", Math.max(0, c))
                }
            }
            this.restoreSelectionByMarkers(), this.repositionEditor(), b || this.callback("indent")
        }, b.prototype.outdent = function() {
            this.indent(!0), this.callback("outdent")
        }, b.prototype.insertLink = function() {
            this.showInsertLink(), this.options.inlineMode || this.positionPopup("createLink"), this.saveSelection();
            var b = this.getSelectionLink(),
                c = this.getSelectionLinks();
            c.length > 0 && this.$link_wrapper.find('input[type="checkbox"]').prop("checked", "_blank" == a(c[0]).attr("target")), this.$link_wrapper.find('input[type="text"]').val(b || "http://")
        }, b.prototype.insertImage = function() {
            this.showInsertImage(), this.saveSelection(), this.options.inlineMode || this.positionPopup("insertImage"), this.$image_wrapper.find('input[type="text"]').val("")
        }, b.prototype.execDefault = function(a, b) {
            document.execCommand(a, !1, b), "insertOrderedList" == a ? this.$bttn_wrapper.find('[data-cmd="insertUnorderedList"]').removeClass("active") : "insertUnorderedList" == a && this.$bttn_wrapper.find('[data-cmd="insertOrderedList"]').removeClass("active"), this.callback(a)
        }, b.prototype.refreshButtons = function() {
            return !this.selectionInEditor() || this.isHTML ? !1 : (this.refreshUndoRedo(), void this.$bttn_wrapper.find("[data-cmd]").each(a.proxy(function(b, c) {
                switch (a(c).data("cmd")) {
                    case "fontSize":
                        this.refreshFontSize(c);
                        break;
                    case "backColor":
                        this.refreshBackColor(c);
                        break;
                    case "foreColor":
                        this.refreshForeColor(c);
                        break;
                    case "formatBlock":
                        this.refreshFormatBlock(c);
                        break;
                    case "createLink":
                    case "insertImage":
                        break;
                    case "justifyLeft":
                    case "justifyRight":
                    case "justifyCenter":
                    case "justifyFull":
                        this.refreshAlign(c);
                        break;
                    case "html":
                        this.isHTML ? a(c).addClass("active") : a(c).removeClass("active");
                        break;
                    case "undo":
                    case "redo":
                        break;
                    default:
                        this.refreshDefault(c)
                }
            }, this)))
        }, b.prototype.refreshFormatBlock = function(b) {
            this.disabledList.indexOf("formatBlock") >= 0 && a(b).parents(".clump-dropdown").attr("data-disabled", !0)
        }, b.prototype.refreshUndoRedo = function() {
            if (this.isEnabled("undo") || this.isEnabled("redo")) {
                if (void 0 == this.$editor) return;
                this.$bttn_wrapper.find('[data-cmd="undo"], [data-cmd="redo"]').prop("disabled", !1), (0 == this.undoStack.length || this.undoIndex <= 1 || this.isHTML) && this.$bttn_wrapper.find('[data-cmd="undo"]').prop("disabled", !0), (this.undoIndex == this.undoStack.length || this.isHTML) && this.$bttn_wrapper.find('[data-cmd="redo"]').prop("disabled", !0)
            }
        }, b.prototype.refreshDefault = function(b) {
            a(b).removeClass("active"), 1 == document.queryCommandState(a(b).data("cmd")) && a(b).addClass("active")
        }, b.prototype.refreshAlign = function(b) {
            var c = a(b).data("cmd"),
                d = this.getSelectionElements();
            "justifyLeft" == c ? c = "left" : "justifyRight" == c ? c = "right" : "justifyCenter" == c ? c = "center" : "justifyFull" == c && (c = "justify"), c == a(d[0]).css("text-align") && (a(b).parents("ul").find(".cl-bttn").removeClass("active"), a(b).addClass("active"), a(b).parents(".clump-dropdown").find(".cl-trigger").html(a(b).html()))
        }, b.prototype.refreshForeColor = function(b) {
            a(b).removeClass("active"), document.queryCommandValue("foreColor") == b.style.backgroundColor && a(b).addClass("active")
        }, b.prototype.refreshBackColor = function(b) {
            a(b).removeClass("active"), document.queryCommandValue("backColor") == b.style.backgroundColor && a(b).addClass("active")
        }, b.prototype.refreshFontSize = function(b) {
            a(b).removeClass("active"), parseInt(document.queryCommandValue("fontSize")) == parseInt(a(b).data("val")) && a(b).addClass("active")
        }, b.prototype.option = function(b, c) {
            if (void 0 == b) return this.options;
            if (b instanceof Object) this.options = a.extend({}, this.options, b), this.setBorderColor(), this.setDirection(), this.setDimensions(), this.setSpellcheck();
            else {
                if (void 0 == c) return this.options[b];
                switch (this.options[b] = c, b) {
                    case "borderColor":
                        this.setBorderColor();
                        break;
                    case "direction":
                        this.setDirection();
                        break;
                    case "height":
                    case "width":
                        this.setDimensions();
                        break;
                    case "spellcheck":
                        this.setSpellcheck()
                }
            }
        };
        var c = a.fn.editable;
        a.fn.editable = function(c) {
            var d = [];
            for (var e in arguments) d.push(arguments[e]);
            if (a("html").data("editable") || a("html").on("click", function() {}), a("html").data("editable", !0), "string" == typeof c) {
                var f = [];
                return this.each(function() {
                    var e = a(this),
                        g = e.data("fa.editable");
                    g || e.data("fa.editable", g = new b(this, c));
                    var h = g[c].apply(g, d.slice(1));
                    f.push(h || this)
                }), f
            }
            return this.each(function() {
                var d = a(this),
                    e = d.data("fa.editable");
                e || d.data("fa.editable", e = new b(this, c))
            })
        }, a.fn.editable.Constructor = b, a.fn.editable.noConflict = function() {
            return a.fn.editable = c, this
        }
    }(window.jQuery), +
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a, b) {
        function c(a) {
            function b() {
                d ? (c(), M(b), e = !0, d = !1) : e = !1
            }

            var c = a,
                d = !1,
                e = !1;
            this.kick = function() {
                d = !0, e || b()
            }, this.end = function(a) {
                var b = c;
                a && (e ? (c = d ?
                    function() {
                        b(), a()
                    } : a, d = !0) : a())
            }
        }

        function d() {
            return !0
        }

        function e() {
            return !1
        }

        function f(a) {
            a.preventDefault()
        }

        function g(a) {
            N[a.target.tagName.toLowerCase()] || a.preventDefault()
        }

        function h(a) {
            return 1 === a.which && !a.ctrlKey && !a.altKey
        }

        function i(a, b) {
            var c, d;
            if (a.identifiedTouch) return a.identifiedTouch(b);
            for (c = -1, d = a.length; ++c < d;) if (a[c].identifier === b) return a[c]
        }

        function j(a, b) {
            var c = i(a.changedTouches, b.identifier);
            if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c
        }

        function k(a) {
            var b;
            h(a) && (b = {
                target: a.target,
                startX: a.pageX,
                startY: a.pageY,
                timeStamp: a.timeStamp
            }, J(document, O.move, l, b), J(document, O.cancel, m, b))
        }

        function l(a) {
            var b = a.data;
            s(a, b, a, n)
        }

        function m() {
            n()
        }

        function n() {
            K(document, O.move, l), K(document, O.cancel, m)
        }

        function o(a) {
            var b, c;
            N[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0], c = {
                target: b.target,
                startX: b.pageX,
                startY: b.pageY,
                timeStamp: a.timeStamp,
                identifier: b.identifier
            }, J(document, P.move + "." + b.identifier, p, c), J(document, P.cancel + "." + b.identifier, q, c))
        }

        function p(a) {
            var b = a.data,
                c = j(a, b);
            c && s(a, b, c, r)
        }

        function q(a) {
            var b = a.data,
                c = i(a.changedTouches, b.identifier);
            c && r(b.identifier)
        }

        function r(a) {
            K(document, "." + a, p), K(document, "." + a, q)
        }

        function s(a, b, c, d) {
            var e = c.pageX - b.startX,
                f = c.pageY - b.startY;
            I * I > e * e + f * f || v(a, b, c, e, f, d)
        }

        function t() {
            return this._handled = d, !1
        }

        function u(a) {
            a._handled()
        }

        function v(a, b, c, d, e, f) {
            {
                var g, h;
                b.target
            }
            g = a.targetTouches, h = a.timeStamp - b.timeStamp, b.type = "movestart", b.distX = d, b.distY = e, b.deltaX = d, b.deltaY = e, b.pageX = c.pageX, b.pageY = c.pageY, b.velocityX = d / h, b.velocityY = e / h, b.targetTouches = g, b.finger = g ? g.length : 1, b._handled = t, b._preventTouchmoveDefault = function() {
                a.preventDefault()
            }, L(b.target, b), f(b.identifier)
        }

        function w(a) {
            var b = a.data.timer;
            a.data.touch = a, a.data.timeStamp = a.timeStamp, b.kick()
        }

        function x(a) {
            var b = a.data.event,
                c = a.data.timer;
            y(), D(b, c, function() {
                setTimeout(function() {
                    K(b.target, "click", e)
                }, 0)
            })
        }

        function y() {
            K(document, O.move, w), K(document, O.end, x)
        }

        function z(a) {
            var b = a.data.event,
                c = a.data.timer,
                d = j(a, b);
            d && (a.preventDefault(), b.targetTouches = a.targetTouches, a.data.touch = d, a.data.timeStamp = a.timeStamp, c.kick())
        }

        function A(a) {
            var b = a.data.event,
                c = a.data.timer,
                d = i(a.changedTouches, b.identifier);
            d && (B(b), D(b, c))
        }

        function B(a) {
            K(document, "." + a.identifier, z), K(document, "." + a.identifier, A)
        }

        function C(a, b, c) {
            var d = c - a.timeStamp;
            a.type = "move", a.distX = b.pageX - a.startX, a.distY = b.pageY - a.startY, a.deltaX = b.pageX - a.pageX, a.deltaY = b.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / d, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / d, a.pageX = b.pageX, a.pageY = b.pageY
        }

        function D(a, b, c) {
            b.end(function() {
                return a.type = "moveend", L(a.target, a), c && c()
            })
        }

        function E() {
            return J(this, "movestart.move", u), !0
        }

        function F() {
            return K(this, "dragstart drag", f), K(this, "mousedown touchstart", g), K(this, "movestart", u), !0
        }

        function G(a) {
            "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector), J(this, "mousedown." + a.guid, g, b, a.selector))
        }

        function H(a) {
            "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid), K(this, "mousedown." + a.guid))
        }

        var I = 6,
            J = a.event.add,
            K = a.event.remove,
            L = function(b, c, d) {
                a.event.trigger(c, d, b)
            },
            M = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                    function(a) {
                        return window.setTimeout(function() {
                            a()
                        }, 25)
                    }
            }(),
            N = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            O = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            P = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        a.event.special.movestart = {
            setup: E,
            teardown: F,
            add: G,
            remove: H,
            _default: function(a) {
                function d() {
                    C(f, g.touch, g.timeStamp), L(a.target, f)
                }

                var f, g;
                a._handled() && (f = {
                    target: a.target,
                    startX: a.startX,
                    startY: a.startY,
                    pageX: a.pageX,
                    pageY: a.pageY,
                    distX: a.distX,
                    distY: a.distY,
                    deltaX: a.deltaX,
                    deltaY: a.deltaY,
                    velocityX: a.velocityX,
                    velocityY: a.velocityY,
                    timeStamp: a.timeStamp,
                    identifier: a.identifier,
                    targetTouches: a.targetTouches,
                    finger: a.finger
                }, g = {
                    event: f,
                    timer: new c(d),
                    touch: b,
                    timeStamp: b
                }, a.identifier === b ? (J(a.target, "click", e), J(document, O.move, w, g), J(document, O.end, x, g)) : (a._preventTouchmoveDefault(), J(document, P.move + "." + a.identifier, z, g), J(document, P.end + "." + a.identifier, A, g)))
            }
        }, a.event.special.move = {
            setup: function() {
                J(this, "movestart.move", a.noop)
            },
            teardown: function() {
                K(this, "movestart.move", a.noop)
            }
        }, a.event.special.moveend = {
            setup: function() {
                J(this, "movestart.moveend", a.noop)
            },
            teardown: function() {
                K(this, "movestart.moveend", a.noop)
            }
        }, J(document, "mousedown.move", k), J(document, "touchstart.move", o), "function" == typeof Array.prototype.indexOf && !
            function(a) {
                for (var b = ["changedTouches", "targetTouches"], c = b.length; c--;) - 1 === a.event.props.indexOf(b[c]) && a.event.props.push(b[c])
            }(a)
    }), +
    function(a) {
        function b(a, b, c, d) {
            if (a.tag.format && c.length > 0) {
                c.push("\n");
                for (var e = 0; d > e; e++) c.push("	")
            }
        }

        function c(d, e) {
            var f = [],
                g = 0 == d.attributes.length,
                h = 0;
            if (d.tag.isComment) e.allowComments && (f.push("<!--"), f.push(d.tag.rawAttributes), f.push(">"), e.format && b(d, e, f, h - 1));
            else {
                var i = d.tag.render && (0 == e.allowedTags.length || a.inArray(d.tag.name, e.allowedTags) > -1) && (0 == e.removeTags.length || -1 == a.inArray(d.tag.name, e.removeTags));
                if (!d.isRoot && i && (f.push("<"), f.push(d.tag.name), a.each(d.attributes, function() {
                    if (-1 == a.inArray(this.name, e.removeAttrs)) {
                        var b = RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value),
                            c = b[2],
                            g = b[1] || "'";
                        "class" == this.name && e.allowedClasses.length > 0 && (c = a.grep(c.split(" "), function(b) {
                            return a.grep(e.allowedClasses, function(c) {
                                return c == b || c[0] == b && (1 == c.length || a.inArray(d.tag.name, c[1]) > -1)
                            }).length > 0
                        }).join(" ")), null != c && (c.length > 0 || a.inArray(this.name, d.tag.requiredAttributes) > -1) && (f.push(" "), f.push(this.name), f.push("="), f.push(g), f.push(c), f.push(g))
                    }
                })), d.tag.isSelfClosing) i && f.push(" />"), g = !1;
                else if (d.tag.isNonClosing) g = !1;
                else {
                    if (!d.isRoot && i && f.push(">"), h = e.formatIndent++, d.tag.toProtect) n = a.htmlClean.trim(d.children.join("")).replace(/<br>/gi, "\n"), f.push(n), g = 0 == n.length;
                    else {
                        for (var n = [], p = 0; p < d.children.length; p++) {
                            var q = d.children[p],
                                r = a.htmlClean.trim(o(l(q) ? q : q.childrenToString()));
                            m(q) && p > 0 && r.length > 0 && (j(q) || k(d.children[p - 1])) && n.push(" "), l(q) ? r.length > 0 && n.push(r) : (p != d.children.length - 1 || "br" != q.tag.name) && (e.format && b(q, e, n, h), n = n.concat(c(q, e)))
                        }
                        e.formatIndent--, n.length > 0 && (e.format && "\n" != n[0] && b(d, e, f, h), f = f.concat(n), g = !1)
                    }!d.isRoot && i && (e.format && b(d, e, f, h - 1), f.push("</"), f.push(d.tag.name), f.push(">"))
                }
                if (!d.tag.allowEmpty && g) return []
            }
            return f
        }

        function d(b, c) {
            return f(b, function(b) {
                return a.inArray(b.tag.nameOriginal, c) > -1
            })
        }

        function e(a) {
            return f(a, function(a) {
                return a.isRoot || !a.tag.isInline
            })
        }

        function f(a, b, c) {
            c = c || 1;
            var d = a[a.length - c];
            return b(d) ? !0 : a.length - c > 0 && f(a, b, c + 1) ? (a.pop(), !0) : !1
        }

        function g(a) {
            return a ? (this.tag = a, this.isRoot = !1) : (this.tag = new i("root"), this.isRoot = !0), this.attributes = [], this.children = [], this.hasAttribute = function(a) {
                for (var b = 0; b < this.attributes.length; b++) if (this.attributes[b].name == a) return !0;
                return !1
            }, this.childrenToString = function() {
                return this.children.join("")
            }, this
        }

        function h(a, b) {
            return this.name = a, this.value = b, this
        }

        function i(b, c, d, e) {
            return this.name = b.toLowerCase(), this.nameOriginal = this.name, this.render = !0, this.init = function() {
                if ("--" == this.name ? (this.isComment = !0, this.isSelfClosing = !0, this.format = !0) : (this.isComment = !1, this.isSelfClosing = a.inArray(this.name, v) > -1, this.isNonClosing = a.inArray(this.name, w) > -1, this.isClosing = void 0 != c && c.length > 0, this.isInline = a.inArray(this.name, p) > -1, this.disallowNest = a.inArray(this.name, r) > -1, this.requiredParent = t[a.inArray(this.name, t) + 1], this.allowEmpty = e && a.inArray(this.name, e.allowEmpty) > -1, this.toProtect = a.inArray(this.name, u) > -1, this.format = a.inArray(this.name, q) > -1 || !this.isInline), this.rawAttributes = d, this.requiredAttributes = y[a.inArray(this.name, y) + 1], e) {
                    if (e.tagAttributesCache || (e.tagAttributesCache = []), -1 == a.inArray(this.name, e.tagAttributesCache)) {
                        for (var b = x[a.inArray(this.name, x) + 1].slice(0), f = 0; f < e.allowedAttributes.length; f++) {
                            var g = e.allowedAttributes[f][0];
                            (1 == e.allowedAttributes[f].length || a.inArray(this.name, e.allowedAttributes[f][1]) > -1) && -1 == a.inArray(g, b) && b.push(g)
                        }
                        e.tagAttributesCache.push(this.name), e.tagAttributesCache.push(b)
                    }
                    this.allowedAttributes = e.tagAttributesCache[a.inArray(this.name, e.tagAttributesCache) + 1]
                }
            }, this.init(), this.rename = function(a) {
                this.name = a, this.init()
            }, this
        }

        function j(b) {
            for (; n(b) && b.children.length > 0;) b = b.children[0];
            if (!l(b)) return !1;
            var c = o(b);
            return c.length > 0 && a.htmlClean.isWhitespace(c.charAt(0))
        }

        function k(b) {
            for (; n(b) && b.children.length > 0;) b = b.children[b.children.length - 1];
            if (!l(b)) return !1;
            var c = o(b);
            return c.length > 0 && a.htmlClean.isWhitespace(c.charAt(c.length - 1))
        }

        function l(a) {
            return a.constructor == String
        }

        function m(a) {
            return l(a) || a.tag.isInline
        }

        function n(a) {
            return a.constructor == g
        }

        function o(a) {
            return a.replace(/\n/g, " ").replace(/\s\s+/g, " ")
        }

        a.fn.htmlClean = function(b) {
            return this.each(function() {
                this.value ? this.value = a.htmlClean(this.value, b) : this.innerHTML = a.htmlClean(this.innerHTML, b)
            })
        }, a.htmlClean = function(b, f) {
            f = a.extend({}, a.htmlClean.defaults, f), f.allowEmpty = s.concat(f.allowEmpty);
            var j, k = /(<(\/)?(\w+:)?([\w]+)([^>]*)>)|<!--(.*?--)>/gi,
                m = /([\w\-]+)\s*=\s*(".*?"|'.*?'|[^\s>\/]*)/gi,
                n = new g,
                o = [n],
                p = n;
            f.bodyOnly && (j = /<body[^>]*>((\n|.)*)<\/body>/i.exec(b)) && (b = j[1]), b = b.concat("<xxx>");
            for (var q; j = k.exec(b);) {
                var r = j[6] ? new i("--", null, j[6], f) : new i(j[4], j[2], j[5], f),
                    t = b.substring(q, j.index);
                if (t.length > 0) {
                    var u = p.children[p.children.length - 1];
                    p.children.length > 0 && l(u = p.children[p.children.length - 1]) ? p.children[p.children.length - 1] = u.concat(t) : p.children.push(t)
                }
                if (q = k.lastIndex, r.isClosing) d(o, [r.name]) && (o.pop(), p = o[o.length - 1]);
                else {
                    for (var v, w = new g(r); v = m.exec(r.rawAttributes);) {
                        if ("style" == v[1].toLowerCase() && f.replaceStyles) for (var x = !r.isInline, y = 0; y < f.replaceStyles.length; y++) f.replaceStyles[y][0].test(v[2]) && (x || (r.render = !1, x = !0), p.children.push(w), o.push(w), p = w, r = new i(f.replaceStyles[y][1], "", "", f), w = new g(r));
                        null != r.allowedAttributes && (0 == r.allowedAttributes.length || a.inArray(v[1], r.allowedAttributes) > -1) && w.attributes.push(new h(v[1], v[2]))
                    }
                    a.each(r.requiredAttributes, function() {
                        var a = this.toString();
                        w.hasAttribute(a) || w.attributes.push(new h(a, ""))
                    });
                    for (var z = 0; z < f.replace.length; z++) for (var A = 0; A < f.replace[z][0].length; A++) {
                        var B = "string" == typeof f.replace[z][0][A];
                        if (B && f.replace[z][0][A] == r.name || !B && f.replace[z][0][A].test(j)) {
                            r.rename(f.replace[z][1]), z = f.replace.length;
                            break
                        }
                    }
                    var C = !0;
                    if (p.isRoot || (p.tag.isInline && !r.isInline ? (C = e(o)) && (p = o[o.length - 1]) : p.tag.disallowNest && r.disallowNest && !r.requiredParent ? C = !1 : r.requiredParent && (C = d(o, r.requiredParent)) && (p = o[o.length - 1])), C) if (p.children.push(w), r.toProtect) for (var D; D = k.exec(b);) {
                        var E = new i(D[4], D[1], D[5], f);
                        if (E.isClosing && E.name == r.name) {
                            w.children.push(RegExp.leftContext.substring(q)), q = k.lastIndex;
                            break
                        }
                    } else r.isSelfClosing || r.isNonClosing || (o.push(w), p = w)
                }
            }
            return a.htmlClean.trim(c(n, f).join(""))
        }, a.htmlClean.defaults = {
            bodyOnly: !0,
            allowedTags: [],
            removeTags: ["basefont", "center", "dir", "frame", "frameset", "iframe", "isindex", "menu", "noframes"],
            allowedAttributes: [
                ["id"],
                ["class"],
                ["style"],
                ["size"],
                ["color"]
            ],
            removeAttrs: [],
            allowedClasses: [],
            format: !1,
            formatIndent: 0,
            replace: [],
            replaceStyles: [],
            allowComments: !0,
            allowEmpty: []
        }, a.htmlClean.trim = function(b) {
            return a.htmlClean.trimStart(a.htmlClean.trimEnd(b))
        }, a.htmlClean.trimStart = function(b) {
            return b.substring(a.htmlClean.trimStartIndex(b))
        }, a.htmlClean.trimStartIndex = function(b) {
            for (var c = 0; c < b.length - 1 && a.htmlClean.isWhitespace(b.charAt(c)); c++);
            return c
        }, a.htmlClean.trimEnd = function(b) {
            return b.substring(0, a.htmlClean.trimEndIndex(b))
        }, a.htmlClean.trimEndIndex = function(b) {
            for (var c = b.length - 1; c >= 0 && a.htmlClean.isWhitespace(b.charAt(c)); c--);
            return c + 1
        }, a.htmlClean.isWhitespace = function(b) {
            return -1 != a.inArray(b, z)
        };
        var p = ["a", "abbr", "acronym", "address", "b", "big", "br", "button", "caption", "cite", "code", "del", "em", "font", "hr", "i", "input", "img", "ins", "label", "legend", "map", "q", "s", "samp", "select", "option", "param", "small", "span", "strike", "strong", "sub", "sup", "tt", "u", "var"],
            q = ["address", "button", "caption", "code", "input", "label", "legend", "select", "option", "param"],
            r = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "th", "td", "object"],
            s = ["th", "td"],
            t = [null, "li", ["ul", "ol"], "dt", ["dl"], "dd", ["dl"], "td", ["tr"], "th", ["tr"], "tr", ["table", "thead", "tbody", "tfoot"], "thead", ["table"], "tbody", ["table"], "tfoot", ["table"], "param", ["object"]],
            u = ["script", "style", "pre", "code"],
            v = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
            w = ["!doctype", "?xml"],
            x = [
                ["class"], "?xml", [], "!doctype", [], "a", ["accesskey", "class", "href", "name", "title", "rel", "rev", "type", "tabindex"], "abbr", ["class", "title"], "acronym", ["class", "title"], "blockquote", ["cite", "class"], "button", ["class", "disabled", "name", "type", "value"], "del", ["cite", "class", "datetime"], "form", ["accept", "action", "class", "enctype", "method", "name"], "iframe", ["class", "height", "name", "sandbox", "seamless", "src", "srcdoc", "width"], "input", ["accept", "accesskey", "alt", "checked", "class", "disabled", "ismap", "maxlength", "name", "size", "readonly", "src", "tabindex", "type", "usemap", "value"], "img", ["alt", "class", "height", "src", "width"], "ins", ["cite", "class", "datetime"], "label", ["accesskey", "class", "for"], "legend", ["accesskey", "class"], "link", ["href", "rel", "type"], "meta", ["content", "http-equiv", "name", "scheme", "charset"], "map", ["name"], "optgroup", ["class", "disabled", "label"], "option", ["class", "disabled", "label", "selected", "value"], "q", ["class", "cite"], "script", ["src", "type"], "select", ["class", "disabled", "multiple", "name", "size", "tabindex"], "style", ["type"], "table", ["class", "summary"], "th", ["class", "colspan", "rowspan"], "td", ["class", "colspan", "rowspan"], "textarea", ["accesskey", "class", "cols", "disabled", "name", "readonly", "rows", "tabindex"], "param", ["name", "value"], "embed", ["height", "src", "type", "width"]
            ],
            y = [
                [], "img", ["alt"]
            ],
            z = [" ", " ", "	", "\n", "\r", "\f"]
    }(jQuery);