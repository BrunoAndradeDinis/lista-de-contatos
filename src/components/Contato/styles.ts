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
  }
  &:hover::after {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover button {
    display: inline-block;
  }

  &:hover div div::after {
    background-color: rgba(255, 255, 255, 0.6);
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

  &:focus{
    color: #000;
  }
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

export const ContentNome = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 1rem;

    img {
      height: 20px;
      position: relative;
    }
  }

  div::after {
    content: "";
    border-radius: 50%;
    background-color: rgba(108, 247, 217, 0.23);
    position: absolute;
    padding: 0.9rem;
    top: 0;
    left: -0.3rem;
    z-index: 1;
  }
`;
