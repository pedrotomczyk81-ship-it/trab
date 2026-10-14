import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo.model';

@Injectable({ providedIn: 'root' })
export class JogoService {
  private jogos: Jogo[] = [
    { id: 1, nome: 'Hades II', descricao: 'Desafie o Titã do Tempo em uma jornada roguelike pelo submundo e além.', categoria: 'Ação', preco: 89.99, avaliacao: 4.9, imagem: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=85', disponivel: true },
    { id: 2, nome: 'Hollow Knight: Silksong', descricao: 'Explore um reino vasto e assombrado em uma aventura de ação e precisão.', categoria: 'Aventura', preco: 79.90, avaliacao: 4.8, imagem: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=85', disponivel: true },
    { id: 3, nome: 'Stardew Valley', descricao: 'Construa uma nova vida no campo, cultive amizades e descubra os segredos do vale.', categoria: 'Simulação', preco: 24.99, avaliacao: 4.9, imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85', disponivel: true },
    { id: 4, nome: 'Apex Legends', descricao: 'Entre na arena com sua equipe e lute para se tornar a última lenda em pé.', categoria: 'Ação', preco: 0, avaliacao: 4.5, imagem: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1000&q=85', disponivel: true },
    { id: 5, nome: 'Baldur’s Gate 3', descricao: 'Reúna seu grupo e decida o destino dos Reinos Esquecidos nesta épica aventura.', categoria: 'RPG', preco: 199.99, avaliacao: 4.9, imagem: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85', disponivel: true },
    { id: 6, nome: 'Celeste', descricao: 'Ajude Madeline a escalar a montanha Celeste e encarar seus próprios desafios.', categoria: 'Plataforma', preco: 36.99, avaliacao: 4.7, imagem: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=85', disponivel: false },
    { id: 7, nome: 'Rocket League', descricao: 'Futebol de alta velocidade com carros-foguete em partidas competitivas.', categoria: 'Esportes', preco: 0, avaliacao: 4.6, imagem: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1000&q=85', disponivel: true },
    { id: 8, nome: 'The Witcher 3: Wild Hunt', descricao: 'Percorra um mundo aberto sombrio como Geralt, caçador de monstros profissional.', categoria: 'RPG', preco: 129.90, avaliacao: 4.8, imagem: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1000&q=85', disponivel: true }
  ];

  listar(): Jogo[] {
    return [...this.jogos];
  }

  buscarPorId(id: number): Jogo | undefined {
    return this.jogos.find((jogo) => jogo.id === id);
  }

  adicionar(jogo: Omit<Jogo, 'id'>): Jogo {
    const novoJogo: Jogo = { ...jogo, id: Math.max(0, ...this.jogos.map((item) => item.id)) + 1 };
    this.jogos = [novoJogo, ...this.jogos];
    return novoJogo;
  }

  filtrarPorCategoria(categoria: string): Jogo[] {
    return categoria ? this.jogos.filter((jogo) => jogo.categoria === categoria) : this.listar();
  }

  buscarPorNome(nome: string): Jogo[] {
    const consulta = nome.trim().toLocaleLowerCase('pt-BR');
    return this.jogos.filter((jogo) => jogo.nome.toLocaleLowerCase('pt-BR').includes(consulta));
  }

  totalJogos(): number {
    return this.jogos.length;
  }

  totalGratuitos(): number {
    return this.jogos.filter((jogo) => jogo.preco === 0).length;
  }
}
