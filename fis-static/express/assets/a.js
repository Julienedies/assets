/**
 * Created by julien.zhang on 2014/11/13.
 */

$.ajax({
    url:'/hello'
}).done(
    function(data){
        alert(data);
    }
)