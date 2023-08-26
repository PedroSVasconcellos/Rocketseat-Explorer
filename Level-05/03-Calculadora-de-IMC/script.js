// variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const alertPop = document.querySelector(".alert-error");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalButton = document.querySelector('.modal button')
let txtPopUp = document.querySelector(".modal.card h2");

// events 
modalButton.addEventListener('click', closePopUp)

// functions
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (weight == "" || height == "") {
    alertPop.classList.add("open");
  } else {
    let imc = (weight / (height / 100) ** 2).toFixed(2);
    modalWrapper.classList.add("open");
    txtPopUp.innerText = `Seu IMC é ${imc}`
  }
}

function closePopUp() {
  modalWrapper.classList.remove('open')
  inputHeight.value = ''
  inputWeight.value = ''
}