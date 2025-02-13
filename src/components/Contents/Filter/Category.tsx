'use client'
import {
	selectColorCategory,
	setCategory1,
	setCategoryClick,
	setColorCategory,
} from '@/redux/slices/filterCategory'
import {
	selectInput,
	setInput,
	setInputClick,
} from '@/redux/slices/filterInput'
import { setColorTags, setTagsClick } from '@/redux/slices/filterTag'
import { useTemplate } from '@/utils/hooks/useTemplate'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryNum from './CategoryNum'

export default function Category() {
	const dispatch = useDispatch<any>()
	// const [message, setMessage] = useState<any>(null);
	const [category1, setCategory] = useState<any>(null) // Название категорий
	const [quantity, setQuantity] = useState<any>(null) // Количество категорий
	const [colorCategory, setColor] = useState<any>(null) // изменение цвета при выборе категории
	const { data, isFetching, isFetched, isLoading, refetch } = useTemplate()
	const colorCategory1 = useSelector(selectColorCategory)
	const selectInput1 = useSelector(selectInput)
	const [shouldRefetch, setShouldRefetch] = useState(false)

	useEffect(() => {
		// Запускаем refetch через 1 секунду после загрузки компонента
		if (shouldRefetch) {
			const timeoutId = setTimeout(() => {
				refetch()
				// Сбрасываем shouldRefetch, чтобы refetch не выполнялся снова
				setShouldRefetch(false)
			}, 300) // Измените время задержки по необходимости

			// Очищаем таймер при размонтировании компонента
			return () => clearTimeout(timeoutId)
		}
	}, [shouldRefetch, refetch])

	// Используем useMemo для оптимизации вычисления уникальных категорий
	const uniqueCategories = useMemo(() => {
		if (data?.length) {
			return data.reduce((acc: any, current: any) => {
				const concat = acc.find(
					(item: { category: any }) => item.category === current.category
				)
				if (!concat) {
					return acc.concat([current])
				} else {
					return acc
				}
			}, [])
		}
		return []
	}, [data])

	useEffect(() => {
		if (uniqueCategories.length) {
			setCategory(uniqueCategories)
		}
	}, [uniqueCategories])

	// Используем useMemo для оптимизации вычисления количества категорий
	const categoriesQuantity = useMemo(() => {
		setShouldRefetch(true)
		if (data?.length) {
			return data.flatMap((element: any) =>
				element.category !== undefined ? element.category : []
			)
		}
		setShouldRefetch(false)
		return []
	}, [data])

	useEffect(() => {
		if (categoriesQuantity.length) {
			setShouldRefetch(true)
			setQuantity(categoriesQuantity)
			setShouldRefetch(false)
		}
	}, [categoriesQuantity, category1])

	const onChangeCategori = (
		index1: any,
		event: React.MouseEvent<HTMLAnchorElement>
	) => {
		event.preventDefault() // Предотвратить переход на верх
		dispatch(setCategory1(index1))
		dispatch(setCategoryClick(true))
		setColor(index1)
		dispatch(setColorCategory(0))
		dispatch(setTagsClick(false))
		dispatch(setColorTags(null))
		dispatch(setInputClick(false))
		dispatch(setInput(''))
		refetch()
	}

	useEffect(() => {
		setShouldRefetch(true)
		colorCategory1 !== 0 ? setColor(colorCategory1) : false
		setShouldRefetch(false)
	}, [colorCategory1, category1])

	return (
		<div className='category__block'>
			<div className='filter__about'>
				<div className='filter__line'></div>
				<h2 className='filter__text'>Category</h2>
				<div className='filter__line'></div>
			</div>
			<div className='filter__mains'>
				{category1?.length && quantity?.length ? (
					category1.map((element: any, index1: number) => (
						<Link
							className='filter__link'
							key={element.id}
							href={'/'}
							onClick={(event: any) => onChangeCategori(index1, event)}
						>
							<CategoryNum
								name={element.category}
								num={
									quantity.filter(function (element1: any, index2: number) {
										return element1 === element.category
									}).length
								}
								color={colorCategory}
							/>
						</Link>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
