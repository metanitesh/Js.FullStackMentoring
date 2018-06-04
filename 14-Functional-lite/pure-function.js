
function pureFoo (x){
    var y = 5, z;

    function foo(x){
        y++;
        z= x*y;
    }

    foo(x);

    return [y, z];
}

console.log(pureFoo(10));