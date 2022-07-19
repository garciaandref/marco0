// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado1(lado){
    return lado * lado;
}

// Bloco função arrow function
const areaQuadrado = ((lado) => {
    return lado * lado;
})

console.log('Area quadrada',{aera1: areaQuadrado(4),aera2: areaQuadrado(5), aera3: areaQuadrado(2)})

// -----------------------
function pi1(){
    return 3.14;
}

// Arrow function
const pi = (() => {
    return 3.14;
})

var total = 5 * pi();
console.log('O valor de pi multiplicado por 5 é: ', total);

// ---------------------
