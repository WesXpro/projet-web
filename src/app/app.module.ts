
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importer RouterModule
import { routes } from './app.routes';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';
import { ProjetComponent } from './projet/projet.component'
import { ProfileComponent} from './profile/profile.component';
 

@NgModule({
  declarations: [
 
    LoginComponent,
    SignupComponent,
    HomeComponent,
    StagesComponent, 
    ProjetComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Utilisation des routes dans RouterModule
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


