import { useDispatch, useSelector } from "react-redux";
import FiltroSelecionavel from "../../components/FiltroSelecionavel";
import * as S from "./styles";
import { alteraFiltro } from "../../store/reducers/filtro";
import type { RootReducer } from "../../store";

const BarraLateral = () => {
  const dispatch = useDispatch();
  const { criterio } = useSelector((state: RootReducer) => state.filtro);
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  const contarContatos = (categoria: string) => {
    if (categoria === "todos") return itens.length;
    if (categoria === "favoritos") return itens.filter(c => c.favorito).length;
    return itens.filter(c => c.categoria === categoria).length;
  };

  const handleFiltro = (novoCriterio: "amigos" | "todos" | "familia" | "trabalho" | "favoritos") => {
    dispatch(alteraFiltro(novoCriterio));
  };

  return (
    <>
      <S.Aside>
        <S.TituloPrincipal to={"/"}>
          <S.Logo>
            <img src="contact.png" alt="logo" />
          </S.Logo>
          <h1> Lista</h1>
        </S.TituloPrincipal>

        <FiltroSelecionavel 
          ativo={criterio === "todos"} 
          contador={contarContatos("todos")} 
          titulo="Todos os contatos" 
          icon="icons/contatos.png"
          onClick={() => handleFiltro("todos")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "familia"} 
          contador={contarContatos("familia")} 
          titulo="Familia" 
          icon="icons/familia.png"
          onClick={() => handleFiltro("familia")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "trabalho"} 
          contador={contarContatos("trabalho")} 
          titulo="Trabalho" 
          icon="icons/escritorio.png"
          onClick={() => handleFiltro("trabalho")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "amigos"} 
          contador={contarContatos("amigos")} 
          titulo="Amigos" 
          icon="icons/amigos.png"
          onClick={() => handleFiltro("amigos")}
        />
        <FiltroSelecionavel 
          ativo={criterio === "favoritos"} 
          contador={contarContatos("favoritos")} 
          titulo="Favoritos" 
          icon="icons/estrela-fill.png"
          onClick={() => handleFiltro("favoritos")}
        />
      </S.Aside>
    </>
  );
};

export default BarraLateral;
