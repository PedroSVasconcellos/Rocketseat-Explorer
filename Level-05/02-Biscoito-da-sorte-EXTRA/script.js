// variables
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let cookieImg = document.querySelector('.screen1 img')
let btnOtherCookie = document.querySelector('.screen2 button')

// events 
cookieImg.addEventListener('click', handleClick)
btnOtherCookie.addEventListener('click', handleClick)

// functions 
function handleClick() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}