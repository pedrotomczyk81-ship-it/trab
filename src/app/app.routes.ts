import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jogos } from './pages/jogos/jogos';
import { JogoDetalhes } from './pages/jogo-detalhes/jogo-detalhes';
import { CadastrarJogo } from './pages/cadastrar-jogo/cadastrar-jogo';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: Home, title: 'Início | GameHub' },
  { path: 'jogos', component: Jogos, title: 'Catálogo | GameHub' },
  { path: 'jogos/:id', component: JogoDetalhes, title: 'Detalhes | GameHub' },
  { path: 'cadastrar', component: CadastrarJogo, title: 'Cadastrar jogo | GameHub' },
  { path: 'sobre', component: Sobre, title: 'Sobre | GameHub' },
  { path: '**', redirectTo: '' }
];
