//function hoisting




sayMyName();

function sayMyName() {
  console.log('Pedro')
}

// isso acima sofre elevação por hoisting porque é uma 'function'




// sayMyName();

// const sayMyName = function() {
//   console.log('Pedro')
// }

// isto acima não sobre hoisting porque é uma const 




// sayMyName();

// var sayMyName = function() {
//   console.log('Pedro')
// }

// isto acima também não sofre elevação por hoisting pois quem sofre a elevação é uma variável (var sayMyName), e não a função. então é como se fosse no exemplo abaixo

// var sayMyName

// sayMyName();

// sayMyName = function() {
//   console.log('Pedro')
// }




// acontece o erro de referência pois a variável sofreu elevação por hoisting mas só foi declarada, não recebeu nenhum conteúdo. então quando o JS tenta executar a função sayMyName() ele acusa um erro de tipo, pois não existe esta funcão, somente uma variável sem conteúdo, classificada como 'undefined'