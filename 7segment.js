var fs = require('fs');
var words = fs.readFileSync('words.txt', 'utf8').split('\n');
//console.log(words);
var badLetters = /[]/;
var LongestAcceptableWord = "";
for(var testWord of words) {
    if(testWord.length<=LongestAcceptableWord.length)
        continue;
    
    if(testWord.match(badLetters))
        continue;
    
    LongestAcceptableWord = testWord;
}

console.log(LongestAcceptableWord);