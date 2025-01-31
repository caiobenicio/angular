import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SessionComponent } from './pages/session/session.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: 'login',   component: LoginComponent },
    { path: '',        component: SessionComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'session', component: SessionComponent, canActivate: [AuthGuard] },
    //{ path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
    //{ path: 'count',   component: CountComponent,   canActivate: [AuthGuard] },
    //{ path: '**',      component: SessionComponent, canActivate: [AuthGuard] },
];



// { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard.canActivate]},
// { path: 'login', component: LoginComponent },
// { path: 'home', component: HomeComponent, canActivate: [AuthGuard.canActivate] },
// { path: '**', component: LoginComponent },