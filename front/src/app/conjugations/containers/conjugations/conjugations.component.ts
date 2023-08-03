import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {VerbService} from '../../../shared/services/verb.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Banner} from '../../../shared/models/banner.model';

@Component({
  selector: 'app-conjugations',
  templateUrl: './conjugations.component.html',
  styleUrls: ['./conjugations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConjugationsComponent implements OnInit {
  @Input() exercises;
  @Input() printable = false; //optional input
  @Input() set infinitive(value: string){
    this.conjugation = this.verbService.getByInfinitive(value);
  };

  public conjugation;
  public groups = ['Indicativo', 'Subjuntivo', 'Imperativo'];

  banner: Banner;

  constructor(
    private verbService: VerbService,
    private route: ActivatedRoute)
  {
    this.banner = new Banner(
      'ca-pub-4641807338135449',
      4558658814,
      'auto',
      true
    );
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params && params.verb){
        this.conjugation = this.verbService.getByInfinitive(params.verb);
      }
    });
  }

  private onPrint(){
    setTimeout( () => {
      window.print();
    }, 150);
  }

}
