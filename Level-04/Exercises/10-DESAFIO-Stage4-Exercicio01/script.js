let numberOne = Number(prompt("Insira o Primeiro número:"));
let numberTwo = Number(prompt("Insira o Segundo número:"));

// function - math operations
let operations = (numberOne, numberTwo) => {
  alert(`A soma dos dois números é = ${numberOne + numberTwo}`);
  alert(`A subtração dos dois números é = ${numberOne - numberTwo}`);
  alert(`A multiplicação dos dois números é = ${numberOne * numberTwo}`);
  alert(`A divisão dos dois números é = ${(numberOne / numberTwo).toFixed(2)}`);
};

// function - checks if the sum is even or odd
let sumOfNumbers = (numberOne, numberTwo) => {
  total = numberOne + numberTwo;
  if (total % 2 == 0) {
    alert(`A soma dos dois números é ${total} um número par`);
  } else {
    alert("A soma dos dois números é um número ímpar");
  }
};

// function - compares if items are equal or not
let areEqual = (numberOne, numberTwo) => {
  if (numberOne == numberTwo) {
    alert("Os números são iguais");
  } else {
    alert("Os números são diferentes");
  }
};

operations(numberOne, numberTwo);
sumOfNumbers(numberOne, numberTwo);
areEqual(numberOne, numberTwo);
