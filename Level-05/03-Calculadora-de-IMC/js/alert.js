
export let alertInterval; // Variável usada para cancelar o intervalo anterior fazendo com que sempre tenha 5s o popup

// functions
export function alertPopTimer() {
  clearTimeout(alertInterval);
  alertInterval = setTimeout(() => {
    Modal.alertPop.classList.remove("open");
  }, 3000);
}