let display = document.getElementById("calc");
let digits = document.getElementsByClassName("digit");
let clearBTN = document.getElementById("clear");

let expression = "";

for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", function () {
    let digit = this.textContent;
    expression += digit;
    display.value = expression;
  });
}

clearBTN.addEventListener("click", function () {
  expression = "";
  display.value = "";
});

let equalBTN = document.getElementById("equal");

equalBTN.addEventListener("click", function () {
  //eval(expression) will turn the string to a mathematical expression
  //and it will do all the mathematical work
  let result = eval(expression);
  display.value = result;
  expression = result.toString();
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/[0-9]|\.|\+|\-|\*|\//.test(key)) {
    expression += key;
    display.value = expression;
  } else if (key == "Enter" || key == "Equal") {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } else if (key == "Backspace") {
    expression = "";
    display.value = "";
  }
});
