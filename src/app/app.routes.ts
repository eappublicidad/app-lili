import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
