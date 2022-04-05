// São variaveis indexados, cujos posição os indices e os valores são os dados salvos dentro deles
let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

// mostrando o array com seus valores
console.log(carros);

// Quantidade de valores dentro do Array
console.log(carros.length);

// Pesquisando o item pela poosição
console.log(carros[0]);

console.log(carros[5].getFullYear());

console.log(carros[6]());

// Função para percorrer o ARRAY e trazer a posição e o valor 
carros.forEach(function(value, index){
    console.log(index, value)
});



