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
  // Modal de exclusão
  mostrarModalExclusao: boolean = false;
  questaoParaExcluir: { id: number; titulo: string } | null = null;

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

  editarQuestao(id: number) {
    console.log('Editar questão:', id);
    // Navegar para página de edição com o ID
    this.router.navigate(['/adicionar-questao'], { queryParams: { id: id, modo: 'editar' } });
  }

  confirmarExclusao(id: number, titulo: string) {
    this.questaoParaExcluir = { id, titulo };
    this.mostrarModalExclusao = true;
  }

  fecharModal() {
    this.mostrarModalExclusao = false;
    this.questaoParaExcluir = null;
  }

  excluirQuestao() {
    if (this.questaoParaExcluir) {
      console.log('Excluindo questão:', this.questaoParaExcluir.id);
      // Aqui você implementaria a lógica real de exclusão
      // Por exemplo: this.questoesService.excluir(this.questaoParaExcluir.id)
      
      // Fechar o modal após exclusão
      this.fecharModal();
    }
  }
}
