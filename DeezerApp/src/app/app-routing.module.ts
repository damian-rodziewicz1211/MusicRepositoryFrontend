import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {MymusicComponent} from "./components/mymusic/mymusic.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BrowseComponent} from "./components/browse/browse.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./helpers/auth.guard";
import {RegisterComponent} from "./components/register/register.component";



const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: DashboardComponent},
  { path: 'components/mymusic', component: MymusicComponent, canActivate: [AuthGuard] },
  { path: 'components/browse', component: BrowseComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: ''}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
