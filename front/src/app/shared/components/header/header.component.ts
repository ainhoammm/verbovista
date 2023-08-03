import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  constructor(
    public platform: Platform
  ) { }

  ngOnInit() {}

}
