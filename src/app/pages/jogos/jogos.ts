import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JogoCard } from '../../components/jogo-card/jogo-card';
import { Jogo } from '../../models/jogo.model';
import { JogoService } from '../../services/jogo.service';

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [FormsModule, JogoCard],
  templateUrl: './jogos.html',
  styleUrl: './jogos.css'
})
export class Jogos {
  private readonly jogoService = inject(JogoService);
  busca = '';
  categoria = '';
  readonly categorias = [...new Set(this.jogoService.listar().map((jogo) => jogo.categoria))].sort();

  get jogosFiltrados(): Jogo[] {
    const porNome = this.jogoService.buscarPorNome(this.busca);
    const idsCorrespondentes = new Set(porNome.map((jogo) => jogo.id));
    return this.jogoService.filtrarPorCategoria(this.categoria).filter((jogo) => idsCorrespondentes.has(jogo.id));
  }
}
