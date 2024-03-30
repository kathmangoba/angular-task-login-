import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component')
        .then((comp) => comp.LoginComponent)
        .catch(),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then((comp) => comp.DashboardComponent)
        .catch(),
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
