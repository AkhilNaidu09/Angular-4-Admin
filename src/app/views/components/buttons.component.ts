import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'buttons.component.html',
  styleUrls: ['./associations.scss']
})
export class ButtonsComponent implements OnInit {
  settings: any;

  source: LocalDataSource;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('assets/data/associations.json').subscribe((data: any[]) => {
      this.settings = {
        actions: {
          delete: false,
          add: false,
          edit: false,
          columnTitle: '',
          position: 'right'
        },
        columns: {
          name: {
            title: 'Name',
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
