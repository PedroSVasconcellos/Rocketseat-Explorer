// my first calculator

function calculate(number1, operator, number2) {
  let total;

  switch (operator) {
    case "+":
      total = number1 + number2;
      break;
    case "-":
      total = number1 - number2;
      break;
    case "*":
      total = number1 * number2;
      break;
    case "/":
      total = number1 / number2;
      break;
  }

  console.log(total);
}

calculate(40, "-", 29);