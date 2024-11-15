"use strict";
//  regla de producción en la gramática del lenguaje.
module.exports = class Produccion {
    constructor(args){
        const { produccion = null, produce = [] } = args;
        this.name = this.constructor.name;
        this.produccion = produccion;
        this.produce = produce;
    }
    /**
     * Devuelve el primer elemento del producido de la lista
     */
    slice(){
        return this.produce[0];
    }
};