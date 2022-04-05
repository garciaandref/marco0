// Variaveis
// let -> declara variáveis definindo o escopo de atuação, leva em conta onde vc declara a variavel
// const -> declacra constante, uma vez declarado o valor dela, não muda mais, pois é uma constante
// typeOf -> mostra o ti´po de data da variavel
// stanceOf -> mostra de que objeto veio a variavel

var Olamundo = "Ola Mundo"
let a = 10;
const b = "10";


// Escrevendo no console
console.log(Olamundo)
// verifica se são iguais sem levar em conta o tipo
console.log(a == b)
// Verifica se verifica se realmente são iguais, verificando o tipo
console.log(a === b)
// Verifica se é diferente levando em conta o tipo
console.log(a !== b)
// Verifica se é diferente desconsiderando o conta o tipo
  console.log(a != b)

// OPERADORES LÓGICOS
console.log("OPERADORES LÓDIGICOS")
// Comparando se a é igual a b, desconsiderando o tipo e verificando se o tipo de b é uma string. O operador E(&&), se torna verdadeiro, se somente se todas verificações lógicas são verdadeiras
console.log( a == b && typeof b == 'string')
// Companrando se a é igual a b ou o tipo de a é uma string. O operador OU (||), se torna verdadeiro se uma das verificações for verdadeira
console.log(a == b || typeof a == 'string') 

// Condicionais
let cor = "amarelo"
// IF(se, condição)
// else fi (senão se)
// else (senão)
if (cor === "verde"){
    console.log("siga");
}else if(cor === "amarelo"){
    console.log("atenção");
}else{
    console.log("pare");
}

// switch, outro tipo de controle de fluxo
switch (cor) {
    case "verde":
        console.log("siga")
        break;
    case "amarelo":
        console.log("atencao")
        break;
    case "vermelho":
        console.log("pare")
        break;
    default:
        console.log("não sei")
}

console.log("TABUADA")

// laço de repetição FOR
let n = 7;
// usando for para percorrer o laço
for(let i =0; i <= 10; i++){
    // Usamos TEMPLATE STRING (${js}), permitindo pular linha, colocar comandos dentro do texto
    console.log(`${i} X ${n} = ${i*n}`);
}

for(let i =0; i <= 10; i++){
    // concatenando valores
    console.log(i + " X " + n + " = " +(i*n));
}