// variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let inputNumber = document.querySelector('#inputNumber')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// funções callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document.querySelector('.screen2 h2').innerText = `Parabéns, você acertou em ${xAttempts} tentativas!`
  } 
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
 
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}



