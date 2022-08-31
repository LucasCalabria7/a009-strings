let fraseGato = "BOAS VINDAS, mas não deixe o gato sair"   //Letra A
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "${fraseGato}"`

let fraseTrocada = frase.replace("verde", "rosa").replace("azul", "laranja");  // Letra B
let incluiVerde = fraseTrocada.includes("verde")
let incluiLaranja = fraseTrocada.includes("laranja")   // Letra C

let fraseMaiuscula = frase.replace(`${fraseGato}`, "BOAS VINDAS, MAS NÃO DEIXE O GATO SAIR") // EXTRA

console.log(frase);
console.log(fraseTrocada);
console.log(incluiVerde);
console.log(incluiLaranja);
console.log(fraseMaiuscula);
