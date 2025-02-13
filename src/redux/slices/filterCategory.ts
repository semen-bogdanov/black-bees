import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FilterSliceState {
  currentPage: number;
  currentCategory: number;
  click: boolean;
  colorCategory: number | null;
}

const initialState: FilterSliceState = {
  currentPage: 1, // погинация
  currentCategory: 0, // фильтрация категорий индекс
  click: false, // фильтрация категорий
  colorCategory: 0, //  фильтрация тегов цвет кнопки
};

const filterCategory = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<any>) {
      state.currentPage = action.payload;
    },
    setCategory1(state, action: PayloadAction<any>) {
      state.currentCategory = action.payload;
    },
    setCategoryClick(state, action: PayloadAction<any>) {
      state.click = action.payload;
    },
    setColorCategory(state, action: PayloadAction<any>) {
      state.colorCategory = action.payload;
    },
  },
});

export const selectCurrentPage = (state: RootState) => state.filters.currentPage;
export const selectCategory = (state: RootState) => state.filters.currentCategory;
export const selectCategoryClick = (state: RootState) => state.filters.click;
export const selectColorCategory = (state: RootState) => state.filters.colorCategory;

export const { setCurrentPage } = filterCategory.actions;
export const { setCategory1 } = filterCategory.actions;
export const { setCategoryClick } = filterCategory.actions;
export const { setColorCategory } = filterCategory.actions;

export default filterCategory.reducer;
