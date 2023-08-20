// function scope

let subject = "create video";

function createThink() {
  let subject = "study";
  return subject;
}

console.log(createThink());
console.log(subject);

// se a variável de dentro do escopo da função não for declarada como var, let ou const, ela se torna de escopo global e neste caso, vai substituir a string 'create vídeo' pela string 'study', na variável let subject = 'create video', declarada fora e antes.

// se isso acontecer, o que aparecerá no console.log(subject) vai ser a string 'study'

// se a função for executada primeiro, sem que a variável de dentro seja declarada como var, let ou const, somente modificada, ela rouba o conteúdo da variável declarada antes da função e o escopo de dentro da função vaza para fora dela. por isso é SUPER importante declarar a variável como let const ou var dentro da função para que acidentes não aconteçam fora do escopo desejado
