import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
 
 
  
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';  // Déclare la propriété email
  password: string = '';  // Déclare la propriété password
  constructor( private router: Router) {}
 
  // Ajoute ici une méthode de traitement du formulaire, par exemple pour la connexion
  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

onLogin() {
 
}
gotosignup(){
  //this.router.navigate(["/signup"])
}


}


