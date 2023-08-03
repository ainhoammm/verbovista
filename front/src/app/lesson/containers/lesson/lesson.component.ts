import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit, SecurityContext
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { lessons } from '../../../../assets/data/lessons/lessons';
import { DomSanitizer } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonComponent implements OnInit, AfterViewChecked {
  lessonId: number;
  lessonData: any;
  @Input() set lesson(lesson){
    this.lessonData = lesson;
    this.sanitizeContent();
  };

  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private elRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params){
        this.lessonId = params.lesson;
        this.lessonData = lessons[this.lessonId - 1];
        this.sanitizeContent();
      }
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.sanitizeContent();
    });
  }

  sanitizeContent(){
    this.lessonData.content = this.domSanitizer.sanitize(SecurityContext.HTML, this.domSanitizer.bypassSecurityTrustHtml(this.lessonData.content));
    this.changeLangContent();
  }

  ngAfterViewChecked(){
    this.changeLangContent();
  }

  changeLangContent(){
    if(this.translate.currentLang === 'en'){
      if(this.elRef.nativeElement.querySelectorAll('.onlyEn')){
        this.elRef.nativeElement.querySelectorAll('.onlyEn').forEach(elem => elem.classList.remove('onlyEn'));
      }
    }
  }

  continue(){
    if(this.lessonData.exercises.length > 0){
      this.router.navigate(['/aprender-a-conjugar', this.lessonId, 1 ]);
    }else{
      this.router.navigate(['/aprender-a-conjugar']);
    }
  }

}
