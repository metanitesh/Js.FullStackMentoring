//transformation. 
var a = [1,2,4,5]

var b = a.map(function(x){
	return x*2
})

console.log(b);

//exclusion

var c = [2,4,5,6].filter(function(i){
	return (i%2 === 0);
})

console.log(c);


//reduce

function compose(arr, fn, intial){
	var total = intial;
	for(var i=0; i<arr.length; i++){
		total = fn(total, arr[i])
	}
	return total;
}

var d = compose([1,2,3], function(a,b){
	return a*b;
}, 1)

console.log(d);

