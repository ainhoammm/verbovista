import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConjugationsComponent } from './containers/conjugations/conjugations.component';
import { ExercisesComponent } from './containers/exercises/exercises.component';
import { ConjugationListComponent } from './components/conjugation-list/conjugation-list.component';

const routes: Routes = [
  {
    path: 'ejercicios',
    component: ExercisesComponent,
    data: {
      title: 'Ejercicios de conjugación',
      description: 'Ejercicios de conjugación',
      keywords: 'ejercicios conjugacion, ejercicios verbos, ejercicios conjugacion español'
    }
  },
  {
    path: 'irregulares',
    component: ConjugationListComponent,
    data: {
      title: 'Conjugaciones de verbos irregulares',
      description: 'Todas los los verbos irregulares en español',
      keywords: 'Conjugaciones irregulares, verbos irregulares'
    }
  },  {
    path: 'regulares',
    component: ConjugationListComponent,
    data: {
      title: 'Conjugaciones de verbos regulares',
      description: 'Todos los verbos regulares en español',
      keywords: 'Conjugaciones regulares, verbos regulares'
    }
  },
  {
    path: ':verb',
    component: ConjugationsComponent,
    data: {
      title: 'Conjugacion del verbo ',
      description: 'Todas las formas y tiempos verbales'
    }
  },
  {
    path: '',
    component: ConjugationListComponent,
    data: {
      title: 'Conjugaciones de verbos en español',
      description: 'Todos los verbos conjugados en español',
      keywords: 'todos los verbos en español, conjugaciones en español'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConjugationsRoutingModule {}
