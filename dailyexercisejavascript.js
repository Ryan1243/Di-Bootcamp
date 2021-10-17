let sentence = "The dinner was not so bad , it was nice";
let result;
let arrSentence = sentence.split(" ");
console.log(arrSentence)

let WordBad = arrSentence.indexOf("bad");
let WordNot = arrSentence.indexOf("not");


if (WordBad>WordNot && WordBad !== -1 && WordNot !== -1){
	
	arrSentence.splice(WordNot, WordBad -  WordNot + 1, "good")
	console.log(arrSentence)
	
	result = arrSentence.join(" ")
	console.log(result)

} else {
	console.log(sentence)
}
