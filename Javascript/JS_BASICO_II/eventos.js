
// DOM -> Document Object Model, a estrutura como o HTML é formado
// Eventos -> Ações realizadas na aplicação que dispara rotinas, como por exemplos eventos de click do mouse

//  Exemplo de evento
// Evento para a janela que estamos, onde sempre que o usuário ir para ela, aparece no console o texto focus
window.addEventListener('focus', event => {
    console.log("focus");
});