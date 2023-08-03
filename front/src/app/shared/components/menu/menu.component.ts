import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  langs = ['en', 'es'];

  public menuItems = [
    { name: 'menu.home', route: '/home', icon: 'home'},
    { name: 'menu.learn', route: '/aprender-a-conjugar', icon: 'book-outline' },
    { name: 'menu.exercises', route: '/conjugacion/ejercicios', icon: 'barbell-outline' },
    //{ name: 'contact', route: '/home/contactar', icon: 'mail-outline' },
  ];

  constructor(
    public platform: Platform,
    public translate: TranslateService
  ) { }

  changeLang(lang: string): void{
    this.translate.use(lang);
  }

}
