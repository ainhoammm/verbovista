import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { lessons } from '../../../../assets/data/lessons/lessons';
import { FormControl, FormGroup } from '@angular/forms';
import Utils from '../../../shared/utils';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseComponent implements OnInit {
  processPercentage: number;
  exerciseInputChars = '___';

  lessonId: number;
  lesson: any;
  exerciseId: number;
  exercise: any;

  exerciseParts: any[] = [];

  allCorrect: boolean;
  checked: boolean;

  feedback = {
    fullText: '',
    upper: false,
    accent: false,
    correct: []
  };

  fields = [];
  form = new FormGroup({});

  constructor(
    public alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params){
        this.lessonId = Number(params.lesson);
        this.lesson = lessons[this.lessonId -1];
        this.exerciseId = Number(params.exercise);
        this.exercise = this.lesson.exercises[this.exerciseId -1];

        for (let i=0; i<this.getAnswersNumber(); i++) {
          const field = {id: 'exercise'+i, label: 'exercise'+i, value: '', incorrect: false, answer: this.getAnswer(i) };
          this.fields.push(field);
          this.form.addControl(field.id, new FormControl(field.value));
        }
        this.exerciseParts = this.getExercisesParts();
        this.setProcessPercentage();
        this.storageService.setObject('lastLesson', params );
      }
    });
  }

  public checkExercise(){
    for(const [index, field] of this.fields.entries()){
      this.form.get(field.id).disable();

      switch (this.exercise.type){
        case 'input':
          if(this.checkAnswer(index, this.form.get(field.id).value)){
            //todo:mostrar respuesta correcta
            console.log("correcto")
          }else{
            //todo:mostrar respuesta correcta
            console.log("incorrecto")
            this.allCorrect = false;
            this.feedback.correct.push(this.exercise.answers[index].split('||'));
            this.fields[index].incorrect = true;
          }
          break;
        //todo: quitar de aqui o unificar
        case 'choose':
          //todo: choose
          this.checkChoose('');
          break;
      }

      this.form.get(field.id).disable();
    }

    if(this.allCorrect !== false){
      this.allCorrect = true;
      Utils.playSound();
    }

    this.checked = true;
  }

  public continue(){
    if(this.lesson.exercises.length > this.exerciseId){
      this.router.navigate(['/aprender-a-conjugar', this.lessonId, this.exerciseId+1 ]);
    }else{
      //set has done lesson:
      let completedLessons = [this.lessonId];
      this.storageService.getObject('completedLessons').then( values => {
        if(values){
          completedLessons = values;
          completedLessons.push(this.lessonId);
        }
        this.storageService.setObject('completedLessons', completedLessons);
      });

      //navigate to lessons:
      this.router.navigate(['/aprender-a-conjugar']);
    }
  }

  public isString(variable: any){
    return typeof variable === 'string';
  }

  public checkChoose(selectedOption){
    if(this.checked){
      return;
    }
    if(selectedOption === this.exercise.answers){
      console.log("correcto")
      this.allCorrect = true;
      Utils.playSound();
    }else{
      console.log("incorrecto")
      this.allCorrect = false;
    }

    this.checked = true;
  }

  public getFullCorrectedSentence(){
    return this.exerciseParts.reduce((prev: any, current: any) => this.isString(current) ? prev + current : prev + current.answer);
  }

  private getAnswer(index: number): string{
    if(this.isString(this.exercise.answers)){
      return this.exercise.answers;
    }else{
      return this.exercise.answers[index];
    }
  }

  private setProcessPercentage(){
    //Progress bar
    this.processPercentage = this.exerciseId / this.lesson.exercises.length;
    setTimeout(()=> {
      this.processPercentage = (this.exerciseId + 1) / this.lesson.exercises.length;
    }, 500);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recordatorio',
      //subHeader: 'Subtitle',
      message: this.lesson.content,
      buttons: ['Cerrar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  private getExercisesParts(){
    let parts = [];
    let fieldIndex = 0;

    let exerciseText = this.exercise.exercise;
    while(exerciseText.indexOf(this.exerciseInputChars) !== -1){
      parts.push(exerciseText.split(this.exerciseInputChars,1).pop());
      parts.push(this.fields[fieldIndex]);
      fieldIndex++;
      exerciseText = exerciseText.substring(exerciseText.indexOf(this.exerciseInputChars) + this.exerciseInputChars.length, exerciseText.length );
    }
    if(exerciseText){
      parts.push(exerciseText);
    }

    //console.log(parts);
    return parts;
  }

  private getAnswersNumber(){
    const questions = (this.exercise.exercise.match(/___/g) || []).length;
    return questions;
    return typeof this.exercise.answers === 'string' ? 1 : this.exercise.answers.length;
  }

  private checkAnswer(index: number = 0, typedValue: string){
    let correctValues = [];
    if(this.isString(this.exercise.answers)){
      if(this.exercise.answers.indexOf('||') ){
        correctValues = this.exercise.answers.split('||');
      }else{
        correctValues.push(this.exercise.answers);
      }
    }else{
      correctValues = this.exercise.answers[index].split('||');
    }

    const found = correctValues.find(correctValue => {
      if(!Utils.isEqualInAccents(correctValue, typedValue)){
        this.feedback.accent = true;
      }
      if(!Utils.isEqualInCase(correctValue, typedValue)){
        this.feedback.upper = true;
      }
      return Utils.isCorrectAnswer(correctValue, typedValue);
    });
    return found;
  }


}
