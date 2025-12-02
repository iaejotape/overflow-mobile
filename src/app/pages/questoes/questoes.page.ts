import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule]
})
export class QuestoesPage {
  menuAtivo: string = 'questoes';

  constructor(private router: Router) {}

  navegarPara(rota: string) {
    this.menuAtivo = rota;
    if (rota === 'home') {
      this.router.navigate(['/dashboard']);
    } else if (rota === 'questoes') {
      // Já está na página
    } else {
      console.log('Navegar para:', rota);
    }
  }

  novaQuestao() {
    this.router.navigate(['/adicionar-questao']);
  }
}
