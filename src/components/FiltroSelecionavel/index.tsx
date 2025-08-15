// import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
// import type { RootReducer } from "../../store";
// import { alteraFiltro } from "../../store/reducers/filtro";

type Props = {
  ativo: boolean;
  titulo: string;
  contador: number;
  icon: string;
};

const FiltroSelecionavel = ({ ativo, titulo, contador, icon }: Props) => {
  // const dispatch = useDispatch();
  // const { filtro } = useSelector((state: RootReducer) => state);

  // const filtrar = (criterio, categoria) => {
  //   dispatch(alteraFiltro(criterio, categoria));
  // };

  return (
    <>
      <S.Filtro ativo={ativo}>
        <S.Icon>
          <img src={icon} alt={titulo} />
        </S.Icon>
        <S.Detalhes>
          <p>{titulo}</p>
          <span>{contador}</span>
        </S.Detalhes>
      </S.Filtro>
    </>
  );
};

export default FiltroSelecionavel;
