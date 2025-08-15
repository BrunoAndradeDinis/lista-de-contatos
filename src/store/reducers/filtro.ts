import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
  categoria: string;
  criterio: "amigos" | "todos" | "familia" | "trabalho" | "favoritos";
};

const initialState = {
  categoria: "",
  criterio: "todos",
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alteraCategoria: (state, action: PayloadAction<string>) => {
      state.categoria = action.payload;
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.categoria = action.payload.categoria;
    },
  },
});

export default filtroSlice.reducer;
export const { alteraCategoria, alteraFiltro } = filtroSlice.actions;
