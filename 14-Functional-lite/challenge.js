function foo(x){
	return function(){
		return x
	};
}

function add(x,y){
	return x+y;
}

function addn(arr){
	

	arr
		.map(foo)
		.reduce(s)

}

console.log(add2(x,y));