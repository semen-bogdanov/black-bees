import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FilterSliceState {
  currentTag: number;
  click: boolean;
  colorTag: number | null;
}

const initialState: FilterSliceState = {
  currentTag: 0, // фильтрация тегов индекс
  click: false, // фильтрация тегов
  colorTag: 0, // фильтрация тегов цвет кнопки
};

const filterTag = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags1(state, action: PayloadAction<any>) {
      state.currentTag = action.payload;
    },
    setTagsClick(state, action: PayloadAction<any>) {
      state.click = action.payload;
    },
    setColorTags(state, action: PayloadAction<any>) {
      state.colorTag = action.payload;
    },
  },
});

export const selectTags = (state: RootState) => state.tags.currentTag;
export const selectTagsClick = (state: RootState) => state.tags.click;
export const selectColorTags = (state: RootState) => state.tags.colorTag;

export const { setTags1 } = filterTag.actions;
export const { setTagsClick } = filterTag.actions;
export const { setColorTags } = filterTag.actions;

export default filterTag.reducer;
