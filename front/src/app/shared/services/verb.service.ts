import { Injectable } from '@angular/core';
import { verbs } from '../../../assets/data/verbs';
import { VerbModel } from '../models/verb.model';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor() { }

  search(text: string){
    text = text.trim();
    let results = verbs.filter( verb => verb.verb.includes(text) );
    const found = results.find(infinitive => infinitive.verb === text);
    if(results.find(infinitive => infinitive.verb === text)){
      // SI hay match exacto poner el primer resultado:
      results = results.filter( infinitive => infinitive.verb !== text);
      results.unshift(found);
    }
    return results;
  }

  getByInfinitive(infinitive): VerbModel{
    const found = verbs.find(verb => verb.verb === infinitive);
    if(found){
      return new VerbModel(found.verb, found.irregular, found.reflex);
    }
  }

  getRandomVerb(): VerbModel{
    const randomNumber = Math.floor(Math.random() * verbs.length);
    return this.getVerbByIndex(randomNumber);
  }

  getVerbByIndex(index: number): VerbModel{
    const verb = verbs[index];
    return new VerbModel(verb.verb, verb.irregular, verb.reflex);
  }

  getAllVerbs(){
    return verbs.sort();
  }
  getAllVerbsFilteredByIrregular(filter: string){
    if(filter === 'irregular'){
      return verbs.filter(verb => verb.irregular).sort();
    }else{
      return verbs.filter(verb => !verb.irregular).sort();
    }
  }


}
