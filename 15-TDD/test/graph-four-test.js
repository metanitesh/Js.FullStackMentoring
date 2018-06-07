var chai = require("chai").should();
var graphApi = require("../graph-four.js");

describe("graph api should return top five most ecnomical bowler", function(){

	it("should return top ecnomical bowler ", function(){
		


		var result = graphApi.loop(6);

		result.should.equal(3)


		// var data = []

		// var result = graphApi.getTopEcnomicalBowler(data)
		// // var expected= {
		// // 	"user5": 1,
		// // 	"user4": 3,
		// // 	"user3": 2,
		// // 	"user2": 4,
		// // 	"kohli": 5.4
		// // }


		// var expected = [{name: "user5", y: 4}, {name: "user5", y: 2}, {name: "user5", y: 1}]

		// expected.should.deep.equal(result);


	})
})




