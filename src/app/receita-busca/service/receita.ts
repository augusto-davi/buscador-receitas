import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Receita {
  private http = inject(HttpClient);
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  
  buscarPorIngrediente(ingrediente: string){
    return this.http.get(`${this.baseUrl}${ingrediente}`);
  }
}
