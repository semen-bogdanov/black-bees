'use client'
import {
	selectCategory,
	selectCategoryClick,
	selectCurrentPage,
	setCurrentPage,
} from '@/redux/slices/filterCategory'
import { selectInput, selectInputClick } from '@/redux/slices/filterInput'
import { selectTags, selectTagsClick } from '@/redux/slices/filterTag'
import { useTemplate } from '@/utils/hooks/useTemplate'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../Pagination'
import MyLoader from './Skeleton'

export const Content = () => {
	const dispatch = useDispatch<any>()
	// const [message, setMessage] = useState<any>(null);
	const [shouldRefetch, setShouldRefetch] = useState(false)
	//const [paginateCash2, setPaginateCash2] = useState<boolean>(false); // кеширование текущей страницы
	const [postsPerPage] = useState(5) //! Кол-во карточек на странице
	const currentPage = useSelector(selectCurrentPage)
	const selectTagsClick1 = useSelector(selectTagsClick)
	const selectTags1 = useSelector(selectTags)
	const selectCurrentSearchclick1 = useSelector(selectInputClick) // поиск по сайту - false/true
	const selectInput1 = useSelector(selectInput) // поиск по сайту
	const { data, isFetching, isFetched, isLoading, refetch } = useTemplate()
	// Получение текущих постов. Пагинация
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	// useEffect(() => {
	//   if (data !== undefined) {
	//     // setMessage(data);
	//     // console.log(data);
	//   }
	// }, [data]);

	// Категории (фильтрация)
	const currentCategory = useSelector(selectCategory)
	const currentCategoryClick = useSelector(selectCategoryClick)

	// Пагинация
	const onChangePage = (number: number) => {
		refetch()
		dispatch(setCurrentPage(number))
	}

	const categoryNameRu = ['Пчёлы', `Пчеловодство`, `Мёд`, `Пасека`, `Улей`]

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

	// Фильтрация данных с помощью useMemo
	const reversedPosts2 = useMemo(() => {
		let filteredData = data
		// setShouldRefetch(true);

		if (currentCategoryClick && data !== null) {
			setShouldRefetch(true)
			filteredData = data.filter(
				(element: any) => element.category === categoryNameRu[currentCategory]
			)
			setShouldRefetch(false)
		}

		if (selectTagsClick1 && data !== null) {
			setShouldRefetch(true)
			filteredData = data.filter(
				(element: any, index: number, arr: any) =>
					element.tag === arr[selectTags1].tag
			)
			setShouldRefetch(false)
		}

		if (selectCurrentSearchclick1 && data !== null) {
			setShouldRefetch(true)
			filteredData = data.filter(
				(element: any) =>
					element.title.toLowerCase().includes(selectInput1.toLowerCase()) ||
					element.text.toLowerCase().includes(selectInput1.toLowerCase())
			)
			setShouldRefetch(false)
		}

		return filteredData
	}, [
		data,
		currentCategoryClick,
		currentCategory,
		selectTagsClick1,
		selectTags1,
		selectCurrentSearchclick1,
		selectInput1,
	])

	let currentPosts: any
	if (reversedPosts2?.length) {
		currentPosts = reversedPosts2?.length
			? reversedPosts2.slice(indexOfFirstPost, indexOfLastPost)
			: undefined
		currentPosts = currentPosts?.length === 0 ? reversedPosts2 : currentPosts
	}

	return (
		<div>
			<div className='content__inner'>
				<div className='content__posts'>
					{currentPosts !== undefined && currentPosts !== null
						? currentPosts.map((element: any) => (
								<div className='content__post' key={element.id}>
									<Link href={`post/${element.id}`}>
										<div className='content__block'>
											<div className='content__cont'>
												<h2 className='content__title'>{element.title}</h2>
											</div>
										</div>
										<Image
											className='content__img'
											src={element.img}
											alt='мёд'
										/>
									</Link>
								</div>
						  ))
						: [...new Array(postsPerPage)].map((_: any, index: number) => (
								<MyLoader key={index} />
						  ))}
				</div>
			</div>
			<div className='content__inner'>
				<div className='content__pagin'>
					<Pagination
						currentPage={currentPage}
						onChangePage={onChangePage}
						fullnum={reversedPosts2?.length}
						postsPerPage={postsPerPage}
					/>
				</div>
			</div>
		</div>
	)
}
