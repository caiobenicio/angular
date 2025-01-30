import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: '**', component: HomeComponent, canActivate: [authGuard] },
];

