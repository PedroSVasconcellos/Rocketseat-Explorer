//Object Literals - direcionando as variáveis e funções do Modal para organizar o código
export const Modal = {
  txtPopUp: document.querySelector(".modal.card h2"),
  alertPop: document.querySelector(".alert-error"),

  wrapper: document.querySelector(".modal-wrapper"),
  button: document.querySelector(".modal button"),

  weight: document.querySelector("#weight"),
  height: document.querySelector("#height"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
    Modal.height.value = "";
    Modal.weight.value = "";
  },
};

// events
Modal.button.onclick = Modal.close;
window.addEventListener("keydown", handleCloseKeyboard);

function handleCloseKeyboard(event) {
  if (event.key === `Escape`) {
    Modal.close();
  }
}
