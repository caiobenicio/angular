import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SessionComponent } from './pages/session/session.component';
import { ProductComponent } from './pages/product/product.component';
import { CountComponent } from './pages/count/count.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: SessionComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: '**', component: SessionComponent, canActivate: [AuthGuard] },
    { path: 'session', component: SessionComponent, canActivateChild: [AuthGuard], children: [
        { path: 'product', component: ProductComponent },
        { path: 'count', component: CountComponent }
    ]
    },
];

