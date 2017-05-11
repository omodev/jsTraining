
var async = require('async');

// Running functions in series

     var functionOne = function(callback){
           console.log("func1");
           callback(null,"first");
     }

     var functionTwo = function(callback){
           console.log("func2");
            callback(null,"second") ;
     }

   var functionArray = [functionOne , functionTwo] ;

     async.series(functionArray, function(err,results){
            console.log("RESULTS", results);
     }) ;
