import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarShipsComponent } from './starshipslist';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';
import { CardshipComponent } from './cardship/cardship.component';

const routes: Routes = [
    { path: '', component: StarShipsComponent, canActivate: [AuthGuard] },
    { path: 'cardship', component: CardshipComponent, canActivate: [AuthGuard] },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }