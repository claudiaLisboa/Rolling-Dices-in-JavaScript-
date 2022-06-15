// class Dices {

 export default class Dices {

    //class Dices
    constructor(el){
        this._el = el;
        this.elImgs = this._el.querysSlectorAll('[data-js-dice]');
        this.elBtn = this._el.querysSlectorAll('[data-js-btn]');
        this.elTotal = this._el.querysSlectorAll('[data-js-total]');

        this.nbDices= this.elImgs.length;

        this.index = [1,1];

        this.interval = 50;
        this._timer = 1000;

        this.init();

    }

    /**
     * comportamente au lance des dies
     */

    throw(){

        // for (let i = 0; i < array.length; i++) {
        //     const element = array[i];
            
        // }

        let animeDice = setInterval(function () {
            for (let i = 0; i < this._nbDices; i++){
                this._index[i] = this.randon();
                this.elImgs[i].setAtributes('src', './assets/img/dices-${this._index[i]}.phg');
            }
            
        })


        setInterval(function() {
            for(let i = 0; i< this._elImgs.length; i++)
            {
                this.elImgs[i].setAtributes('src', './assets/img/dices')
            }
            
        }, this._timer);
    }

 }
