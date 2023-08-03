import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './containers/lessons/lessons.component';
import { LessonComponent } from './containers/lesson/lesson.component';
import { ExerciseComponent } from './containers/exercise/exercise.component';
import { CreateComponent } from './containers/create/create.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CreateComponent,
    data: {
      title: 'Crear lecciones y ejercicios',
      description: 'Crea lecciones y ejercicios personalizados.',
      keywords: 'Crea lecciones y ejercicios de conjugación, Crea lecciones y ejercicios de verbos'
    }
  },
  {
    path: ':lesson/:exercise',
    component: ExerciseComponent,
    data: {
      title: 'Ejercicios para aprender a conjugar verbos',
      description: 'Ejercicios para aprender a conjugar verbos en español.'
    }
  },
  {
    path: ':lesson',
    component: LessonComponent,
    data: {
      title: 'Aprender a conjugar verbos',
      description: 'Aprender a conjugar verbos en español con lecciones y ejercicios.',
      keywords: 'Aprender a conjugar, Aprender a conjugar verbos en español'
    }
  },
  {
    path: '',
    component: LessonsComponent,
    data: {
      title: 'Aprender a conjugar verbos',
      description: 'Aprender a conjugar verbos en español con lecciones y ejercicios.',
      keywords: 'Aprender a conjugar, Aprender a conjugar verbos en español'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
