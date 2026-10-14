import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JogoCard } from '../../components/jogo-card/jogo-card';
import { JogoService } from '../../services/jogo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JogoCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly jogoService = inject(JogoService);
  readonly destaque = this.jogoService.buscarPorId(1)!;
  readonly jogosEmDestaque = this.jogoService.listar().filter((jogo) => [2, 5, 7].includes(jogo.id));

  get totalJogos(): number {
    return this.jogoService.totalJogos();
  }

  get totalGratuitos(): number {
    return this.jogoService.totalGratuitos();
  }
}
