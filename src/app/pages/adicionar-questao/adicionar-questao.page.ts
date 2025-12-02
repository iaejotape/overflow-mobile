import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-adicionar-questao',
  templateUrl: './adicionar-questao.page.html',
  styleUrls: ['./adicionar-questao.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class AdicionarQuestaoPage {
  categoriaSelecionada: string = '';
  dificuldadeSelecionada: string = '';

  categorias = ['Matemática', 'Lógica', 'Strings', 'Arrays', 'Algoritmos', 'Boas Vindas', 'Recursão', 'Grafos'];

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/questoes']);
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = this.categoriaSelecionada === categoria ? '' : categoria;
  }

  selecionarDificuldade(dificuldade: string) {
    this.dificuldadeSelecionada = this.dificuldadeSelecionada === dificuldade ? '' : dificuldade;
  }

  adicionarQuestao() {
    console.log('Questão adicionada!');
    this.router.navigate(['/questoes']);
  }
}
