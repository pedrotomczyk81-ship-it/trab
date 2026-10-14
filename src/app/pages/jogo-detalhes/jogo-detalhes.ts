import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Jogo } from '../../models/jogo.model';
import { JogoService } from '../../services/jogo.service';

@Component({
  selector: 'app-jogo-detalhes',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './jogo-detalhes.html',
  styleUrl: './jogo-detalhes.css'
})
export class JogoDetalhes {
  private readonly route = inject(ActivatedRoute);
  private readonly jogoService = inject(JogoService);
  readonly jogo: Jogo | undefined = this.buscarJogo();

  private buscarJogo(): Jogo | undefined {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return Number.isInteger(id) && id > 0 ? this.jogoService.buscarPorId(id) : undefined;
  }
}
