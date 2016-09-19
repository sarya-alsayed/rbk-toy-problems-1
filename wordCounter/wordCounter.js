/*
From given file, return all unique words with their counts.
Do not include commas, spaces, double quotes..etc but you can keep 
the apostrophes to avoid complexities.

Example>>
input: "I've scars – is an incredibly humbling experience,\” Ambrose said."

output: 
{
	"I've"       :1,
	"scars"      :1,
	"is"         :1,
	"an"         :1,
	"incredibly" :1,
	"humbling"   :1,
	"experience" :1,
	"Ambrose"    :1,
	"said"       :1
}

Run the file using Node
$ node wordCounter.js

You can check your output with http://www.writewords.org.uk/word_count.asp
*/

fs = require('fs');

var readFile = function (){
  var contents = fs.readFileSync("./news.txt").toString();
  return contents;
};
function wordCounter(){
	var contents=readFile();
	var words=contents.split(" ");
	var output={}
	for (var i=0;i<words.length;i++){ 
		for (var key in output){
			if (words[i]!==key){
				output[words[i]]=1
			}
			else if(words[i]===key) {
               output[words[i]]=output[words[i]]+1;
			}
		}

	}
	return output;
    
}
console.log(wordCounter());

