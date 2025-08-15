import * as S from "./styles";

export type TypeContato = {
  nome: string;
  email: string;
  telefone: number;
  categoria: string;
};

const validaCategoria = (categoria: string) => {
  if (categoria === "amigos") {
    return "icons/amigos.png";
  } else if (categoria === "familia") {
    return "icons/familia.png";
  } else {
    return "icons/escritorio.png";
  }
};

const Contato = ({ email, nome, telefone, categoria }: TypeContato) => {
  return (
    <S.ContentContato>
      <S.ContentNome>
        <div>
          <img src={validaCategoria(categoria)} alt={categoria} />
        </div>
        <S.Input type="text" value={nome} />
      </S.ContentNome>
      <div>
        <S.Input type="text" value={email} />
      </div>
      <div>
        <S.Input type="tel" value={telefone} min={9999999999} />
      </div>
      <S.OpcoesFuncionalidade>
        <S.BotaoFuncionalidade>
          <img
            src="icons/estrela.png"
            alt="favoritar"
            width="12px"
            height="12px"
          />
        </S.BotaoFuncionalidade>
        <S.BotaoFuncionalidade>
          <img src="icons/caneta.png" alt="editar" width="12px" height="12px" />
        </S.BotaoFuncionalidade>
        <S.BotaoFuncionalidade>
          <img
            src="icons/lata-de-lixo.png"
            alt="excluir"
            width="12px"
            height="12px"
          />
        </S.BotaoFuncionalidade>
      </S.OpcoesFuncionalidade>
    </S.ContentContato>
  );
};

export default Contato;
