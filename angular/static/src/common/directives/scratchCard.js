/**
 * Created by david.yang on 2014/8/6.
 */

function scratchCard($http) {

    return {
        restrict : 'A',
        scope : {
        },
        link : function(scope, elm, attrs) {
            elm.html('<canvas id="scratch-card"></canvas>');
            var img = new Image();
            var w = 200;
            var h = 50;
            var offset;
            var done = false;
            var canvas = document.getElementById('scratch-card');
            var eventDown, eventUp, eventMove;
            canvas.parentNode.parentNode.style.mozUserSelect = 'none';
            canvas.parentNode.parentNode.style.webkitUserSelect = 'none';
            canvas.style.backgroundColor='transparent';
            canvas.style.position = 'absolute';
            img.addEventListener('load', function(e) {
                var ctx;
                var mousedown = false;
                function layer(ctx) {
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(0, 0, w, h);
                }
                eventDown = function (e) {
                    e.preventDefault();
                    mousedown=true;
                    offset = elm.offset();
                }
                eventUp = function (e) {
                    e.preventDefault();
                    mousedown=false;
                    var data=ctx.getImageData(20,0,w-40,h).data;
                    for(var i=0,j=0;i<data.length;i+=4) {
                      if(data[i] && data[i+1] && data[i+2] && data[i+3]) {
                        ++j;
                      }
                    }
                    if(!done && j<=(w-40)*h*0.6) { //alert('刮刮卡得声誉功能即将上线，敬请期待');
                      $http({method: 'post', url: etConfig.ajaxApi.scratchCardPrize})
                          .success(function(data, status, headers, config) {
                              if (data.stat == 1) {
                                canvas.removeEventListener('touchstart', eventDown, false);
                                canvas.removeEventListener('touchend', eventUp, false);
                                canvas.removeEventListener('touchmove', eventMove, false);
                                canvas.removeEventListener('mousedown', eventDown, false);
                                canvas.removeEventListener('mouseup', eventUp, false);
                                canvas.removeEventListener('mousemove', eventMove, false);
                                img.src = etConfig.ajaxApi.scratchCardImage + '?t='+Math.random();
                                alert(data.msg);
                              } else {
                                done = true;
                                alert(data.msg);
                              }
                          })
                          .error(function(data, status, headers, config) {
                              if (status == 401) {
                                done = true;
                              }
                          });
                    }
                }
                eventMove = function (e) {
                    e.preventDefault();
                    if(mousedown) {
                        if (e.layerX) {
                          e.offsetX = e.layerX;
                          e.offsetY = e.layerY;
                        }
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length-1];
                            e.offsetX = e.pageX - offset.left;
                            e.offsetY = e.layerY ? e.layerY : e.pageY - offset.top;
                        }
                        with(ctx) {
                          //fillRect(e.offsetX-10, e.offsetY-10, 20, 20);
                            beginPath();
                            arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2);
                            fill();
                        }
                    }
                }
                canvas.width=w;
                canvas.height=h;
                canvas.style.backgroundImage='url('+img.src+')';
                ctx=canvas.getContext('2d');
                ctx.fillStyle='transparent';
                ctx.fillRect(0, 0, w, h);
                layer(ctx);
                ctx.globalCompositeOperation = 'destination-out';
                canvas.addEventListener('touchstart', eventDown, false);
                canvas.addEventListener('touchend', eventUp, false);
                canvas.addEventListener('touchmove', eventMove, false);
                canvas.addEventListener('mousedown', eventDown, false);
                canvas.addEventListener('mouseup', eventUp, false);
                canvas.addEventListener('mousemove', eventMove, false);
            });
            img.src = etConfig.ajaxApi.scratchCardImage + '?t='+Math.random();
        }
    };

}


