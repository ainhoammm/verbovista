import { Component, OnInit } from '@angular/core';
import {VerbService} from '../../../shared/services/verb.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-conjugation-list',
  templateUrl: './conjugation-list.component.html',
  styleUrls: ['./conjugation-list.component.scss'],
})
export class ConjugationListComponent implements OnInit {

  allVerbs = [];
  showAll = true;
  limit = 100;
  page = 1;
  filter;

  constructor(private verbService: VerbService,
              private route: ActivatedRoute) {
    this.allVerbs = verbService.getAllVerbs();
  }

  ngOnInit() {
    this.route.url.subscribe(data =>{
      if(data && data[0]){
        if(data[0].path === 'regulares'){
          this.filter = 'regular';
        }else if(data[0].path === 'irregulares'){
          this.filter = 'irregular';
        }
      }
      this.allVerbs = this.getVerbs(1, this.limit, this.filter);
    });
  }

  searched(data){
    if(data && data.length>0){
      this.showAll = false;
    }else{
      this.showAll = true;
    }
  }

  loadData(event){
    this.page = this.page+1;
    this.allVerbs = this.getVerbs(this.page, this.limit, this.filter);
    event.target.complete();
  }

  getVerbs(page: number, limit: number, filter?: string){
    if(filter){
      return this.verbService.getAllVerbsFilteredByIrregular(filter).slice(0, limit * page);
    }else{
      return this.verbService.getAllVerbs().slice(0, limit * page);
    }
  }
}
