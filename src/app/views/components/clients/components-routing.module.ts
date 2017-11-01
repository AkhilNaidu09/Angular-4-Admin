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
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Associations'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
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
