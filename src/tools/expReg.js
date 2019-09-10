"use strict";
const expReg = {
    ones: /^((?:[a-zA-Z]\w*)|(?:\"(?:\w+|\s|[\.\+-\:\*])*\")|(?:\d+)|(?:\[(?:\,|\s|\d+)*\])|(?:[\-\+\*\/\;]{1})|(?:[<>=]{1}=|=[<>=]{1}|[<>=]{1}|\W-[\s]))/,
    caracter : {
        Id:  /^[a-zA-Z]\w*/,
        Cadena:  /^(?:\"(?:\w+|\s|[\.\+-\:\*])*\")/,
        Numero: /^\d+/,
        Operador:  /^[+\-/*]/,
    },
    Espacio: /^\s+/,
};
module.exports = expReg;