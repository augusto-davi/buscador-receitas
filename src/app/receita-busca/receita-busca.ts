import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Receita } from './service/receita';

@Component({
  selector: 'app-receita-busca',
  imports: [FormsModule, CommonModule],
  providers: [Receita],
  templateUrl: './receita-busca.html',
  styleUrl: './receita-busca.scss'
})
export class ReceitaBusca {
  ingrediente = '';
  receitas: any[] = [];
  receitaService = inject(Receita);
  carregando = false;
  erro = '';

  buscarReceitas() {
    if (!this.ingrediente.trim()) return;

    this.carregando = true;

    this.receitaService.buscarPorIngrediente(this.ingrediente.trim()).subscribe({
      next: (res: any) => {
        this.receitas = res.meals || [];
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao buscar receitas.';
        this.carregando = false;
      }
    });
  }
}
