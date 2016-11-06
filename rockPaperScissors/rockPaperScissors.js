/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function() {
   var arrayGame=["rock","paper","scissors"];
   var array=[];
   
 while(array.length!==27){
 	var b=(Math.floor(Math.random()*2));
     subArray=[];
     subArray.push(arrayGame[b],arrayGame[b],arrayGame[b]);
     if (array.indexOf(subArray)===-1){
     	array.push(subArray);
     }
   }
   return array;
};

var rockPaperScissors1 = function (){
	 var arrayGame=["rock","paper","scissors"];
   var array=[];
  for (var i=0;i<arrayGame.length;i++){
   	for (var j=0; j< arrayGame.length;j++){
      for (var k=0;k<arrayGame.length;k++){
        debugger;
        array.push([].concat(arrayGame[i],arrayGame[j],arrayGame[k]));
      }
   	}
  }
   return array;

}
//// solution from pavel
var rockPaperScissors2 = function (/* START SOLUTION */rounds/* END SOLUTION */) {
  // TODO: your solution here
  /* START SOLUTION */
    rounds = rounds || 3;
    var outcomes = [];

    var plays = ['rock', 'paper', 'scissors'];

    var combos = function(roundsToGo, playedSoFar) {
      if( roundsToGo === 0 ){
        outcomes.push( playedSoFar );
        return;
      }

      for( var i = 0; i < plays.length; i++ ){
        var currentPlay = plays[i];
        combos( roundsToGo-1, playedSoFar.concat(currentPlay) );
      }
    };
    combos( rounds, [] );

    return outcomes;
  /* END SOLUTION */
};
///http://www.collinwu.me/rock-paper-scissors-iterative-vs-recursive-implementation/