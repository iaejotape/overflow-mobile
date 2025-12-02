import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule]
})
export class QuestoesPage {
  // Menu ativo via serviço
  get menuAtivo(): string {
    return this.navService.menuAtivo;
  }

  constructor(private router: Router, public navService: NavigationService) {}

  navegarPara(rota: string) {
    this.navService.navegarPara(rota);
  }

  novaQuestao() {
    this.router.navigate(['/adicionar-questao']);
  }
}
