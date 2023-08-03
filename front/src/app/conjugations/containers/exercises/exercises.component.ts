import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { VerbService } from '../../../shared/services/verb.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisesComponent implements OnInit {
  conjugation;
  level = 50; //percentage

  constructor(private verbService: VerbService) { }

  ngOnInit() {
    this.conjugation = this.verbService.getRandomVerb();
  }

}
