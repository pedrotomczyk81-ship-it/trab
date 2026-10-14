import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo.service';

@Component({
  selector: 'app-cadastrar-jogo',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-jogo.html',
  styleUrl: './cadastrar-jogo.css'
})
export class CadastrarJogo {
  readonly jogoService = inject(JogoService);
  private readonly router = inject(Router);
  readonly categorias = ['Ação', 'Aventura', 'Esportes', 'Plataforma', 'RPG', 'Simulação', 'Estratégia'];
  jogo = {
    nome: '',
    descricao: '',
    categoria: 'Ação',
    preco: 0,
    avaliacao: 0,
    imagem: '',
    disponivel: true
  };

  salvar(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const novoJogo = this.jogoService.adicionar({ ...this.jogo });
    void this.router.navigate(['/jogos', novoJogo.id]);
  }
}
