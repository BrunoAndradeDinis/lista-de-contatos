import { useSelector } from "react-redux";
import Contato from "../../components/Contato";
import ContatoType from "../../models/Contato";
import { Content } from "../../styles";
import * as S from "./styles";
import type { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { categoria, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraContatos = (): ContatoType[] => {
    let contatosFiltrados = itens;

    if (categoria) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      contatosFiltrados = contatosFiltrados.filter(
        (c) =>
          c.nome.toLocaleLowerCase().search(categoria.toLocaleLowerCase()) >= 0
      );
    }
    if (criterio === "amigos") {
      contatosFiltrados = contatosFiltrados.filter(
        (c) => c.categoria === criterio
      );
    }

    if (criterio === "trabalho") {
      contatosFiltrados = contatosFiltrados.filter(
        (c) => c.categoria === criterio
      );
    }
    if (criterio === "familia") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      contatosFiltrados = contatosFiltrados.filter(
        (c) => c.categoria === criterio
      );
    }
    return contatosFiltrados;
  };

  return (
    <S.MainContainer>
      <S.ContainerPesquisa>
        <S.Procurar placeholder="Procurar" />
      </S.ContainerPesquisa>
      <S.TituloContainer>
        <h2>Contatos {itens.length}</h2>
      </S.TituloContainer>

      <Content>
        <h4>Nome</h4>
        <h4>E-mail</h4>
        <h4>Telefone</h4>
      </Content>
      <S.Container>
        {filtraContatos().map((contato) => (
          <Contato
            key={contato.id}
            categoria={contato.categoria}
            email={contato.email}
            nome={contato.nome}
            telefone={contato.telefone}
          />
        ))}
      </S.Container>
    </S.MainContainer>
  );
};

export default ListaDeContatos;
