"use strict";
const fs = require('fs');
const AnalisisLexico = require('./tools/AnalisisLexico');
const CodigoIntermedio = require('./tools/Evaluador')

let analisisLexico = new AnalisisLexico();
if (process.argv.length > 2) {
    switch (process.argv[2]) {
        case 'scanner':
            console.log('runing...')
            analisisLexico = new AnalisisLexico();
            analisisLexico.start({ fileName: process.argv[3], save: process.argv.includes("save") })
            process.argv.includes("show") ? console.table(analisisLexico.tokens) : false;
            break;
        case 'start':
            console.log('runing...')
            analisisLexico = new AnalisisLexico();
            analisisLexico.start({ fileName: process.argv[3], save: process.argv.includes("save") }, tokens => {
                process.argv.includes("show") ? console.table(tokens) : false;

                const analisisSintactico = new AnalisisSintactico({ debug: process.argv.includes("debug") });
                analisisSintactico.start({
                    tokens: tokens
                }, tree => {
                    process.argv.includes("show") ? tree.showTree('', '', true) : false;
                    const codigoIntermedio = new CodigoIntermedio({tree: tree, debug: true});
                    codigoIntermedio.start();
                });
            })
            break;
        case 'characters':
            const Caracteres = require('./config/caracteres')
            console.table(Caracteres)
            break;
        case 'reserved-words':
            const palabrasReservadas = require('./config/palabrasReservadas')
            console.table(palabrasReservadas)
            break;
        case 'productions':
            const producciones = require('./config/producciones')
            console.table(producciones.map(e => { return { produccion: e.produccion, produce: e.produce } }))
            break;
        default:
            break;
    }
} else {
    console.log(help)
}


/*
let textoPlano = fs.readFileSync(`./src/public/sintactico-output.js`, 'utf8');
JSON.parse(textoPlano).showTree('', '', true);

let evaluador = new Evaluador({three: JSON.parse(textoPlano), debug: true});
evaluador.start()
*/