// OO é uma das coisas mais importantes, organizando, deixando funcional e organizando o código.
// Na prática tudo acontece em uma classe, que é um conjunto de atributos e metodos
/**
 * Em orientação objeto, as variáveis se tornam atributos e as funções se tornam metodos, e ambos ficam dentro de uma classe
 * this -> comando interno usado para referenciar um atributo e ou um método dentro da mesma classe
 * Classe é um conjunto de atributos e métodos
 * atributos -> informações armazenadas
 * métodos -> ações que devem acontecer
 * Instancia -> É quando o objeto representa uma classe
 * Quanto mais inteligente for sua classe, mais limpo será seu código
 */
// Começando com OO
// Antigo Ecma
let celular = function(){
    this.cor = "prata";
    this.ligar = () =>{
        console.log("Uma ligação");
        return "Ligando";
    }
}

// Novo Ecma
class celularNovo{
    constructor(){
        this.cor = "azul"
    }

    ligar(){
        console.log("Fazendo uma ligação")
        return "Ligando ..."
    }
}

let objeto = new celular();
let objeto2 = new celularNovo();

console.log(objeto.ligar());
console.log(objeto2.ligar())