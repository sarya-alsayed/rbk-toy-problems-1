/*

From given file, return all unique words with their counts.
Do not include commas, spaces, quotes..etc

Example:

input: "scars – is an incredibly humbling experience,\” Ambrose said."

output: 
{
	"scars":      1,
	"is":         1,
	"an":         1,
	"incredibly": 1,
	"humbling":   1,
	"experience": 1,
	"ambrose":    1,
	"said":       1
}

Run with

$ node wordCounter.js to excute the file.

*/

fs = require('fs');

var readFile = function (){
  var contents = fs.readFileSync("./news.txt").toString();
  return contents
}

