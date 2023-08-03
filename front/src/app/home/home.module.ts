import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './containers/home/home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from './containers/contact/contact.component';
import { AcercaDeComponent } from './containers/acerca-de/acerca-de.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SharedModule,
    IonicModule
  ],
  declarations: [
    HomePage,
    ContactComponent,
    AcercaDeComponent
    ]
})
export class HomePageModule {}
