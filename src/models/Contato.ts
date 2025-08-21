class Contato {
  nome: string;
  email: string;
  categoria: string;
  telefone: number;
  id: number;
  favorito: boolean;

  constructor(
    nome: string,
    email: string,
    categoria: string,
    telefone: number,
    id: number,
    favorito: boolean = false
  ) {
    this.nome = nome;
    this.categoria = categoria;
    this.email = email;
    this.telefone = telefone;
    this.id = id;
    this.favorito = favorito;
  }
}

export default Contato;
