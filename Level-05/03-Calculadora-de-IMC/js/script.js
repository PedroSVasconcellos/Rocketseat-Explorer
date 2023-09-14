import { Modal } from './modal.js'
import { alertPopTimer } from './alert.js'

// variables
const form = document.querySelector("form");


// functions
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = Modal.weight.value;
  const height = Modal.height.value;

  // alerta de erro
  if (weight == "" || height == "") {
    Modal.alertPop.classList.add("open");
    alertPopTimer();
  } 
    // sem errro, calcula o IMC
    let msg = Modal.txtPopUp
    let imc = (weight / (height / 100) ** 2).toFixed(2);
    Modal.open();
    msg.innerText = `Seu IMC é ${imc}`;
};


