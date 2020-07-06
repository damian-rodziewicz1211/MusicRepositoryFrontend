
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {LoginComponent} from "./_components/login/login.component";
import {RegisterComponent} from "./_components/register/register.component";
import {TracksComponent} from "./_components/tracks/tracks.component";
import {AlbumsComponent} from "./_components/albums/albums.component";




const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tracks', component: TracksComponent, canActivate: [AuthGuard]},
  { path: 'albums', component: AlbumsComponent, canActivate: [AuthGuard]},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
