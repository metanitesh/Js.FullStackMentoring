var generator = function*(){
    yield 1;
    yield 2;
    yield 3;
}
it = generator();


console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)


// var a = 10;

// function getData (data, callback) {

    
//     return new Promise(function (resolve, reject) {
//         console.log("promise resolved");
//         resolve(a);
//     })
// }


// p1.then(function(data){
//     console.log("resolve1");
// })


// p2.then(function(data){
//     console.log("resolve2");
// })




// p1.then(function(data){
//     return 2;
// }).then((data)=>{
//     console.log("2nd nesting");
// }).then((data)=>{
//     console.log("3rd Nesting", data)
// })
























// function getData(data){
//     return new Promise((resolve, reject)=>{
//         resolve(data)
//     })
// }

// function getData2(data){
//     return new Promise((resolve, reject)=>{
//         resolve("data")
//     })
// }


// var foo = function*(){
//     yield getData(1);
//     yield getData(1);
//     yield getData(1);
// }

// var bar = foo();
// console.log(bar.next().value)
// console.log(bar.next().value)
// console.log(bar.next().value)



// var aFoo = async function(){
//     var a = await getData(1);
//     var b = await getData2(2);

//     console.log(b);
// }

// aFoo()
// function getData(data){
//     return new Promise((resolve, reject)=>{
//         resolve(data)
//     })
// }

// function getData2(data){
//     return new Promise((resolve, reject)=>{
//         resolve(data)
//     })
// }

// Promise.all([getData2(1), getData2(2)])
// .then((results)=>{
//     console.log(results);
// })

// getData("hello").then(data => {
//     console.log(data);
// }).then(()=>{
//     console.log("test");
// }).then(()=>{
//     console.log("nope");
// }) .catch()  