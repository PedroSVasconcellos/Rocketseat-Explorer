// Type CONVERSION (TYPECASTING) é quando nós convertemos ativamente um tipo de dado para outro tipo
//Ex:

console.log(Number("9") + 5);
// a conversão permitiu a soma

// =====================================

// Type COERSION (é quanbdo o JS altera o tipo de dado para outro, de forma mandatória, não depende da nossa vontade)

console.log("9" + 5);
// no exemplo acima o JS converteu o numeral 5 para string para que houvesse a concatenação de duas strings, dando como resultado no console a string '95'

// =====================================

// métodos usados em conversão para maiúsculas e minúsculas

let word = 'Pedro'

console.log(word.toUpperCase())
console.log(word.toLowerCase())