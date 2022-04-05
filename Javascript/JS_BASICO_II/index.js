// Funções são trechos de códigos que podem ser reutilizados
// return - Encerra a função e retorna um valor
//  função padrão
function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(1, 2, "+");

console.log(`REsultado função padrão: ${resultado}`);

// funcao anonima
// Pode ser chamada assim que criada
(function(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
})(1, 2, "*");

// Arrow functions
// é uma forma mais simples de escrever funções, conseguimos compartilhar partes de outros códigos dentro dela
let calc2 = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}
let resultado2 = calc2(2, 2, "*")
console.log(`Resultado da ARROW Function: ${resultado}`)

// callback -> função de retrorno como parametro após uma ação

