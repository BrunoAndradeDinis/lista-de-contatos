import { configureStore } from "@reduxjs/toolkit";
import filtro from "./reducers/filtro.ts";
import contatos from "./reducers/contato.ts";

export const store = configureStore({
  reducer: {
    filtro: filtro,
    contatos: contatos,
  },
});

export default store;
export type RootReducer = ReturnType<typeof store.getState>;
