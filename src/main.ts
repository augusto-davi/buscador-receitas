import { bootstrapApplication } from '@angular/platform-browser';
import { ReceitaBusca } from './app/receita-busca/receita-busca';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(ReceitaBusca, {providers: [provideHttpClient()]})
  .catch((err) => console.error(err));
