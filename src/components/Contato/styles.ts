import styled from "styled-components";
import { Botao, Content } from "../../styles";

export const ContentContato = styled(Content)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
    margin-top: 0.5rem;
    padding: 2rem;
    top: -2rem;
    z-index: -1;
    left: -1rem;
    width: 100%;
  }
  &:hover::after {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover button {
    display: inline-block;
  }
`;

export const Input = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto-mono", monospace;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
`;

export const OpcoesFuncionalidade = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: -0.25rem;
`;

export const BotaoFuncionalidade = styled(Botao)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 36px;
  width: 40px;
  text-align: center;
`;
