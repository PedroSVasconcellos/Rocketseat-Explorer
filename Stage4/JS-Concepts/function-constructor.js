// constructor function

// é uma forma de criar um objeto com propriedades, usando uma função.

// tentei usar uma constructor function no modelo de arrow function e não funcionou, o JS parece ter identicado como uma arrow e me deu erro de 'isto não é uma constructor' quando tentei passar os argumentos para dentro da 'const'

// function Person(name, age, weight) {
//   this.name = name;
//   this.age = age;
//   this.weight = weight;
// }

// const lena = new Person("Lena", 27, 55);
// const pedro = new Person("Pedro", 35, 65);

// console.log(lena);
// console.log(pedro);



// arrow function como propriedade, dentro de objeto instanciado, em função construtora

function Peterson(name) {
  this.name = name;
  this.walk = () => {
    return 'arrow function como propriedade, dentro de objeto instanciado, em função construtora';
  };
}

const pedro = new Peterson("Pedro");

console.log(pedro.walk());
