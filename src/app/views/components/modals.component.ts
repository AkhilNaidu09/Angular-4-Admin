import { Component, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  templateUrl: 'modals.component.html'
})
export class ModalsComponent {
  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      columnTitle: '',
      position: 'right'
    },
    columns: {
      companyName: {
        title: 'Name',
      },
      status: {
        title: 'Status',
      },
      createDate: {
        title: 'Created',
      }
    },
  };

  data = [
    {
      id: 19,
      companyName: "ABSA",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-02T00:08:35.193"
    },
    {
      id: 16,
      companyName: "Advetech",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-01-24T22:52:33.34"
    },
    {
      id: 22,
      companyName: "Blue Valley Club House",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-06T13:32:57.557"
    },
    {
      id: 23,
      companyName: "Blue Valley Golf Estate",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-13T12:12:37.523"
    },
    {
      id: 17,
      companyName: "G4S Security",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-01-25T09:32:51.553"
    },
    {
      id: 21,
      companyName: "Hollard Insurance",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-06T13:28:31.777"
    },
    {
      id: 8,
      companyName: "Imperial",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-01-24T15:09:32.303"
    },
    {
      id: 18,
      companyName: "Legacy Hotels",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-01T21:55:06.807"
    },
    {
      id: 24,
      companyName: "Nedbank",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-14T17:01:51.007"
    },
    {
      id: 26,
      companyName: "Rivonia High School",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-20T11:57:00.353"
    },
    {
      id: 25,
      companyName: "Rivonia Pre-School",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-20T11:37:04.98"
    },
    {
      id: 30,
      companyName: "Sandeep Gardas",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-06-11T10:05:41.683"
    },
    {
      id: 20,
      companyName: "Standard Bank",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-02T09:38:40.597"
    },
    {
      id: 28,
      companyName: "Toine office",
      isSupplier: false,
      isPublic: false,
      status: "ACTIVE",
      createDate: "2017-02-21T10:18:38.237"
    }
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }
}
