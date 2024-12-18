import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
 
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';
import { ProjetComponent } from './projet/projet.component';
import { ProfileComponent} from './profile/profile.component';
 


export const routes: Routes  = [
  { path: 'login', component: LoginComponent },
  {path : 'signup', component: SignupComponent},
  {path:'home' , component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //route par defaut
  { path: 'stages', component: StagesComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'profile', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }

