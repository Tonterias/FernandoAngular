import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './components/body/body.component';

const APP_ROUTES: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
