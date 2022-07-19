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
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();

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
    // Método para percorrer os eventos ao clicar
    addEventListenerAll(element,events, fn){
        // Percorrer todos os eventos, um por vez
        // usamos o split como separador para os eventos
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearAll(){

    }

    clearEntry(){

    }

    setError(){
        this.displayCalc

        
    }

    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();    
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':

                break;
            case 'subtracao':

                break;
            case 'divisao':

                break;
            case 'multiplicacao':

                break;
            case 'porcento':

                break;
            case 'igual':

                break;
            default:
                this.setError();
                break;
        }
    }

    initButtonEvents(){
        /**Pega todos os elementos dentro do g dentro do id buttons e parts */
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        // Percorrer todos os botões, para cada botão que ele encontrar na lista, ele executa o código
        buttons.forEach((btn, index) => {
            
            // Chamamos o método addEventListenerAll dentro desta mesma função, e passamos os eventos de click e drag(método para selecionar o botão mesmo se clicarmos e arrastarmos) 
            this.addEventListenerAll(btn, "click drag", e => {
                // Usamos .className.baseVal, para pegarmos somente a classe do botão, pois se trata de um SVG, loga após
                // usamos o replace para retirar o nome btn da classe, assim trazendo só o numero ou função do botao da calculadora
                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn();
            });

            // Trocando o icone do cursor do mouse
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
    }

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
    get displayCalc
    
    () {
        return this._displayCalcEl.innerHTML;
    }
    // Guardamos um valor com o set
    set displayCalc
    
    (value) {
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