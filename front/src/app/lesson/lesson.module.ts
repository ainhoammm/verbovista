import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { LessonsComponent } from './containers/lessons/lessons.component';
import { LessonComponent } from './containers/lesson/lesson.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExerciseComponent } from './containers/exercise/exercise.component';
import { IonicModule } from '@ionic/angular';
import { createCustomElement } from '@angular/elements';
import { ConjugationComponent } from '../shared/components/conjugation/conjugation.component';
import { CreateComponent } from './containers/create/create.component';
import { AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
    declarations: [
        LessonsComponent,
        LessonComponent,
        ExerciseComponent,
        FooterComponent,
        CreateComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        LessonRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        IonicModule,
        AngularEditorModule
    ]
})
export class LessonModule {
  constructor(
    private injector: Injector,
  ){
    const el = createCustomElement(ConjugationComponent, { injector });
    customElements.define('app-conjugacion', el);
  }
}
