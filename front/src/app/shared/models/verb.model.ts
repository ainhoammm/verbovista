import Utils from '../utils';

export class VerbModel {
  verb: string;
  irregular: any;
  reflex: boolean;

  raiz: string;
  terminacion: string;
  gerundio: string;
  participio: string;

  gerundioHTML: string;
  participioHTML: string;


  conjugations = {
    Indicativo:{
      "Presente": [],
      "Pretérito perfecto simple": [],
      "Futuro": [],
      "Pretérito perfecto compuesto": [],
      "Pretérito pluscuamperfecto": [],
      "Pretérito anterior": [],
      "Futuro perfecto": [],
      "Condicional perfecto": [],
      "Condicional": [],
      "Pretérito imperfecto": [],
    },
    Subjuntivo:{
      "Presente": [],
      "Imperfecto": [],
      "Futuro": []
    },
    Imperativo:{
      "Afirmativo": [],
      "Negativo": []
    }
  };

  //ejemplo regular amar, temer, partir
  regularConjugationsEnding = {
    Indicativo:{
      "Presente": {
          ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
          er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
          ir: ['o', 'es', 'e', 'imos', 'ís', 'en']
      },
      "Pretérito perfecto simple": {
        ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
        er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
        ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron']
      },
      "Futuro": {
        ar: ['aré', 'arás', 'ará', 'aremos', 'aréis', 'arán'],
        er: ['eré', 'erás', 'erá', 'eremos', 'eréis', 'erán'],
        ir: ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán']
      },
      "Condicional": {
        ar:  ['aría', 'arías', 'aría', 'aríamos', 'aríais', 'arían'],
        er:  ['ería', 'erías', 'ería', 'eríamos', 'eríais', 'erían'],
        ir:  ['iría', 'irías', 'iría', 'iríamos', 'iríais', 'irían']
      },
      "Pretérito imperfecto": {
        ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
        er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
        ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
      },
      /*
      "Pretérito perfecto compuesto": {},
      "Pretérito pluscuamperfecto": {},
      "Pretérito anterior": {},
      "Futuro perfecto": {},
      "Condicional perfecto": {},
      */
    },
    Subjuntivo:{
      "Presente": {
        ar:  ['e', 'es', 'e', 'emos', 'éis', 'en'],
        er:  ['a', 'as', 'a', 'amos', 'áis', 'an'],
        ir:  ['a', 'as', 'a', 'amos', 'áis', 'an']
      },
      "Imperfecto": {
        ar:  ['ara', 'aras', 'ara', 'áramos', 'arais', 'aran'],
        er:  ['iera', 'ieras', 'iera', 'iéramos', 'ierais', 'ieran'],
        ir:  ['iera', 'ieras', 'iera', 'iéramos', 'ierais', 'ieran']
      },
      "Imperfecto2": {
        ar:  ['ase', 'ases', 'ase', 'ásemos', 'aseis', 'asen'],
        er:  ['iese', 'ieses', 'iese', 'iésemos', 'ieseis', 'iesen'],
        ir:  ['iese', 'ieses', 'iese', 'iésemos', 'ieseis', 'iesen']
      },
      "Futuro": {
        ar:  ['are', 'ares', 'are', 'áremos', 'areis', 'aren'],
        er:  ['iere', 'ieres', 'iere', 'iéramos', 'iereis', 'ieren'],
        ir:  ['iere', 'ieres', 'iere', 'iéremos', 'iereis', 'ieren']
      }
    },
    Imperativo:{
      "Afirmativo": {
      },
      "Negativo": {
      }
    }
  };
  haber = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
  haberPasado = ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'];
  haberPretAnt = ['hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'];
  haberFuturo = ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'];
  haberCond = ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'];


  constructor(verb: string, irregular, reflex= false) {
    this.verb = verb;
    this.irregular = irregular;
    this.reflex = reflex;
    this.populate();
  }


  public getRaiz(): string{
    return Utils.removeAccents(this.verb.slice(0, this.verb.length-2));
  }

  public getTerminacion(): string{
    return this.isReflexive() ? Utils.removeAccents(this.verb.slice(-4, this.verb.length-2)) : Utils.removeAccents(this.verb.slice(-2));
  }

  public isReflexive(): boolean{
    return Utils.removeAccents(this.verb.slice(-2)) === 'se';
  }

  private populate(){
    const preReflexives = ['me', 'te', 'se', 'nos', 'os', 'se'];

    this.terminacion = this.getTerminacion();
    this.raiz = this.getRaiz();

    //Recorrer estructura:
    for(let grupo in this.conjugations){
      for(let tiempo in this.conjugations[grupo]){
        //set participio y gerundio:
        if(this.irregular && this.irregular.participio) {
          this.participio = this.irregular.participio;
          this.participioHTML = this.addSpan(this.participio, 'irregular');
        }
        if(this.irregular && this.irregular.gerundio){
          this.gerundio = this.irregular.gerundio;
          this.gerundioHTML = this.addSpan(this.gerundio, 'irregular');
        }

        switch (this.terminacion){
          case 'ar':
            this.participio = this.participio ? this.participio : this.raiz + 'ado';
            this.gerundio = this.gerundio ? this.gerundio : this.raiz + 'ando';
            break;
          case 'er':
            this.participio = this.participio ? this.participio : this.raiz + 'ido';
            this.gerundio = this.gerundio ? this.gerundio : this.raiz + 'iendo';
            break;
          case 'ir':
            this.participio = this.participio ? this.participio : this.raiz + 'ido';
            this.gerundio = this.gerundio ? this.gerundio : this.raiz + 'iendo';
            break;
        }

        this.participioHTML = this.participioHTML ? this.participioHTML : this.addSpan(this.participio, 'regular');
        this.gerundioHTML = this.gerundioHTML ? this.gerundioHTML : this.addSpan(this.gerundio, 'regular');

        // Si es irregular se setea directamente, sino se calculan sus formas regulares para cada persona del tiempo verbal:
        if(this.irregular && this.irregular[grupo + tiempo]){
          this.conjugations[grupo][tiempo] = this.irregular[grupo + tiempo];

          //Coloreo cada terminacion irregular:
          for (let i = 0; i < 6; i++) {
            const conjWithColor = this.addSpan(this.conjugations[grupo][tiempo][i], 'irregular');
            this.conjugations[grupo][tiempo][i] = conjWithColor;
          }
        }else{
          //set pre Reflexivo
          let preReflex = '';
          //para cada persona:
          for (let i = 0; i < 6; i++) {
            preReflex = '';
            if (this.isReflexive()) {
              preReflex = preReflexives[i] + ' ';
            }

            if(grupo === 'Imperativo'){
              if(tiempo === 'Afirmativo'){
                this.conjugations[grupo][tiempo].push(this.getImperativoAfirmativo(i));
              }else{
                this.conjugations[grupo][tiempo].push(this.getImperativoNegativo(i));
              }
            }else{
              const regConj = preReflex + this.getHaberAux(tiempo, i) + this.getRegularConj(grupo, tiempo, i);
              this.conjugations[grupo][tiempo].push(this.addSpan(regConj, 'regular'));
            }
          }
        }
      }
    }

    //console.log("fin populate")
    //console.log(this.conjugations);
  }

  private getHaberAux(tiempo, index){
    let haberAux = '';
    switch (tiempo){
      case "Pretérito perfecto compuesto":
        haberAux = this.haber[index] + ' ';
        break;
      case "Pretérito pluscuamperfecto":
        haberAux = this.haberPasado[index] + ' ';
        break;
      case "Pretérito anterior":
        haberAux = this.haberPretAnt[index] + ' ';
        break;
      case "Futuro perfecto":
        haberAux = this.haberFuturo[index]  + ' ';
        break;
      case "Condicional perfecto":
        haberAux = this.haberCond[index]  + ' ';
        break;
    }
    return haberAux;
  }

  private getRegularConj(grupo, tiempo, i){
    if(this.regularConjugationsEnding[grupo][tiempo] && this.regularConjugationsEnding[grupo][tiempo][this.terminacion]){
      return this.raiz + this.regularConjugationsEnding[grupo][tiempo][this.terminacion][i];
    }else{
      return this.participio; // si no hay conjugación definida es una forma con el participio
    }
  }

  private getImperativoAfirmativo(index: number){
    const conjugacionImperativoAfirmativo = {
      ar:  ['-', 'a!', 'e!', 'emos!', 'ad!', 'en!'],
      er:  ['-', 'e!', 'a!', 'amos!', 'ed!', 'an!'],
      ir:  ['-', 'e!', 'a!', 'amos!', 'id!', 'an!']
    };
    if(index === 0){
      return '-';
    }else{
      const wordWithSpan = this.addSpan( conjugacionImperativoAfirmativo[this.terminacion][index], 'regular');
      return '¡' + this.raiz + wordWithSpan;
    }
  }

  private getImperativoNegativo(index: number){
    const conjugacionImperativoNegativo = {
      ar:  ['-' , 'es!', 'e!', 'emos!', 'éis!', 'en!'],
      er:  ['-', 'as!', 'a!', 'amos!', 'áis!', 'an!'],
      ir:  ['-', 'as!', 'a!', 'amos!', 'áis!', 'an!']
    };
    if(index === 0){
      return '-';
    }else{
      const wordWithSpan = this.addSpan(conjugacionImperativoNegativo[this.terminacion][index], 'regular');
      return '¡no ' + this.raiz + wordWithSpan;
    }
  }

  private addSpan(conjugacion, type='regular'): string{
    const lastWord = conjugacion.split(' ').pop();
    if(lastWord.startsWith(this.raiz) ){
      const raizStart = conjugacion.search(this.raiz);
      const conjugacionFirstSubstr = conjugacion.substring(0, raizStart +  this.raiz.length);
      const conjugacionLastSubstr = conjugacion.substring(raizStart + this.raiz.length, conjugacion.length);
      return conjugacionFirstSubstr + '<span class="'+type+'">'+conjugacionLastSubstr+'</span>';
    }else{
      return '<span class="'+type+'">'+conjugacion+'</span>';
    }
  }

}
