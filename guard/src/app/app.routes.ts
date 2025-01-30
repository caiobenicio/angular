import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { protheusGuard } from './guard/protheus.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard.canActivate]},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard.canActivate] },
    { path: '**', component: LoginComponent },
];
