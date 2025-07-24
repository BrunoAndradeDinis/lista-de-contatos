import * as S from "./styles";

type Contato = {
  nome: string;
  email: string;
  telefone: number;
};

const Contato = ({ email, nome, telefone }: Contato) => {
  return (
    <S.ContentContato>
      <div>
        <S.Input type="text" value={nome} />
      </div>
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
