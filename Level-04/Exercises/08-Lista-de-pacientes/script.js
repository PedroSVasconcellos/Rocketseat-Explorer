/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacient = [
  {
    name: "Pedro",
    age: 35,
    weight: 66.5,
    height: 1.87,
  },
  {
    name: "João",
    age: 32,
    weight: 76.5,
    height: 1.85,
  },
  {
    name: "Lena",
    age: 27,
    weight: 55.5,
    height: 1.7,
  },
  {
    name: "Ivson",
    age: 62,
    weight: 95.5,
    height: 1.86,
  },
];

let nameList = []

// for (index = 0; index < pacient.length; index++) {
//   nameList.push(pacient[index].name)
// }

for (pacientName of pacient) {
  console.log(`${pacientName.name} tem ${pacientName.age} anos, pesa ${pacientName.weight} e possui ${pacientName.height} m de altura.`)
}