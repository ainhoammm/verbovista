import {Directive, Input} from '@angular/core';
import { IonInput } from '@ionic/angular';

@Directive({
  selector: '[appIonAutofocus]'
})
export class IonAutofocusDirective {
  constructor(private host: IonInput) {}

  @Input() appIonAutofocus = true;

  ngAfterViewInit() {
    if (this.appIonAutofocus) {
      this.host.setFocus();
      setTimeout(() => this.host.setFocus(), 500);
    }

  }
}
