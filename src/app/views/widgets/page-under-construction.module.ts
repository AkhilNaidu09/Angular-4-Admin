import { NgModule } from '@angular/core';
import { PageUnderConstruction } from 'app/views/widgets/page-under-construction.components';
import { PageUnderConstructionRoutingModule } from 'app/views/widgets/page-under-construction.routing.module';

@NgModule({
    imports: [
        PageUnderConstructionRoutingModule
    ],
    declarations: [PageUnderConstruction]
})
export class PageUnderConstructionModule { }
