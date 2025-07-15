import { bootstrapApplication } from '@angular/platform-browser';
import { ReceitaBusca } from './app/receita-busca/receita-busca';

bootstrapApplication(ReceitaBusca)
  .catch((err) => console.error(err));
