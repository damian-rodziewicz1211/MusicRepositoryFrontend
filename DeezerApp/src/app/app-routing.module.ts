import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MymusicComponent} from "./mymusic/mymusic.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BrowseComponent} from "./browse/browse.component";


const routes: Routes = [
  { path: '',redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent},
  { path: 'mymusic', component: MymusicComponent },
  { path: 'browse', component: BrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
