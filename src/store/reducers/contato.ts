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
    },
    {
      nome: "Honey",
      email: "outro@mail.com",
      categoria: "familia",
      telefone: 1512312331,
      id: 2,
    },
    {
      nome: "Malone",
      email: "outairo@mail.com",
      categoria: "trabalho",
      telefone: 1512312331,
      id: 3,
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
  },
});

export const { editar, remover } = contatoSlice.actions;
export default contatoSlice.reducer;
