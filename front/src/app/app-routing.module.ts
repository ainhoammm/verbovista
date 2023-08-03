import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'conjugacion',
    loadChildren: () => import('./conjugations/conjugations.module').then( m => m.ConjugationsModule)
  },
  {
    path: 'conjugación',
    loadChildren: () => import('./conjugations/conjugations.module').then( m => m.ConjugationsModule)
  },
  {
    path: 'aprender-a-conjugar',
    loadChildren: () => import('./lesson/lesson.module').then( m => m.LessonModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
