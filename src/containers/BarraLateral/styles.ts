import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Link } from "react-router-dom";
import { BotaoAdd } from "../../components/BotaoAdicionar/styles";

export const Aside = styled.aside`
  padding: 1rem;
  background-color: ${variaveis.fundoLateral};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const TituloPrincipal = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: inherit;
  h1 {
    font-size: 1.75rem;
  }
  margin-bottom: 1rem;
`;

export const Logo = styled.div`
  img {
    width: 32px;
    height: 32px;
  }
`;

export const BotaoVoltar = styled(BotaoAdd)`` 