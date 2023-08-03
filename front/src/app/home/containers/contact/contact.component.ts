import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {}

  onSubmit() {
    //todo: enviar email
    console.log("enviar emial")
    this.http.post('https://verbovista.com/api/saveJSON.php',
      {
        name: this.name,
        email: this.email,
        message: this.message
      }).subscribe(data => {
      console.log(data)
    });

  }

}
