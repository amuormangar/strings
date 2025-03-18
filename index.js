
// QUESTION ONE //
let str ="extravaganza";
let lastfour = str.slice(-4);
console.log(lastfour);

//Question2//
let constfood ="The quick fox jumped over the lazy dog";
let food =constfood.slice(0,4) + "eat" + constfood.slice(4);
console.log(food);


//Question3//

let story = "The quick brown fox jumps over the lazy dog";
function countOccurences(text,word){
    return

text.tolowercase().split(word.tolowerCase()).length-1
}
console.log(countOccurences(story,"the"));

console.log(countOccurences(story,"brown"));


//  Question4//

let string1 = "The pupils are reading in the library";

let string2 = "The child was sitting on the table before it fell";

let word1 = string1.includes("are") ? "are" : "not found";

let word2 = string2.includes("sitting") ? "sitting" : "not found";

console.log(word1);
console.log(word2); 

//Question 5 //
let a = "wonderful"
    b = "amazing"
    c = "UndERneath"
    d = "A wonderful world"

    console.log(a.toUpperCase)
    console.log(b.tolowerCase)
    console.log(c.tolowerCase)
    console.log(d.split)





