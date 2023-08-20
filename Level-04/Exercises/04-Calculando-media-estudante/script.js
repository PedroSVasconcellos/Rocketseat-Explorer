/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

const studentName = prompt("Qual o nome do aluno?");
let grade1 = Number(prompt("Qual a 1a nota do bimestre?"));
let grade2 = Number(prompt("Qual a 2a nota do bimestre?"));
let grade3 = Number(prompt("Qual a 3a nota do bimestre?"));

let average = (grade1 + grade2 + grade3) / 3;

average = average.toFixed(2);

if (average > 6) {
  alert(`Parabéns, ${studentName}! Sua média foi ${average}. Você passou.`);
} else {
  alert(
    `${studentName}, sua média foi ${average}. Você não passou, mas ainda pode correr atrás na recuperação. Dê o seu melhor!`
  );
}

