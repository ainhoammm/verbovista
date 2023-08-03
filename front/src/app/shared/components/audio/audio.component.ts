import { Component, Input} from '@angular/core';
import Utils from '../../utils';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent {

  @Input() textToPlay: string;
  speaking = false;

  constructor() { }

  public play(text: string){
    if(!this.speaking){
      this.speaking = true;
      const speach = Utils.playSpeachText(text);
      const $speaking = fromEvent(speach, 'end');
      $speaking.subscribe(evnt => this.speaking = false);
    }
  }

  /*todo: stop and animate icon while playing*/


}
