'use client'
import { setCategoryClick, setColorCategory } from '@/redux/slices/filterCategory'
import { setInput, setInputClick } from '@/redux/slices/filterInput'
import { selectColorTags, setColorTags, setTags1, setTagsClick } from '@/redux/slices/filterTag'
import { useTemplate } from '@/utils/hooks/useTemplate'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PopularTag() {
	const dispatch = useDispatch<any>()
	const [message, setMessage] = useState<any>(null)
	const { data, isFetching, isFetched, isLoading, refetch } = useTemplate()
	const [tegs1, setTegs] = useState<any>(null) // Название тегов
	const [colorGet, setColorGet] = useState<any>(null) // изменение цвета при выборе категории
	const colorCategory1 = useSelector(selectColorTags)

	useEffect(() => {
		if (data !== null && data !== undefined) {
			setMessage(data)
		}
	}, [data])

	useEffect(() => {
		// проход по массиву и если повторяеться теги то убрать её
		if (message?.length) {
			const uniqueCategories = message.reduce((acc: any, current: any) => {
				const concat = acc.find((item: { tag: any }) => item.tag === current.tag)
				if (!concat) {
					return acc.concat([current])
				} else {
					return acc
				}
			}, [])
			setTegs(uniqueCategories)
			// refetch(); // Перезагружаем данные
		}
	}, [message])

	const onChangeTag = (index1: any, index2: any, event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault() // Предотвратить переход на верх
		dispatch(setTags1(index1))
		dispatch(setTagsClick(true))
		setColorGet(index2)
		dispatch(setColorTags(0))
		dispatch(setColorCategory(false))
		dispatch(setCategoryClick(false))
		dispatch(setInputClick(false))
		dispatch(setInput(''))
		console.log(index1)
		console.log(index2)
	}

	const onChangePage = (number1: number, number2: number) => {
		let mas2 = [0, 1, 2, 3, 4, 5, 6, 8]
		return tegs1?.length ? (
			tegs1
				.map((element: any, index: number, arr: any) => (
					<div key={element.id} className='tag__main'>
						<Link
							className='tag__link'
							href={'/'}
							onClick={(event: any) => onChangeTag(mas2[index], index, event)}>
							<div
								className='tag__blocks'
								style={
									arr[colorGet] === arr[index]
										? { backgroundColor: '#7a7979' }
										: { backgroundColor: '#2b2b2b' }
								}>
								{element.tag}
							</div>
						</Link>
					</div>
				))
				.slice(number1, number2)
		) : (
			<></>
		)
	}

	useEffect(() => {
		colorCategory1 !== 0 ? setColorGet(colorCategory1) : false
	}, [colorCategory1])

	return (
		<div className='tag__block'>
			<div className='filter__about'>
				<div className='filter__line'></div>
				<h2 className='filter__text'>Теги</h2>
				<div className='filter__line'></div>
			</div>
			<div className='tag__flex1'>
				<div className='tag__position'>{onChangePage(0, 4)}</div>
				<div className='tag__position'>{onChangePage(4, 8)}</div>
				{/* <div className="tag__position">{onChangePage(8, 12)}</div> */}
			</div>
		</div>
	)
}
