class Contato {
  nome: string;
  email: string;
  categoria: string;
  telefone: number;
  id: number;

  constructor(
    nome: string,
    email: string,
    categoria: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome;
    this.categoria = categoria;
    this.email = email;
    this.telefone = telefone;
    this.id = id;
  }
}

export default Contato;
