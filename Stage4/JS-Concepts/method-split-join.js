// conversion-split-join-methods

let text = 'este é um texto que contém espaços'

let textSeparated = text.split(' ')
console.log(textSeparated)

textTogheter = textSeparated.join('_')
console.log(textTogheter)


// =================================================


// usando RegExp - regular expressions só para substituir usando o método replace, sem transformar em um array

// text.replace(/ /g, '_') não modifica a string, aparentemente 

// console.log(text.replace(/ /g, '_'))