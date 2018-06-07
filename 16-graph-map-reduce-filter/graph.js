var data = require("./data.js")

var grpahAPI = {
	getNumberOfMatchPlayedPerYear: function(matchData){
		
		var matchesByYear = {};

		matchData.forEach((match) => {
			
			if(!matchesByYear[match['season']]){
				matchesByYear[match['season']] = 1;
			} else{
				matchesByYear[match['season']] += 1;
			}
		})

		return matchesByYear;
	},


	getMatchesFor2016: function(matches){

		var matchesId = matches.filter(function(match){
			return match.season == 2016;
		}).map(function(match){
			return match.id
		})
		return matchesId;

	},


	isMatchHappendIn2106: function(matchId, matchData){
		return matchData.indexOf(matchId) != -1;
	},

	getExtraRunPerTeamIn2016 : function(matchData, delieveriesData){

		var extraRunIn2016 = {};
		var matchIdArray = this.getMatchesFor2016(matchData);

		delieveriesData.forEach((delivery) => {

		
			var matchIn2016 = this.isMatchHappendIn2106(delivery.match_id, matchIdArray);
			var bowlingTeam = delivery['bowling_team'];
			if(matchIn2016){
				if(extraRunIn2016[bowlingTeam]){
					extraRunIn2016[bowlingTeam] += 1;
				} else{
					extraRunIn2016[bowlingTeam] = 1;
				}
			}


			//match happend in 2016

			//which team was bowling

			//increment the score
		})

		return extraRunIn2016;
	}

}


module.exports = grpahAPI