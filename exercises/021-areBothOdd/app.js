// Write your function here
const areBothOdd = (num1, num2) => {
    return (num1 % 2 == 1) && (num2 % 2 == 1) ? true : false;
}

let output = areBothOdd(1, 3);
console.log(output); // --> true