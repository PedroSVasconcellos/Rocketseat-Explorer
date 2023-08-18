/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = []

for (let item = 0; item < 10 ; item++) {
  items[item] = prompt('Digite um ítem da lista de compras')
}

alert(items)

//ou

/*
let items = []

for (let item = 0; item < 10 ; item++) {
  itemName = prompt('Digite um ítem da lista de compras')
  items[item] = itemName
}

alert(items)
*/