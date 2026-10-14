import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-jogo-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './jogo-card.html',
  styleUrl: './jogo-card.css'
})
export class JogoCard {
  @Input({ required: true }) jogo!: Jogo;
}
