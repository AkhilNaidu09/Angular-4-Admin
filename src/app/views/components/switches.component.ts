import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'switches.component.html'
})
export class SwitchesComponent implements OnInit {
  settings: any;

  source: LocalDataSource;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('assets/data/trusts.json').subscribe((data: any[]) => {
      this.settings = {
        actions: {
          delete: false,
          add: false,
          edit: false,
          columnTitle: '',
          position: 'right'
        },
        columns: {
          registeredname: {
            title: 'Registered Name',
          },
          registrationnumber: {
            title: 'Registration Number',
          },
          master: {
            title: 'Master',
          },
          type: {
            title: 'Type',
          },
          segment: {
            title: 'Segment',
          },
          status: {
            title: 'Status',
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
