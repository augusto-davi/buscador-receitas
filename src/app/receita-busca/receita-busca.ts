import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Receita } from './service/receita';

@Component({
  selector: 'app-receita-busca',
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [Receita],
  templateUrl: './receita-busca.html',
  styleUrl: './receita-busca.scss'
})
export class ReceitaBusca {
  ingrediente = '';

  buscarReceitas(){
    console.log('Buscando receitas com:', this.ingrediente);
  }
}
