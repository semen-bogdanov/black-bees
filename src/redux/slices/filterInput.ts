import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FilterSliceStateI {
  currentPage: number;
  currentInput: string;
  click: boolean;
}

const initialState: FilterSliceStateI = {
  currentPage: 1, // погинация
  currentInput: '', // фильтрация категорий индекс
  click: false, // фильтрация категорий
};

const filterInput = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<any>) {
      state.currentPage = action.payload;
    },
    setInput(state, action: PayloadAction<any>) {
      state.currentInput = action.payload;
    },
    setInputClick(state, action: PayloadAction<any>) {
      state.click = action.payload;
    },
  },
});

export const selectCurrentPageI = (state: RootState) => state.input.currentPage;
export const selectInput = (state: RootState) => state.input.currentInput;
export const selectInputClick = (state: RootState) => state.input.click;

export const { setCurrentPage } = filterInput.actions;
export const { setInput } = filterInput.actions;
export const { setInputClick } = filterInput.actions;

export default filterInput.reducer;
