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

// **************************************
// The old-n-busted callback way

var queue = {
	file1: {
		val: false,
		printed: false
	},
	file2: {
		val: false,
		printed: false
	},
	file3: {
		val: false,
		printed: false
	}
}

function printQueue() {

	

	if(queue.file1.val && !queue.file1.printed){
		console.log(queue.file1.val)
		queue.file1.printed = true;
	}

	if(!queue.file1.printed){
		return;
	}

	if(queue.file2.val && !queue.file2.printed){
		console.log(queue.file2.val)
		queue.file2.printed = true;
	
	}
	
	if(!queue.file2.printed){
		return;
	}

	if(queue.file3.val && !queue.file3.printed){
		console.log(queue.file3.val)
		queue.file3.printed = true;
	
	}

	if(!queue.file3.printed){
		return;
	}
}


function getFile(file) {
	fakeAjax(file,function(text){
		
	if(text === "The first text"){
		queue.file1.val = text;
		printQueue()
	}
	
	if(text === "The middle text"){
		queue.file2.val = text;
		printQueue()
		
	}

	if(text === "The last text"){
		queue.file3.val = text;
		printQueue()
		
	}
})
}



	getFile("file1");
	getFile("file2");
	getFile("file3");
	


