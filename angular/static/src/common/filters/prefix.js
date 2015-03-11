/**
 * Created by julien.zhang on 2014/7/16.
 */

function prefix(){

    return function(input, prefix){
        prefix = prefix || '';
        if(input){
            return prefix + input;
        }
    };

}