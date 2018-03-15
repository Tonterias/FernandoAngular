import { NgModule } from '@angular/core';

// ROUTES
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { DbheaderComponent } from './dbshared/dbheader/dbheader.component';
import { DbfooterComponent } from './dbshared/dbfooter/dbfooter.component';
import { DbsidebarComponent } from './dbshared/dbsidebar/dbsidebar.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// ng2-charts
// import { ChartsModule } from 'ng2-charts';

// SERVICES

// COMPONENTS

@NgModule({
  declarations: [
    DashboardComponent,
    DbheaderComponent,
    DbfooterComponent,
    DbsidebarComponent,
    ProgressComponent,
    Graficas1Component,
    AccoutSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccoutSettingsComponent,
    PromesasComponent
  ],
  imports: [
    DASHBOARD_ROUTES
  ],
  providers: []
})
export class DashboardModule { }
