// configureStore - создает хранилище
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filterBar from './slices/filterBar'
import filterCategory from './slices/filterCategory'
import filterInput from './slices/filterInput'
import filterTag from './slices/filterTag'

// хранилище
export const store = configureStore({
	reducer: {
		filters: filterCategory,
		tags: filterTag,
		input: filterInput,
		filterBar: filterBar,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
// типизация useDispatch - 24 урок. 1:05:00
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
