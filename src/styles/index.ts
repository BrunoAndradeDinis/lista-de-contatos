import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
  list-style: none;
  text-decoration: none;
  scrollbar-width: none;

  color: #252525;

  body::-webkit-scrollbar{
    width: none;
  }
  
  &:hover{
    transition: .3s ease-in-out;
  }

}

`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  z-index: 1;
  background-color: #fff;
  h4 {
    margin-left: 1rem;
  }

  button {
    display: none;
    cursor: pointer;
  }
`;

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-right: 1rem;
  border: 1px solid transparent;

  &:hover {
    opacity: 0.6;
    border: 1px solid #ccc;
  }
`;

export default EstiloGlobal;
