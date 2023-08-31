import { Modal } from './modal.js'

// variables
const form = document.querySelector("form");
let alertInterval; // Variável usada para cancelar o intervalo anterior fazendo com que sempre tenha 5s o popup

// functions
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = Number(Modal.weight.value);
  const height = Number(Modal.height.value);

  // alerta de erro
  if (weight == "" || height == "") {
    Modal.alertPop.classList.add("open");
    alertPopTimer();
  } else {
    // sem errro, calcula o IMC
    let msg = Modal.txtPopUp
    let imc = (weight / (height / 100) ** 2).toFixed(2);
    Modal.open();
    msg.innerText = `Seu IMC é ${imc}`;
  }
};

function alertPopTimer() {
  clearTimeout(alertInterval);
  alertInterval = setTimeout(() => {
    Modal.alertPop.classList.remove("open");
  }, 3000);
}
