import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { DashboardComponent } from './dashboard.component';

// import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            // { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Barra Progreso' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const DASHBOARD_ROUTES = RouterModule.forChild( dashboardRoutes );


// const dashboardRoutes: Routes = [
//     {
//         path: '',
//         component: DashboardComponent,
//         children: [
//             { path: '', redirectTo: '/home', pathMatch: 'full' }
//         ]
//     }
// ];
// export const DASHBOARD_ROUTES = RouterModule.forChild( dashboardRoutes );
