import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
