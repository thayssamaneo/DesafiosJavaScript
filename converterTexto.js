const texto = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

const texto2 = texto.trim();

const texto3 = texto2.split(", ");

let texto4 = [];

for (let i=0; i < texto3.length; i++){
    texto4[i] = texto3[i].charAt(0).toUpperCase()+texto3[i].slice(1).toLowerCase();
}

console.log(texto4);