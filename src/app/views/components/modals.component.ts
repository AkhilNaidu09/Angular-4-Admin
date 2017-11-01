import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'modals.component.html'
})
export class ModalsComponent implements OnInit {
  settings: any;

  source: LocalDataSource;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('assets/data/leagal-entities.json').subscribe((data: any[]) => {
      this.settings = {
        actions: {
          delete: false,
          add: false,
          edit: false,
          columnTitle: '',
          position: 'right'
        },
        columns: {
          registerdname: {
            title: 'Registered Name',
          },
          tradingname: {
            title: 'Trading Name',
          },
          cocc: {
            title: 'CO/CC',
          },
          registrationnumber: {
            title: 'Registration Number',
          },
          administrator: {
            title: 'Administrator',
          },
          introducer: {
            title: 'Introducer',
          },
          owner: {
            title: 'Owner',
          }
        },
      };
      this.source = new LocalDataSource(data);
    });
  }

}
