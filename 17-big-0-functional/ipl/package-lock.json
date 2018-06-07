var csvjson = require('csvjson');
var fs = require('fs');
var path = require('path')

var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };

var matchData = csvjson.toObject(fs.readFileSync(path.join(__dirname, 'ipl/matches.csv'), { encoding : 'utf8'}), options);
var deliveriesData = csvjson.toObject(fs.readFileSync(path.join(__dirname, 'ipl/deliveries.csv'), { encoding : 'utf8'}), options);

module.exports = {
	matchData: matchData,
	deliveriesData: deliveriesData
}
