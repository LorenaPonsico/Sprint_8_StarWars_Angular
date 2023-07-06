import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';
import { CardshipComponent } from './cardship/cardship.component';
import { ListShipsComponent } from './listships/listships.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'listships', canActivate: [AuthGuard], children: [
            { path: '', component: ListShipsComponent },
            { path: 'cardship/:shipId', component: CardshipComponent },
        ]
    },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: '**', redirectTo: 'listships/cardship' } // Redirect all unknown routes to listships/cardship
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


