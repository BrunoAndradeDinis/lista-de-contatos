import Contato from "../../components/Contato";
import { Content } from "../../styles";
import * as S from "./styles";

const ListaDeContatos = () => {
  return (
    <S.MainContainer>
      <S.ContainerPesquisa>
        <S.Procurar placeholder="Procurar" />
      </S.ContainerPesquisa>
      <S.TituloContainer>
        <h2>Contatos (23)</h2>
      </S.TituloContainer>

      <Content>
        <h4>Nome</h4>
        <h4>E-mail</h4>
        <h4>Telefone</h4>
      </Content>
      <S.Container>
        <Contato
          email="endereco.de@email.com"
          nome="Brinu"
          telefone={123121312}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Honey"
          telefone={121932193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Joe"
          telefone={1291232193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Zé"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Malone"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Doido"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Brinu"
          telefone={123121312}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Honey"
          telefone={121932193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Joe"
          telefone={1291232193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Zé"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Malone"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Doido"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Brinu"
          telefone={123121312}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Honey"
          telefone={121932193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Joe"
          telefone={1291232193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Zé"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Malone"
          telefone={12912312332193}
        />
        <Contato
          email="endereco.de@email.com"
          nome="Doido"
          telefone={12912312332193}
        />
      </S.Container>
    </S.MainContainer>
  );
};

export default ListaDeContatos;
