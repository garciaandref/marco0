/**Encapsulamento - controla o acesso a um atributo ou método 
 * Os tipos mais comuns de encapsulamento nas linguagem de programação são:
 * • public -> Todos acessam
 * • private -> Atributos e métodos da mesma classe e classe Pai (Atributo privado = this._displayCalc = "0";)
 * • protected -> Somente atributos e métodos da própria classe
 * Conseguimos fazer duas coisas com os atributos, atribui-los a algo ou chama-los
*/
class CalcController {
    /**CONSTRUTOR */
    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    /**Manipulando DOM
   * O que é o DOM ?
   * DOM -> Document Object Model, ou modelo de objetos do documento, estrutura em que se baseia o documento HTML
   */
    initialize() {
        // innerHTML -> pega o objeto que estamos falando, no caso o 0 da calculadora, e insere uma informação no formato html
        this.setDisplayDateTime();

        let interval = setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        /**Como parar o setInterval
         * Armazene o setInterval dentro de uma varaivel, como por exemplo let interval = setInterval, e depois crie a função abaixo, onde estamos parando o mesmo
         * após 10 segundos de execução
         
        setTimeout(() => {
            clearInterval(interval);
        }, 10000);
        */
    }

    /**Criando um método */
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    /**GETTERS AND SETTERS */
    /**Métodos getters e setters -> Permitem definir como acessar os valores */

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    // Retorna o atributo _displayCalc
    get displayClac() {
        return this._displayCalcEl.innerHTML;
    }
    // Guardamos um valor com o set
    set displayClac(value) {
        this._displayCalcEl.innerHTML = value;
    }
    /**No console podemos executar o comando dir(variavel), como por exemplo, definir a variavel dt =  new Date(), e logo após executar
     * dir(dt), e exibir todas as propriedades, metodos dentro da data
     * se quisermos buscar smomente o dia por exemplo, podemos executar
     * dt.getDate()
     * ou pegar o locale, formatando a data por região conforme exemplo abaixo
     * dt.toLocaleDateString('pt-BR')
     * retorna a data
     * dt.toLocaleDateString('pt-BR', {month:'long'}) -> long para o nome interio do mês e short para abreviação
    */
    get currentDate() {
        return new Date();
    }
    set dataAtual(value) {
        this._currentDate = value;
    }


}