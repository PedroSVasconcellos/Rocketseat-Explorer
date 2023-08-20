// for of serve para listar os caracteres de ums string ou as posições de um array

let firstPerson = "Pedro";

for (letter of firstPerson) {
  console.log(letter);
}

// for in serve para listar a as propriedades dentro de um objeto

let secondPerson = {
  name: "John",
  age: 38,
  weight: 88.6,
};

for (property in secondPerson) {
  console.log(property); // acessando a chave(key) do objeto
  console.log(secondPerson[property]); //acessando o valor(value) da chave também
}
