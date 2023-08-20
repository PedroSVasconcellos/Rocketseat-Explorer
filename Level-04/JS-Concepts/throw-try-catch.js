function sayMyName(name) {
  if (name === "") {
    throw "Mensagem de erro";
  }
  console.log(name);
}

try {
  sayMyName('Pedro');
} catch (e) {
  console.log(e);
}


