import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
})
export class SignupPage {
  nome: string = '';
  username: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  tipoUsuario: string = '';
  aceitaTermos: boolean = false;

  constructor(private router: Router) {}

  onSignup(event: Event) {
    event.preventDefault();
    
    if (!this.nome || !this.username || !this.email || !this.senha || !this.tipoUsuario) {
      console.log('Preencha todos os campos');
      return;
    }
    
    if (this.senha !== this.confirmarSenha) {
      console.log('As senhas não coincidem');
      return;
    }
    
    if (!this.aceitaTermos) {
      console.log('Você deve aceitar os termos');
      return;
    }
    
    console.log('Cadastro realizado:', {
      nome: this.nome,
      username: this.username,
      email: this.email,
      tipoUsuario: this.tipoUsuario,
    });
    
    this.router.navigate(['/entrar']);
  }

  navigateToLogin() {
    this.router.navigate(['/entrar']);
  }

  openTerms() {
    console.log('Abrir Termos e Condições');
  }
}
