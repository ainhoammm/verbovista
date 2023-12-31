import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  updateMetaInfo(content, author, category) {
    this.meta.updateTag({ name: 'description', content: content });
    this.meta.updateTag({ name: 'author', content: author });
    this.meta.updateTag({ name: 'keywords', content: category });
  }

  updateTitle(title?: string) {
    if (!title) {
      let verb = '';
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) { route = route.firstChild; }
            verb = route.snapshot.paramMap.get('verb');
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)).subscribe((event) => {
            let title = event['title'];
            if(verb){
              title += verb;
            }
            title += ' | VerboVista';
            this.titleService.setTitle(title);
          });
    } else {
      this.titleService.setTitle(title + ' | VerboVista');
    }
  }

  updateMetaDesc(desc?: string){
    if (!desc) {
      desc = '';
      let verb;
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) { route = route.firstChild; }
            verb = route.snapshot.paramMap.get('verb');
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)).subscribe((event) => {
            desc = event['description'];
        if(verb){
          desc = 'Conjugación verbo ' + verb + ' en español, todas las formas y tiempos de verbos regulares e irregulares';
        }
        if(desc){
          this.meta.updateTag({ name: 'description', content: desc });
        }
      });
    } else {
      this.meta.updateTag({ name: 'description', content: desc });
    }
  }

  updateMetaKeywords(keywords?: string){
    if (!keywords) {
      keywords = '';
      let verb;
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) { route = route.firstChild; }
            verb = route.snapshot.paramMap.get('verb');
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)).subscribe((event) => {
            keywords = event['keywords'];
        if(verb){
          keywords = verb + ' , verbo ' + verb + ', conjugación ' + verb + ', conjugación verbo ' + verb;
        }

        if(keywords){
          this.meta.updateTag({ name: 'keywords', content: keywords });
        }
      });
    } else {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }
  }
}
