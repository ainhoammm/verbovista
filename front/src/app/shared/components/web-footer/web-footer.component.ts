import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-web-footer',
  templateUrl: './web-footer.component.html',
  styleUrls: ['./web-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
