// calback function

// é uma função que é passada no argumento da chamada, e dentro da função o parâmetro recebido pode ser executado, com o nome do parâmetro + () - exemplo: parametro()

// function sayMyName(callback) {

//   console.log('antes da call')

//   callback()

//   console.log('depois da call')
// }

// sayMyName(
//   () => {
//     console.log('dentro da callback')
//   }
// )


// abaixo temos arrow function e callback function

const arrow = (callback) => {
  console.log("antes da callback, dentro da arrow function");
  callback();
  console.log("depois da callback, dentro da arrow");
};

arrow(() => {
  console.log("dentro da callback");
});
