import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  @Input() checked: boolean;
  @Output() onCheck = new EventEmitter();
  @Output() onContinue = new EventEmitter();

  constructor() { }

  check(){
    this.onCheck.emit();
  }

  continue(){
    this.onContinue.emit();
  }
}
