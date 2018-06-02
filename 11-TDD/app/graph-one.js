var csvjson = require('csvjson');
var fs = require('fs');
var path = require('path')
var data = fs.readFileSync(path.join(__dirname, 'ipl/matches.csv'), { encoding : 'utf8'});
var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };
var data = csvjson.toObject(data, options);

function foo(){

}

var numberOfMatchPlayedPerYear = function(data){
    
    if(!Array.isArray(data)){
        return []
    }

    var result = {};
    

    data.forEach(function(match){
 
        if( match.season in result){
            result[match.season] += 1;
        }else {
            result[match.season] = 1;
        }
    })

    return result;
    
}







module.exports =  {
    numberOfMatchPlayedPerYear: numberOfMatchPlayedPerYear 
}



