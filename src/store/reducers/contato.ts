import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type TarefasState = {
  itens: Contato[];
};

const initialState: TarefasState = {
  itens: [
    {
      nome: "Bruno",
      email: "esse@mail.com",
      categoria: "amigos",
      telefone: 1640028922,
      id: 1,
      favorito: false,
    },
    {
      nome: "Bruno",
      email: "esse@mail.com",
      categoria: "amigos",
      telefone: 1640028922,
      id: 2,
      favorito: false,
    },
    {
      nome: "Bruno",
      email: "esse@mail.com",
      categoria: "amigos",
      telefone: 1640028922,
      id: 3,
      favorito: false,
    },
    {
      nome: "Bruno",
      email: "esse@mail.com",
      categoria: "amigos",
      telefone: 1640028922,
      id: 4,
      favorito: false,
    },
    {
      nome: "Bruno",
      email: "esse@mail.com",
      categoria: "amigos",
      telefone: 1640028922,
      id: 5,
      favorito: false,
    },
    {
      nome: "Honey",
      email: "outro@mail.com",
      categoria: "familia",
      telefone: 1512312331,
      id: 6,
      favorito: true,
    },
    {
      nome: "Malone",
      email: "outairo@mail.com",
      categoria: "trabalho",
      telefone: 1512312331,
      id: 7,
      favorito: false,
    },
    {
      nome: "Malone",
      email: "outairo@mail.com",
      categoria: "trabalho",
      telefone: 1512312331,
      id: 8,
      favorito: false,
    },
    {
      nome: "Malone",
      email: "outairo@mail.com",
      categoria: "trabalho",
      telefone: 1512312331,
      id: 9,
      favorito: false,
    },
  ],
};

const contatoSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexDoContato >= 0) state.itens[indexDoContato] = action.payload;
    },
    alternarFavorito: (state, action: PayloadAction<number>) => {
      const contato = state.itens.find(c => c.id === action.payload);
      if (contato) {
        contato.favorito = !contato.favorito;
      }
    },
  },
});

export const { editar, remover, alternarFavorito } = contatoSlice.actions;
export default contatoSlice.reducer;
