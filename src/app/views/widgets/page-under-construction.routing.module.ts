import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageUnderConstruction } from 'app/views/widgets/page-under-construction.components';

const routes: Routes = [
    {
        path: '',
        component: PageUnderConstruction,
        data: {
            title: 'Calculations'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageUnderConstructionRoutingModule { }
