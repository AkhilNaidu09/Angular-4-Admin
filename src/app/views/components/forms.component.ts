import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit {
  settings: any;

  source: LocalDataSource;

  constructor(private http: HttpClient, private router: Router) {

  }

  getUserDetails() {
    this.router.navigate(['clients/individual-details']);
  };

  ngOnInit() {
    this.http.get('assets/data/individuals.json').subscribe((data: any[]) => {
      this.settings = {
        actions: {
          delete: false,
          add: false,
          edit: false,
          columnTitle: '',
          position: 'right'
        },
        columns: {
          identitynumber: {
            title: 'Identity Number'
          },
          surname: {
            title: 'Surname',
          },
          fullnames: {
            title: 'Full Names',
          },
          title: {
            title: 'Title',
          },
          segment: {
            title: 'Segment',
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
