import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormsComponent } from 'app/views/components/forms.component';
import { ModalsComponent } from 'app/views/components/modals.component';
import { SocialButtonsComponent } from 'app/views/components/social-buttons.component';
import { SwitchesComponent } from 'app/views/components/switches.component';
import { TablesComponent } from 'app/views/components/tables.component';
import { TabsComponent } from 'app/views/components/tabs.component';
import { ClientsComponent } from 'app/views/components/clients/clients.component';
import { ButtonsComponent } from 'app/views/components/buttons.component';
import { CardsComponent } from 'app/views/components/cards.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clients'
    },
    children: [
      {
        path: '',
        component: ClientsComponent,
        data: {
          title: 'Details'
        }
      },
      {
        path: 'associations',
        component: ButtonsComponent,
        data: {
          title: 'Associations'
        }
      },
      {
        path: 'deceased-estates',
        component: CardsComponent,
        data: {
          title: 'Deceased Estates'
        }
      },
      {
        path: 'individuals',
        component: FormsComponent,
        data: {
          title: 'Individuals'
        }
      },
      {
        path: 'leagal-entities',
        component: ModalsComponent,
        data: {
          title: 'Leagal Entities'
        }
      },
      {
        path: 'curatorships',
        component: SocialButtonsComponent,
        data: {
          title: 'Curatorships'
        }
      },
      {
        path: 'trusts',
        component: SwitchesComponent,
        data: {
          title: 'Trusts'
        }
      },
      {
        path: 'individual-details',
        component: TabsComponent,
        data: {
          title: 'Individual Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
