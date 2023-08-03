import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { IonAutofocusDirective } from './directives/ion-autofocus.directive';
import { AutowidthDirective } from './directives/Autowidth.directive';
import { AudioComponent } from './components/audio/audio.component';
import { ConjugationComponent } from './components/conjugation/conjugation.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { TranslateModule } from '@ngx-translate/core';
import { WebFooterComponent } from './components/web-footer/web-footer.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    AutowidthDirective,
    IonAutofocusDirective,
    AudioComponent,
    ConjugationComponent,
    SearchComponent,
    WebFooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    AutowidthDirective,
    IonAutofocusDirective,
    AudioComponent,
    ConjugationComponent,
    SearchComponent,
    TranslateModule,
    WebFooterComponent,
    BannerComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
