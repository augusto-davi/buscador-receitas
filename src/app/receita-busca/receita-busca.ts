import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receita-busca',
  imports: [FormsModule],
  templateUrl: './receita-busca.html',
  styleUrl: './receita-busca.scss'
})
export class ReceitaBusca {
  ingrediente = '';

  buscarReceitas(){
    console.log('Buscando receitas com:', this.ingrediente);
  }
}
