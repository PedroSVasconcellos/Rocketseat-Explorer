// array
const fortune = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

// variables
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let cookieImg = document.querySelector(".screen1 img");
let btnOtherCookie = document.querySelector(".screen2 button");

// events
cookieImg.addEventListener("click", swapScreen);
cookieImg.addEventListener('click', pickFortune);
btnOtherCookie.addEventListener("click", swapScreen);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    pickFortune();
    swapScreen();
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    swapScreen();
  }
});

// functions
function swapScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pickFortune() {
  let allFortunes = fortune.length;
  let randomNumber = Math.floor(Math.random() * allFortunes);
  screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`;
}
