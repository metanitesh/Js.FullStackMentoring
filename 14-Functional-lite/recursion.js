function sumItr(){
	var sum = 0;

	for(var i=0;  i<arguments.length; i++){
		sum = sum + arguments[i]
	}

	return sum;
}

// console.log(sumItr(1,2,4));


function sumItrRecursive (){
	
	var argumentsArr = [].slice.call(arguments);
	
	sumItrRecursive.total += argumentsArr.shift();

	if(argumentsArr.length > 0){
		sumItrRecursive(...argumentsArr)
	}
}

sumItrRecursive.total = 0;

sumItrRecursive(3,3,4)

console.log(sumItrRecursive.total)

