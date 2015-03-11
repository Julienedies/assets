/**
 * Created by julien.zhang on 2014/7/17.
 */


function summary(){

    return function(input, length){
        length = length || 96;

        if(input && input.length <= length){
            return input;
        }

        if(input){
            return input.substr(0, length) + '...';
        }
    };

}