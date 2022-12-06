// Write your function here
function isOddLength(word){
    return word.length % 2 == 1 ? true : false;
}

let output = isOddLength('special');
console.log(output); // true