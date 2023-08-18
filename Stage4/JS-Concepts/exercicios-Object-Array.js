//1. Declare um variável de nome weight
// R:
// let weight

//2. Que tipo de dado é a variável acima?
// R: undefined
// console.log(typeof weight)

//3. Declare uma variável e atribua valores para cada um dos dados
// R:
// let name = 'Pedro'
// let age = 36
// let stars = 4.8
// let isSubscribed = true

//4. A variável student abaixo é de que tipo de dados?
// R: Object

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
// R:
/*
let student = {
  name: "Pedro",
  age: 36,
  stars: 4.8,
  isSubscribed: true,
  weight: 65.8,
};
*/

//4.2 Mostre no console as seguintes mensagens
/*
<name> de idade <age> pesa <weight> pelos valores de cada objeto
*/
// R:
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} pelos valores de cada objeto`)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
// R:
// let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
// R:

// students = [student];

//7. Coloque no console o valor da posição zero do array acima
// R:
// console.log(students[0])

//8. Crie um novo student e coloque ele na posição do Array students

/*
const joao = {
  name: "João",
  age: 33,
  stars: 4.9,
  isSubscribed: true,
  weight: 78.8
}

students[1] = joao

console.log(students)
*/


//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
// R: undefined, por causa do hoisting. a variável 'var' é criada, mas nenhum valor é adicionado a ela. depois o javascript lê a tela e joga no console o valor de undefined. pois naquela linha, o valor de 1 não tinha sido adicionado à variável, ela só tinha sido criada e elevada pelo hoisting

/*
console.log(a)
var a = 1
*/

