import { Component, Input, AfterViewInit } from '@angular/core';
import { Banner } from '../../models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {

  @Input() banner: Banner;
  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
          overlays: {bottom: true}
        });
      } catch (e) {
        console.error(e);
      }
    }, 50);
  }

}
