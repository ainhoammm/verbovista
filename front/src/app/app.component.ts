import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MetaService } from './shared/services/seo.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
declare let gtag;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(
    private meta: MetaService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.setDefaultLang();

    this.meta.updateTitle();
    this.meta.updateMetaDesc();
    this.meta.updateMetaKeywords();

    const navENdEvents$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navENdEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-178F9F1H7T', {
        'page_path': event.urlAfterRedirects
      });

    } );
  }

  setDefaultLang(): void{
    let browserLang = navigator.language.split('-')[0];
    if(browserLang !== 'es'){
      browserLang = 'en';
    }
    this.translate.setDefaultLang(browserLang);
    this.translate.use(browserLang);
  }

}
