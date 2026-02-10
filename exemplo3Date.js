// funções de data e hora

const agora = new Date();

// IMprime a data atual
console.log(agora);

// IMprime a data em formato de string
console.log(agora.toDateString());

// Imprime a data em formato local
console.log(agora.toLocaleDateString());

//getters
console.log(agora.getFullYear);

// operadores de data e hora

let data1 = new Date("2026-02-10");
let data2 = new Date("2026-12-18");

let diferenca = (data2 - data1);

// calcular os dias para formatura
console.log(diferenca/1000*60*60*24); // milisegundos, segundos, minutos, horas --> quantos dias faltam