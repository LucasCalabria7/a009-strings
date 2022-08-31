// a) Remova o excesso de espaços no final da string;

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

// c) Substitua os traços `________` por “sticioso”.

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

let minhaTrim = minhaString.trim();   // Letra A

console.log(minhaString.length);
console.log(minhaTrim.length);      // Letra B

let troca = minhaString.replaceAll("________", "“sticioso”");    //Letra C
console.log(troca);