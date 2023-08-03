import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import Utils from '../../utils';
import { VerbService } from '../../services/verb.service';

@Component({
  selector: 'app-conjugation',
  templateUrl: './conjugation.component.html',
  styleUrls: ['./conjugation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationComponent {
  conjugations;
  group;
  showAudio = true;
  @Input() tiempo;


  //Alternativa de introduccion 1: pasando los valores a mostrar:
  @Input() values;

  //Alternativa de introduccion 2: pasando grupo, tiempo y verbo:
  @Input() set grupo(grupo){
    this.group = grupo;
    this.getValues();
  }
  @Input() set verbo(infinitive){
    this.conjugations = this.verbService.getByInfinitive(infinitive).conjugations;
    this.getValues();
  }

  //Alternativa de introduccion 3: mostrar desinencias:
  ending;
  @Input() set desinencias(desinencias){
    this.showAudio = false;
    this.conjugations = this.verbService.getByInfinitive(desinencias);
    console.log(this.conjugations);
    this.ending = this.conjugations.getTerminacion();
    console.log(this.ending)
    this.conjugations = this.conjugations.regularConjugationsEnding;
    this.getValues();
  }

  @Input() set exercises(percentage){
    const rnd = Math.floor(Math.random() * 100); //get random 0-100
    this.isExercise = rnd >= percentage;
  };

  @Input() title;

  public isExercise = false;

  private pronouns = ['yo', 'tú', 'él / ella / usted', 'nosotros / nosotras', 'vosotros / vosotras', 'ellos / ellas / ustedes'];
  private pronounsImperativo = ['yo', 'usted', 'tú', 'ustedes', 'nosotros', 'vosotros'];

  constructor(
    private verbService: VerbService
  ) {
  }

  public getPronouns(): string[]{
    return this.isImperative() ? this.pronounsImperativo : this.pronouns;
  }

  public onCheck(index, typed, event){
    const cleanResponse = Utils.clearTags(this.values[index]);
    if(typed === cleanResponse){
      //console.log("OK");
      event.target.parentNode.parentNode.getElementsByTagName('ion-icon')[0].setAttribute('name', 'checkmark-outline');
    }
    event.target.parentNode.parentNode.getElementsByTagName('ion-icon')[0].setAttribute('name', '');
  }

  private isImperative(): boolean{
    return (this.tiempo === 'Afirmativo' || this.tiempo === 'Negativo');
  }

  private getValues(){
    if(this.tiempo && this.group && this.conjugations){
      if(this.ending) {
        this.values = this.conjugations[this.group][this.tiempo][this.ending];
        this.values = this.values.map(val => '<span class="regular">' + val + '</span>');
      }else{
        this.values = this.conjugations[this.group][this.tiempo];
      }
    }
  }

}
