import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { lessons } from '../../../../assets/data/lessons/lessons';
import { StorageService } from '../../../shared/services/storage.service';
import {Banner} from '../../../shared/models/banner.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsComponent implements OnInit {

  lessons: any = lessons;
  lastLesson$: any;
  completedLessons$: any;

  banner: Banner;

  constructor(
    private storageService: StorageService
  ) {
    this.banner = new Banner(
      'ca-pub-4641807338135449',
      4558658814,
      'auto',
      true
    );
  }

  ngOnInit() {
    this.storageService.updated$.subscribe(data => {
      this.loadStorage();
    });

  }

  loadStorage(){
    this.lastLesson$ = this.storageService.getObject('lastLesson');
    this.completedLessons$ = this.storageService.getObject('completedLessons');
  }

  isCompletedLesson(completedLessons, index){
    return completedLessons.find(item => item === index+1);
  }

}
