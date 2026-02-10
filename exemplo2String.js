// Funções de String

const mensagem = " JavaScript é incrível ";

// Contar quantos caracteres tem a variavel
console.log(mensagem.length); //23

// Maiusculas e minusculas
console.log(mensagem.toUpperCase); // JAVASCRIPT É INCRÍVEL
console.log(mensagem.toLowerCase); // javascript é incrivel

// substituição de partes da string
const mensagem2 = mensagem.replace("Java", "Type");
console.log(mensagem2);

// partes do texto
console.log(mensagem.substring(0,5));
console.log(mensagem.slice(-11));

// tesoura (trim)
console.log(mensagem.trim()); // remove espaços antes e depois do texto

// Separação de string
const mensagem3 = "Bom Tarde Com Muita Alegria";
const array = mensagem3.split(" "); // usando o espaço para separar a frase e transformar em vetor
console.log(array);

