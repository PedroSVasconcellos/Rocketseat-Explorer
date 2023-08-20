/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const pacients = [
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

let nameList = [];

// arrow function para calculo do IMC
const imc = (pacient) => {
  let imc = pacient.weight / pacient.height ** 2;
  return imc.toFixed(1);
};

for (pacient of pacients) {
  console.log(
    `${pacient.name} tem ${pacient.age} anos, pesa ${pacient.weight} e possui ${pacient.height} m de altura.`
  );

  console.log(`O IMC de ${pacient.name} é de: ${imc(pacient)}`);
}

