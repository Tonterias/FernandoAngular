import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { BodyComponent } from './components/body/body.component';

import { Pagenotfound404Component } from './components/shared/pagenotfound404/pagenotfound404.component';

const appRoutes: Routes = [
  { path: 'home', component: BodyComponent },
  // ng { path: '**', pathMatch: 'full', redirectTo: 'home' }
  { path: '**', component: Pagenotfound404Component }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes );
