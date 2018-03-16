import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        Pagenotfound404Component
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        Pagenotfound404Component
    ]
})
export class SharedModule { }
