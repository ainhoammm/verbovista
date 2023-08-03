import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  exercises: FormArray;

  success;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'Open Sans', name: 'Open Sans'},
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'toggleEditorMode'
      ]
    ]
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient //todo: quitar de aqui cuando haya API y llevar a un servicio
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', Validators.required],
      exercises: this.fb.array([ this.createExercise() ])
    });
  }

  ngOnInit() {}

  createExercise(): FormGroup {
    return this.fb.group({
      type: ['input', Validators.required],
      exercise: ['___', Validators.required],
      answers: ['', Validators.required],
      options: ['']
    });
  }

  addExercise(): void{
    this.exercises = this.form.get('exercises') as FormArray;
    this.exercises.push(this.createExercise());
  }

  removeExercise(index: number): void {
    this.exercises.removeAt(index);
  }

  getJSON(){
    return JSON.stringify(this.form.value);
  }

  saveJSON() {
    const json = this.getJSON();
    this.http.post('https://verbovista.com/api/saveJSON.php', {
      json
    }).subscribe(data => {
      if(data['data'] === 1){
        this.success = true;
        this.form.reset();
      }else{
        this.success = false;
      }
    });
  }

  /**
   * Required!! for dinamic formgroup *ngFor
   * @param index
   * @param item
   */
  trackByFn(index: any, item: any) {
    return index;
  }

}
