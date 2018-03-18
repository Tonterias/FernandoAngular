import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';

// Temporal
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        Pagenotfound404Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        Pagenotfound404Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ]
})
export class SharedModule { }
