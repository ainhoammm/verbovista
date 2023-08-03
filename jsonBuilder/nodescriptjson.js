"use strict";

const fs = require('fs')
const conjugations = require('./esp_verbosALTERNATIVO.json'); //origen: https://github.com/asosab/esp_verbos/blob/master/esp_verbos.json

const pron    = ['yo', 'tú', 'él.ella.Ud.', 'nosotros', 'vosotros', 'ellos.ellas.Uds.'];
const pronImp = ['yo', 'Ud.', 'tú', 'Uds.', 'nosotros', 'vosotros'];

//ejemplo regular amar, temer, partir
const conjugacionesPresente = {
    ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
    er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    ir: ['o', 'es', 'e', 'imos', 'ís', 'en']
};

const conjugacionesFuturo = {
    ar: ['aré', 'arás', 'ará', 'aremos', 'aréis', 'arán'],
    er: ['eré', 'erás', 'erá', 'eremos', 'eréis', 'erán'],
    ir: ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán']
};

const conjugacionesPreterito = {
    ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
    er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
    ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron']
};

const conjugacionesPreteritoImperfecto = {
    ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
    er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
};


const conjugacionesCondicional = {
    ar:  ['aría', 'arías', 'aría', 'aríamos', 'aríais', 'arían'],
    er:  ['ería', 'erías', 'ería', 'eríamos', 'eríais', 'erían'],
    ir:  ['iría', 'irías', 'iría', 'iríamos', 'iríais', 'irían']
};

const conjugacionesPresenteSubj = {
    ar:  ['e', 'es', 'e', 'emos', 'éis', 'en'],
    er:  ['a', 'as', 'a', 'amos', 'áis', 'an'],
    ir:  ['a', 'as', 'a', 'amos', 'áis', 'an']
};
const conjugacionesImperfectoSubj = {
    ar:  ['ara', 'aras', 'ara', 'áramos', 'arais', 'aran'],
    er:  ['iera', 'ieras', 'iera', 'iéramos', 'ierais', 'ieran'],
    ir:  ['iera', 'ieras', 'iera', 'iéramos', 'ierais', 'ieran']
};
const conjugacionesFuturoSubj = {
    ar:  ['are', 'ares', 'are', 'áremos', 'areis', 'aren'],
    er:  ['iere', 'ieres', 'iere', 'iéremos', 'iereis', 'ieren'],
    ir:  ['iere', 'ieres', 'iere', 'iéremos', 'iereis', 'ieren']
};

const conjugacionImperativoAfirmativo = {
    ar:  ['-', 'e', 'a', 'en', 'emos', 'ad'],
    er:  ['-', 'a', 'e', 'an', 'amos', 'ed'],
    ir:  ['-', 'a', 'e', 'an', 'amos', 'id']
};
const conjugacionImperativoNegativo = {
    ar:  ['-', 'e', 'es', 'en', 'emos', 'éis'],
    er:  ['-', 'a', 'as', 'an', 'amos', 'áis'],
    ir:  ['-', 'a', 'as', 'an', 'amos', 'áis']
};

//la posicion [1] puede llevar o no tilde y sigue siendo regular
//es o is en (ir)

const preReflexives = ['me', 'te', 'se', 'nos', 'os', 'se'];

//Verbos a saltar por estar incorrectos o no quererlos en mi app:
const skipeVerbs = ['poteen', 'lee', 'fungus', 'percollar', 'compartir', 'escribir', 'estudiar', 'juntar', 'mejorar', 'parar', 'preparar', 'usar', 'trabajar', 'terminar', 'sumar', 'subir', 'saltar', 'responder', 'quedar', 'esperar'];

//Verbos regulares a mi app:
const regularVerbsToAdd = ['acabar', 'añadir', 'compartir', 'escribir', 'estudiar', 'juntar', 'mejorar', 'parar', 'preparar', 'usar', 'trabajar', 'terminar', 'sumar', 'subir', 'saltar', 'responder', 'quedar', 'esperar'];

let finalJSON = [];

for(let regular of regularVerbsToAdd){
    finalJSON.push({verb: regular});
}

let count = 0;
let irregulares = 0;
conjugations.forEach(conjugation => {
    count++;

    if (!isSkipable(conjugation.verbo) || skipeVerbs.find(verb => conjugation.verbo === verb) ) {
        return;
    }

    const terminacion = getTerminacion(conjugation.verbo);
    const raiz = getRaiz(conjugation.verbo);

    const irregularities = getIrregularities(conjugation, raiz, terminacion);

    const verbo = {
        verb: conjugation.verbo,
    }
    if(isReflexive(conjugation)){
        verbo.reflex = true;
    }

    if(!isEmpty(irregularities)){
        irregulares++;
        verbo.irregular = irregularities;
    }

    finalJSON.push(verbo);
});

console.log('Verbos en total: ' + count);
console.log('Verbos irregulares: ' + irregulares);

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

function getIrregularities(conjugation, raiz, terminacion) {
    let participio = raiz;
    let gerundio = raiz;

    switch (terminacion){
        case 'ar':
            participio += 'ado';
            gerundio += 'ando';
            break;
        case 'er':
            participio += 'ido';
            gerundio += 'iendo';
            break;
        case 'ir':
            participio += 'ido';
            gerundio += 'iendo';
            break;
    }

    let irregular = {};

    if (conjugation.perfecto.futuro[pron[1]].split(" ").pop() !== participio) {
        irregular.participio = conjugation.perfecto.futuro[pron[1]].split(" ").pop();
    }
    if (conjugation.progresivo.futuro[pron[1]].split(" ").pop() !== gerundio) {
        irregular.gerundio = conjugation.progresivo.futuro[pron[1]].split(" ").pop();
    }


    //Indicativos:
    if(isIrregularTable('indicativo','presente', raiz, terminacion, conjugacionesPresente, conjugation)){
        irregular["IndicativoPresente"] = jsonConjToArray(conjugation, 'indicativo', 'presente');
    }
    if(isIrregularTable('indicativo','futuro', raiz, terminacion, conjugacionesFuturo, conjugation)){
        irregular["IndicativoFuturo"] = jsonConjToArray(conjugation, 'indicativo', 'futuro');
    }
    if(isIrregularTable('indicativo','preterito', raiz, terminacion, conjugacionesPreterito, conjugation)){
        irregular["IndicativoPretérito perfecto simple"] = jsonConjToArray(conjugation, 'indicativo', 'preterito');
    }
    if(isIrregularTable('indicativo','imperfecto', raiz, terminacion, conjugacionesPreteritoImperfecto, conjugation)){
        irregular["IndicativoPretérito imperfecto"] = jsonConjToArray(conjugation, 'indicativo', 'imperfecto');
    }
    if(isIrregularTable('indicativo','condicional', raiz, terminacion, conjugacionesCondicional, conjugation)){
        irregular["IndicativoCondicional"] = jsonConjToArray(conjugation, 'indicativo', 'condicional');
    }

    //Subjuntivos:
    if(isIrregularTable('subjuntivo','presente', raiz, terminacion, conjugacionesPresenteSubj, conjugation)){
        irregular["SubjuntivoPresente"] = jsonConjToArray(conjugation, 'subjuntivo', 'presente');
    }
    if(isIrregularTable('subjuntivo','futuro', raiz, terminacion, conjugacionesFuturoSubj, conjugation)){
        irregular["SubjuntivoFuturo"] = jsonConjToArray(conjugation, 'subjuntivo', 'futuro');
    }
    if(isIrregularTable('subjuntivo','imperfecto', raiz, terminacion, conjugacionesImperfectoSubj, conjugation)){
        irregular["SubjuntivoImperfecto"] = jsonConjToArray(conjugation, 'subjuntivo', 'imperfecto');
    }

    // Imperativos:
    if(isIrregularTable('imperativo','afirmativo', raiz, terminacion, conjugacionImperativoAfirmativo, conjugation)){
        irregular["ImperativoAfirmativo"] = jsonConjToArray(conjugation, 'imperativo', 'afirmativo');
    }
    if(isIrregularTable('imperativo','negativo', raiz, terminacion, conjugacionImperativoNegativo, conjugation)){
        irregular["ImperativoNegativo"] = jsonConjToArray(conjugation, 'imperativo', 'negativo');
    }

    return irregular;
}

function isIrregularTable(grupo, tiempo, raiz, terminacion, conjugaciones, conjugation){
    if(grupo == 'imperativo'){
        for(let i=0; i<5; i++){
            if(conjugaciones[terminacion][i] === '-' && conjugation[grupo][tiempo][pronImp[i]] === '-' ){
                continue;
            }
            if (conjugation[grupo][tiempo][pronImp[i]].split(" ").pop() !==  raiz + conjugaciones[terminacion][i]) {
                return true;
            }
        }
    }else{
        for(let i=0; i<5; i++){
            let preReflex = '';
            if (isReflexive(conjugation)) {
                preReflex = preReflexives[i] + ' ';
            }
            if (conjugation[grupo][tiempo][pron[i]] !== preReflex + raiz + conjugaciones[terminacion][i]) {
                return true;
            }
        }
    }

    return false;

}

function getRaiz(verbo){
    return removeAcents(verbo.slice(0, verbo.length-2));
}

function getTerminacion(verbo){
    let terminacion = removeAcents(verbo.slice(-2));
    //si es reflexivo cojo los los 2 previos:
    return terminacion === 'se' ? removeAcents(verbo.slice(-4, verbo.length-2)) : terminacion;
}

function removeAcents(string){
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function isReflexive(conjugation){
    return conjugation.indicativo.presente['yo'].slice(0,3) === 'me ';
}

function isSkipable(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

function jsonConjToArray(conjugation, estructura, tiempo){
    let result = [];

    if(conjugation[estructura][tiempo]['yo'].indexOf(",") > 0){
        //console.log("revisar verbo con ,:")
        //console.log(conjugation.verbo)
    }
    if(estructura !== 'imperativo'){
        result.push(conjugation[estructura][tiempo]['yo']);
        result.push(conjugation[estructura][tiempo]['tú']);
        result.push(conjugation[estructura][tiempo]['él.ella.Ud.']);
        result.push(conjugation[estructura][tiempo]['nosotros']);
        result.push(conjugation[estructura][tiempo]['vosotros']);
        result.push(conjugation[estructura][tiempo]['ellos.ellas.Uds.']);
    }else{
        for(let res in conjugation[estructura][tiempo]){
            result.push(conjugation[estructura][tiempo][res]);
        }
    }

    return result;
}

finalJSON.sort(function (a, b) {
    if (a.verb > b.verb) {
        return 1;
    }
    if (a.verb < b.verb) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
fs.writeFileSync('./verbs.ts', 'export const verbs = ' + JSON.stringify(finalJSON) + ';');
