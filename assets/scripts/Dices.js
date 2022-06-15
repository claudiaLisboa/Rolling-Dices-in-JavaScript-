export default class Dices {

    constructor(el) {
        this._el = el; 
        this._elBtns = this._el.querySelectorAll('[data-js-btn]');
        this._elImgs = this._el.querySelectorAll('img');
        this._elTotal = this._el.querySelector('[data-js-total]');

        this._nbDices = this._elImgs.length;

        this._randomsNb = []; // tableau par défaut

        this._interval = 50;
        this._timer = 1000;

        this.init();

    }


    /**
     * Initialise les comportements
     */
    init() {
        for(let i = 0; i < this._elBtns.length; i++) {
            this._elBtns[i].addEventListener('click', function(e){
                let btnName = e.target.dataset.jsBtn;

                if (btnName == 'throw') {
                    this.throw();
                }
                else if (btnName == 'reset') {
                    this.reset();
                }
            }.bind(this));  // without bind(this), it can't find 'this' when executing the function throw() becuz at the function throw(), it can't find where 'this' is....
        }
    }


    /**
     * Comportement au lancé des dés
     */
    throw() {

        this.toggleBtns(true);

        /*
        for (let i = 0; i < this._elBtns.length; i++){
            this._elBtns[i].disabled = true;
        }
        */

        let animeDice = setInterval(function() {

            this.dicesFace();
            /*
            for (let i = 0; i < this._elImgs.length; i++){

                this._randomsNb[i] = this.random();
                this._elImgs[i].setAttribute('src', `./assets/img/dice-${ this._randomsNb[i] }.png`)

            }
            */
        }.bind(this), this._interval);


        setTimeout(function(){
            clearInterval(animeDice);
            this.total();
            this.toggleBtns(false);

            /*
            for (let i = 0; i < this._elBtns.length; i++){
                this._elBtns[i].disabled = false;
            }
            */

        }.bind(this), this._timer);

        //setTimeout(juste une fois), setInterval(plusieurs fois)
    }


    /**
     * Toggle attribut disabled btns
     * @param {bool} bool 
     */
    toggleBtns(bool) {
        for (let i = 0; i < this._elBtns.length; i++){
            this._elBtns[i].disabled = bool;
        }
    }

    /**
     * Injecte total 
     */
    total(){
        let total = 0;

        for (let i = 0; i < this._randomsNb.length; i++) {
            total += this._randomsNb[i];
        }

        this._elTotal.textContent = total;

    }


    /**
     * Injecte l'image de chaque dé
     */
    dicesFace(random = true) {

        for (let i = 0; i < this._nbDices; i++){

            if (random) this._randomsNb[i] = this.random();
            else this._randomsNb[i] = 1;

            this._elImgs[i].setAttribute('src', `./assets/img/dice-${ this._randomsNb[i] }.png`)

        }
        
    }


    /**
     * Reset les dés et le total
     */
    reset(){

        this.dicesFace(false);
        this._elTotal.textContent = '';
    }


    /**
     * Tire un chiffre random de 1 à 6
     * @returns 
     */
    random() {
        return Math.ceil(Math.random() * 6);
    }

    
}