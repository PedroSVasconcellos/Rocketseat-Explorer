/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let students = [
  { name: "Pedro", gradeOne: 7.5, gradeTwo: 8 },
  { name: "Lena", gradeOne: 9.5, gradeTwo: 7.8 },
  { name: "Carlos", gradeOne: 5.4, gradeTwo: 6.5 },
  { name: "Helder", gradeOne: 7.4, gradeTwo: 6.9 },
  { name: "José", gradeOne: 4.4, gradeTwo: 2.9 },
];

function media(name, grade1, grade2) {
  let result = (grade1 + grade2) / 2
  if (result >= 7) {
    alert(`Parabéns, ${name}. Você passou, sua média foi ${result}.`)
  } else {
    alert(`Sinto muito, ${name}. Você não passou, sua média foi ${result}.`)
  }
}

for (let index of students) {
  media(index.name, index.gradeOne, index.gradeTwo)
}
