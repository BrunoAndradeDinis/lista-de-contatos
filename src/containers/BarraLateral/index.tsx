import FiltroSelecionavel from "../../components/FiltroSelecionavel";
import * as S from "./styles";

const BarraLateral = () => {
  return (
    <>
      <S.Aside>
        <S.TituloPrincipal to={"/"}>
          <S.Logo>
            <img src="contact.png" alt="logo" />
          </S.Logo>
          <h1> Lista</h1>
        </S.TituloPrincipal>

        <FiltroSelecionavel ativo={true} contador={23} titulo="Todos os contatos" icon="icons/contatos.png"/>
        <FiltroSelecionavel ativo={false} contador={12} titulo="Familia" icon="icons/familia.png"/>
        <FiltroSelecionavel ativo={false} contador={10} titulo="Trabalho" icon="icons/escritorio.png"/>
        <FiltroSelecionavel ativo={false} contador={1} titulo="Amigos" icon="icons/amigos.png"/>
        <FiltroSelecionavel ativo={false} contador={1} titulo="Favoritos" icon="icons/estrela-fill.png"/>
      </S.Aside>
    </>
  );
};

export default BarraLateral;
