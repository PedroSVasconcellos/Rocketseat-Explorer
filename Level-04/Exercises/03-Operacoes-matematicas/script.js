/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = Number(prompt('Digite o primeiro número'))
let numberTwo = Number(prompt('Digite o segundo número'))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const divi = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(`O resultado da soma é: ${sum}`)
alert(`O resultado da subtração é: ${sub}`)
alert(`O resultado da multiplicação é: ${mult}`)
alert(`O resultado da divisão é: ${divi}`)
alert(`O resultado do resto da divisão é: ${rest}`)