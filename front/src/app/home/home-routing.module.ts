import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './containers/home/home.page';
import { ContactComponent } from './containers/contact/contact.component';
import { AcercaDeComponent } from './containers/acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: 'acerca-de',
    component: AcercaDeComponent,
    data: {
      title: 'Acerca de verbovista',
      description: 'Verbovista es una web/app gratuita para aprender a conjugar verbos',
      keywords: 'Verbovista, verbos en español, conjugaciones en español, aprender a conjugar'
    }
  },  {
    path: 'contactar',
    component: ContactComponent,
    data: {
      title: 'Contactar',
      description: 'Contactar con verbovista',
    }
  },
  {
    path: '',
    component: HomePage,
    data: {
      title: 'Inicio',
      description: 'Ver, buscar y practicar conjugaciones de verbos en castellano',
      keywords: 'Verbovista, verbos en español, conjugaciones en español, aprender a conjugar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
