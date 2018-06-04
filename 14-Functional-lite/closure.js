var foo = function(x,y){

    var a = x;
    var b = y;
    return function(){
        return a+b;
    }

}

var x = foo(3,4)
console.log(x())
console.log(x())