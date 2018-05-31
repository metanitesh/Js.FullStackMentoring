function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

function getFile(file, resolve) {
    
    return new Promise(function(resolve, reject){
        fakeAjax(file, resolve)
    })

}

var p1 = getFile('file1');
var p2 = getFile('file2');
var p3 = getFile('file3');

p1.then(function(data){
//     console.log(data);
// }).then (function(){
//     return p2;
// }).then(function(data){
//     console.log(data)
//     return p3;
// }).then(function(data){
//     console.log(data);
// })
})


p1.then(function(){
    return "hello"
}).then(function(param){
    console.log(param)
}).then(function(){
    console.log("3")
}).catch(function(err){
    console.log("sd", err);
});