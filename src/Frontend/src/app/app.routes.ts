import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: '**', redirectTo: '' }
];
