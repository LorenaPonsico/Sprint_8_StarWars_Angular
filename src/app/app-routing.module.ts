import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';
import { CardshipComponent } from './cardship/cardship.component';
import { ListShipsComponent } from './listships/listships.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent  },
    { path: 'welcome', component: WelcomeComponent  },
// {path: 'home', component: HomeComponent},
    { path: 'listships', component: ListShipsComponent, canActivate: [AuthGuard] },
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


