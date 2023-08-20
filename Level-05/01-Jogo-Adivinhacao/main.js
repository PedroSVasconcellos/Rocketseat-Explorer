// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let inputNumber = document.querySelector("#inputNumber");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleResetEnter);

// funções
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) > -1 && Number(inputNumber.value) < 11 && inputNumber.value !== '') {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen();

      document.querySelector(
        ".screen2 h2"
      ).innerText = `Parabéns, você acertou em ${xAttempts} tentativas!`;
    }

    inputNumber.value = "";
    xAttempts++;
  } else {
    alert('Digite um número válido!')
  }
}

function handleResetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleResetEnter(event) {
  if (event.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
