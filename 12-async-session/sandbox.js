// var findById = function(id, cb){

//     var obj = {
//         id: 2,
//         text: "breakfast"
//     }

//     if(id === obj.id){
        
//     }

//     setTimeout(function(){
//         cb(obj);
//     }, 3000)


// }


// // console.log(findById(2));

// findById(2, function(obj){
//  console.log(obj);
// })


// var draw = function(x,y,z,  draw2d, draw3d){

//     draw2d(x,y)
//     draw3d(x,y,z)
// }


// draw (1,2,3, function(a,b){
//     console.log(a+b)
// }, function(a,b,c){
//     console.log(a+b+c)
// })




// var add = function(a, b, param){
//     console.log(param(b))
    
// }

// var foo  = function(a){
//     return a;
// }


// add(1, 2, foo)



// var val = add(1, 2, function(param){
//     console.log(2*param);
// });



// console.log(add(1,2))








var match = function(callback){


    setTimeout(
        function(){
            var a = 10;
            
            callback(a)
    }, 2000)
    

    return 50;
}

match(function(param){
    console.log("value of a", param)
});




