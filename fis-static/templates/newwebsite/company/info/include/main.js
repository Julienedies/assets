/**
 * Created by julien.zhang on 2014/10/16.
 */

$(function(){
    var hash = location.hash.slice(1);

    $('[ic-role-tab=' + hash +']').click();

});
