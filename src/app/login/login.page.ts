import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    // Navega para a home após login
    this.router.navigate(['/home']);
  }

  navigateToSignup() {
    this.router.navigate(['/cadastrar']);
  }

  forgotPassword() {
    // Implementar lógica de recuperação de senha
    console.log('Forgot password clicked');
  }

  socialLogin(provider: string) {
    // Implementar login social
    console.log(`Social login with ${provider}`);
  }
}
