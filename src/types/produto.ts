export interface Review {
  nome: string;
  comentario: string;
  estrelas: number;
}

export interface Produto {
  id: string;
  categoria: string;
  slug_categoria: string;
  thumbnail: string;
  nome: string;
  descricao: string;
  valor: string;
  checkout_url: string;
  rate: number;
  avaliacoes_count: number;
  tags: string[];
  reviews_usuarios: Review[]; // Agora ele vai encontrar o Review acima
}
