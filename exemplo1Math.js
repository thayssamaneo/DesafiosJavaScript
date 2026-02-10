// Funções Matemáticas (Math) --> Nativas

// SQRT e POW (Raiz e potência)

console.log("RAIZ (Math.sqrt)");

// Vamos calcular a raiz quadrada de 25
console.log(Math.sqrt(25)); //5

console.log("-----------------------------");
console.log("POTÊNCIA (Math.pow)");

// Potência de nº pelo outro
console.log(Math.pow(7,2)); // 49
console.log(Math.pow(4,3)); // 64
console.log(Math.pow(27,1/3)); // Mesma coisa que a raiz cúbica de 27 (27√³)

console.log("-----------------------------");
console.log("ARREDONDAMENTO (Math.round/ceil/floor)");

//Funções de Arredondamento (round, ceil, floor)
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.7)); //4

console.log("-----------------------------");
console.log("ARREDONDAMENTO (Math.random");

// Funções de número aleatório
console.log(Math.random()); // gerar um número aleatório entre 0 e 1
// Gerar um nº entre 0 e 999
console.log(Math.random()*1000);

console.log("-----------------------------");
console.log("NÚMEROS ABSOLUTOS (Math.abs");

// Números absolutos (converte negativo em positivo)
console.log(Math.abs(-10));

console.log("-----------------------------");
console.log("FUNÇÕES ANALÍTICAS (Math.min/max");

// Funções analiticas Minimo e máximo 

console.log(Math.min(1,2,3,4,5,6,7,8,9)); //1
console.log(Math.max(1,2,3,4,5,6,7,8,9)); //9

// Desafio

// Criar um jogo de número aleatório

console.log("-----------------------------");

var num = Math.random()*100;
num = (Math.round(num));
var chute, tent;

for (tentativa = 0; chute != num; tentativa++){
    
}
