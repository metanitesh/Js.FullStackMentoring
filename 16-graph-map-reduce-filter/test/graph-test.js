var expect = require("chai").expect;
var graphApi = require("../graph.js");



xdescribe("grpahApi", function() {

	it("should get number of matches played per year of all the years in IPL.", function() {

		matchData = [{
			id: '98',
			season: '2008'
		}, {
			id: '98',
			season: '2008'
		}, {
			id: '98',
			season: '2008'
		}]

		var result = graphApi.getNumberOfMatchPlayedPerYear(matchData);


		var expectedResult = {
			"2008": 3
		}

		expect(result).deep.equal(expectedResult);

	});

	it("should get extra run per team", function() {

		var matchData = [{
			id: '1',
			season: '2016',
		}, {
			id: '2',
			season: '2016',
		}]


		var deliveries = [{
			match_id: '1',
			bowling_team: 'Royal Challengers Bangalore',
			extra_runs: '0',
		}, {
			match_id: '1',
			bowling_team: 'Royal Challengers Bangalore',
			extra_runs: '2',
		}]


		var result = graphApi.getExtraRunPerTeamIn2016(matchData, deliveries)

		var expectedResult = {
			"Royal Challengers Bangalore": 2
		}

		expect(result).deep.equal(expectedResult);
	})

	it("should return wether match happened in 2016", function() {

		var matchData = ['98', '99', '100']
		var matchId = '99';

		var result = graphApi.isMatchHappendIn2106(matchId, matchData);

		expect(result).equal(true);
	})

	it("should get matches in 2016", function(){
		var matchData = [{
			id: '98',
			season: '2016',
		}, {
			id: '99',
			season: '2016',
		}, {

		}, {
			id: '100',
			season: '2015',	
		}]

		var result = graphApi.getMatchesFor2016(matchData)		

		var expectedResult= ['98','99']
		
		expect(result).deep.equal(expectedResult);

	})
});


describe("sandbox", function(){
	it("test", function(){


	})
})
