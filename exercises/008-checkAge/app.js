function checkAge(name, age) {
  // your code here
  return age >= 21 ? "Welcome, " + name + "!": "Go home, " + name + "!";
}

let output = checkAge('Adrian', 22);
console.log(output); // --> '¡Welcome Adrian!'