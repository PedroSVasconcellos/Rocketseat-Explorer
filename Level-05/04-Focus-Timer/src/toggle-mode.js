// COM acessibilidade 
let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? "light" : "dark";
  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode ativado`;
});


// SEM acessibilidade
// let darkMode = true;

// const buttonToggle = document.querySelector('#toggle-mode')

// buttonToggle.addEventListener('click', toggleLightDark)

// function toggleLightDark() {
//   let html = document.querySelector('html')
//   html.classList.toggle('light')
// }