import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent implements OnInit {
  settings: any;

  source: LocalDataSource;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('assets/data/deceasedestates.json').subscribe((data: any[]) => {
      this.settings = {
        actions: {
          delete: false,
          add: false,
          edit: false,
          columnTitle: '',
          position: 'right'
        },
        columns: {
          surname: {
            title: 'Surname',
          },
          fullnames: {
            title: 'Full Names',
          },
          identitynumber: {
            title: 'Identity Number',
          },
          dateofbirth: {
            title: 'Date of Birth',
          },
          estatenumber: {
            title: 'Estate Number',
          },
          master: {
            title: 'Master',
          },
          relationship: {
            title: 'Relationship',
          },
          administrator: {
            title: 'Administrator',
          },
          introducer: {
            title: 'Introducer',
          }
        },
      };
      this.source = new LocalDataSource(data);
    });
  }

}
