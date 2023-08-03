import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConjugationsRoutingModule } from './conjugations-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ConjugationsComponent } from './containers/conjugations/conjugations.component';
import { ExercisesComponent } from './containers/exercises/exercises.component';
import { IonicModule } from '@ionic/angular';
import { ConjugationListComponent } from './components/conjugation-list/conjugation-list.component';


@NgModule({
  declarations: [
    ConjugationsComponent,
    ExercisesComponent,
    ConjugationListComponent
  ],
  imports: [
    CommonModule,
    ConjugationsRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class ConjugationsModule { }
