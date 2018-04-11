import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import {AppComponent} from './index';
import { RegisterComponent} from './register/register.component';
import { AuthGuard } from './_guards/index';
import {Parking} from './parking/parking.component';
import {GenerateParking} from './parking/generete-parking.component';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
   // {path: 'pool', component: PoolComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'parking', component: Parking},
    {path: 'generate-parking', component: GenerateParking},
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
