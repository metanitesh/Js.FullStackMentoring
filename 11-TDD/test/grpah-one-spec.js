var gaphApi = require("./../app/graph-one.js");
var assert = require('assert');
var should = require('chai').should();

describe("graphAPI should be able to return number of matches played per year", function(){

    it("should return number of match played per year", function(){

        var data =[{ id: '99',
        season: '2008'},
        { id: '100',
        season: '2008',
        }]

        var result= gaphApi.numberOfMatchPlayedPerYear(data);

        var expectedResult = {
            "2008" : 2
        }

        result.should.be.deep.equal(expectedResult);

        

    })

    it("should return empty object if there is no data", function(){

        var data =[]

        var result= gaphApi.numberOfMatchPlayedPerYear(data);

        var expectedResult = {

        }

        result.should.be.deep.equal(expectedResult);

        

    })

    
    it("should return empty object if there is no data", function(){

        var data =undefined

        var result= gaphApi.numberOfMatchPlayedPerYear(data);

        var expectedResult = {

        }

        result.should.be.deep.equal(expectedResult);

        

    })

})