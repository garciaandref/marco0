/**Encapsulamento - controla o acesso a um atributo ou método 
 * Os tipos mais comuns de encapsulamento nas linguagem de programação são:
 * • public -> Todos acessam
 * • private -> Atributos e métodos da mesma classe e classe Pai (Atributo privado = this._displayCalc = "0";)
 * • protected -> Somente atributos e métodos da própria classe
 * Conseguimos fazer duas coisas com os atributos, atribui-los a algo ou chama-los
*/
class CalcController{
    /**CONSTRUTOR */
    constructor(){
        this._displayCalc = "0";
        this._currentDate;
    }

    /**GETTERS AND SETTERS */
    /**Métodos getters e setters -> Permitem definir como acessar os valores */
    // Retorna o atributo _displayCalc
    get displayClac(){
        return this._displayCalc;
    }
    // Guardamos um valor com o set
    set displayClac(value){
        this._displayCalc = value; 
    }

    get currentDate(){
        return this.currentDate;
    }
    set dataAtual(value){
        this.currentDate = value;
    }
}