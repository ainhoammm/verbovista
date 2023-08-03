import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { VerbService } from '../../services/verb.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public searchResults = [];

  @Output() results = new EventEmitter<any>();

  constructor(
    private verbService: VerbService,
    public translate: TranslateService
  ) { }

  ngOnInit() {}

  onSearch(text: string){
    if(text.length === 0){
      this.searchResults = [];
    }
    if(text.length >= 2){
      this.searchResults = this.verbService.search(text);
    }
    this.results.emit(this.searchResults);
  }

}
