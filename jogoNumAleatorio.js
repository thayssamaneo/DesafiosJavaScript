var prompt = require("prompt-sync")();

var num = Math.random() * 100;
num = Math.round(num);
var chute, tent;

for (tent = 0; chute != num; tent++) {
    chute = Number(prompt("Digite seu chute: "));
    if (chute > num){
        console.log("- MENOR -")
    } else if (chute < num){
        console.log("+ MAIOR +")
    } else{
        console.log("\nVocê acertou!!!")
        console.log("Número de tentativas: "+tent)
    }
}
