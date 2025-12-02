import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {
  // Dados do usuário
  usuario = {
    nome: 'User',
    codigo: 'OVER-001',
    registradoEm: '01/05/2025',
    tempoOnline: '7 horas e 77 minutos',
    linguagens: ['html', 'js', 'csharp'],
    avatar: 'assets/img/avatar-owl.png'
  };

  // Conquistas
  conquistas = [
    { id: 1, nome: 'Primeira Quest', icone: 'assets/img/conquista1.svg', desbloqueada: true },
    { id: 2, nome: 'Mestre Código', icone: 'assets/img/conquista2.svg', desbloqueada: true },
  ];

  // Insígnias
  insignias = [
    { id: 1, nome: 'CAIS Tech', icone: 'assets/img/caistech.svg', ativa: true },
  ];

  // Progresso mensal (simulado)
  progressoMeses = ['Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  // Menu ativo
  menuAtivo: string = 'home';

  constructor(private router: Router) {}

  ngOnInit() {
    this.getGreeting();
  }

  saudacao: string = '';

  getGreeting() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) {
      this.saudacao = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
      this.saudacao = 'Boa tarde';
    } else {
      this.saudacao = 'Boa noite';
    }
  }

  navegarPara(rota: string) {
    this.menuAtivo = rota;
    if (rota === 'questoes') {
      this.router.navigate(['/questoes']);
    } else {
      console.log('Navegar para:', rota);
    }
  }

  abrirConfiguracoes() {
    console.log('Abrir configurações');
  }

  logout() {
    this.router.navigate(['/entrar']);
  }
}
