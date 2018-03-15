import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        Pagenotfound404Component
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
        Pagenotfound404Component
    ]
})
export class SharedModule { }
