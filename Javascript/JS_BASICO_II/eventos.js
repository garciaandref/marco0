
// DOM -> Document Object Model, a estrutura como o HTML é formado
// Eventos -> Ações realizadas na aplicação que dispara rotinas, como por exemplos eventos de click do mouse

//  Exemplo de evento
// Evento para a janela que estamos, onde sempre que o usuário ir para ela, aparece no console o texto focus
// Em window manipulamos a aplicação
window.addEventListener('focus', event => {
    console.log("focus");
});

// Outra maneira de criar um evento, agora para o document, onde o document é o site
document.addEventListener('click', event => {
    console.log('click')
})

//  Função nativa para data dentro do JS, mostrada em timestamp, mostrando os milesugundos de 1970 até o momento presente 
let agora = Date.now();
console.log(agora)

// Fazendo desta forma, a data é mostrada com um formato mais legivel, ficando desta forma Tue Apr 05 2022 17:40:55 GMT-0300 (Horário Padrão de Brasília)
let agora1 = new Date();
console.log(agora1);

// Ainda mais visivel para o usuário
// Manipulando a data, pegando o dia
 console.log(agora1.getDay)
 // Manipulando a data, pegando o ano
 console.log(agora1.getFullYear)
// formata a data no padrão da região
console.log(agora1.toLocaleDateString("pt-BR"));
