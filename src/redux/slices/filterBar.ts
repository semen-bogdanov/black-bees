import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface FilterSliceState {
	currentFilter: boolean
}

const initialState: FilterSliceState = {
	currentFilter: false, // фильтрация при клике на кнопку фильтра
}

const filterBar = createSlice({
	name: 'filterBar',
	initialState,
	reducers: {
		setCurrentFilter(state, action: PayloadAction<any>) {
			state.currentFilter = action.payload
		},
	},
})

export const selectCurrentFilter = (state: RootState) =>
	state.filterBar.currentFilter

export const { setCurrentFilter } = filterBar.actions

export default filterBar.reducer
