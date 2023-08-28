// variables
const form = document.querySelector("form");
// const inputWeight = document.querySelector("#weight");
// const inputHeight = document.querySelector("#height");

const alertPop = document.querySelector(".alert-error");
let txtPopUp = document.querySelector(".modal.card h2");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalButton = document.querySelector(".modal button");

// Variável usada para cancelar o intervalo anterior fazendo com que sempre tenha 5s o popup
let alertInterval;

const Modal = {
  weight: document.querySelector("#weight"),
  height: document.querySelector("#height"),

  open() {
    modalWrapper.classList.add("open");
  },
  close() {
    modalWrapper.classList.remove("open");
  },
};

// events
modalButton.onclick = closePopUp;

// functions
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = Number(Modal.weight.value);
  const height = Number(Modal.height.value);

  // alerta de erro
  if (weight == "" || height == "") {
    alertPop.classList.add("open");
    alertPopTimer();
  } else {
    // sem errro, calcula o IMC
    let imc = (weight / (height / 100) ** 2).toFixed(2);
    Modal.open();
    txtPopUp.innerText = `Seu IMC é ${imc}`;
  }
};

function closePopUp() {
  Modal.close();
  Modal.height.value = "";
  Modal.weight.value = "";
}

function alertPopTimer() {
  clearTimeout(alertInterval);
  alertInterval = setTimeout(() => {
    alertPop.classList.remove("open");
  }, 5000);
}
