'use client'
import { setCurrentFilter } from '@/redux/slices/filterBar'
import {
	setCategoryClick,
	setColorCategory,
	setCurrentPage,
} from '@/redux/slices/filterCategory'
import {
	selectInput,
	setInput,
	setInputClick,
} from '@/redux/slices/filterInput'
import { setColorTags, setTagsClick } from '@/redux/slices/filterTag'
import { useTemplate } from '@/utils/hooks/useTemplate'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bars from '../../public/Header/bars.png'
import filter from '../../public/Header/filter.svg'
import search from '../../public/Header/Search.png'
import vk from '../../public/Header/vk.svg'

export default function Header() {
	const localRef = useRef<any | null>(null)
	const menuRef = useRef<HTMLDivElement | null>(null)
	const filterRef = useRef<HTMLDivElement | null>(null)
	const dispatch = useDispatch()
	const usePathname1 = usePathname()
	const currentPath = usePathname1

	const [searchInput, setSearchInput] = useState('')
	const [clickBar, setClickBar] = useState(false)
	const [clickFilter, setClickFilter] = useState(false)
	const selectInput1 = useSelector(selectInput)
	const { data, isFetching, isFetched, isLoading, refetch } = useTemplate()

	// Поиск по сайту
	const onChangeSearch = (search: string) => {
		dispatch(setTagsClick(false))
		dispatch(setColorTags(null))
		dispatch(setColorCategory(false))
		dispatch(setCategoryClick(false))
		dispatch(setInput(search))
		dispatch(setInputClick(true))
		setSearchInput(search)
		refetch()
	}

	// Пагинация при клике на главную страницу переходит погинация автоматом на 1 стр.
	const onChangePage = (number: number) => {
		refetch()
		dispatch(setCurrentPage(number))
		dispatch(setCategoryClick(false))
		dispatch(setColorCategory(null))
		dispatch(setColorTags(null))
		dispatch(setTagsClick(false))
		dispatch(setInputClick(false))
		setSearchInput('')
		refetch()
		refetch()
	}

	useEffect(() => {
		setSearchInput(selectInput1)
	}, [selectInput1])

	// при клике на кнопку БУРГЕРА выпадает меню или исчезает
	useEffect(() => {
		if (menuRef.current) {
			clickBar
				? (menuRef.current.style.display = 'block')
				: (menuRef.current.style.display = 'none')
		}
	}, [clickBar])

	// проверка на наличие клика (т.е. кликнули в меню или кнопке или нет)
	const handleClickOutside = (event: MouseEvent) => {
		if (
			localRef.current &&
			!localRef.current.contains(event.target as Node) &&
			menuRef.current &&
			!menuRef.current.contains(event.target as Node)
		) {
			setClickBar(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	useEffect(() => {
		dispatch(setCurrentFilter(clickFilter))
	}, [clickFilter])

	// Если страница другая, то кнопка фильтр исчезает
	useEffect(() => {
		if (filterRef.current) {
			currentPath === '/'
				? (filterRef.current.style.display = 'block')
				: (filterRef.current.style.display = 'none')
		}
	}, [currentPath])

	return (
		<header>
			<div className='header__inner'>
				<div className='header__menu' ref={menuRef}>
					<div className='header__menu2'>
						<Link
							onClick={() => onChangePage(1)}
							className='header__link2'
							href='/'
						>
							Главная
						</Link>
						<Link className='header__link2' href='/blog'>
							Блог
						</Link>
						<Link className='header__link2' href='/news'>
							Новости
						</Link>
					</div>
				</div>
				<div className='header__block'>
					<div ref={filterRef}>
						<Image
							onClick={() => setClickFilter(!clickFilter)}
							className='header__filter'
							src={filter}
							alt='filter'
						/>
					</div>
					<Image
						ref={localRef}
						onClick={() => setClickBar(!clickBar)}
						className='header__bars'
						src={bars}
						alt='menu'
					/>
					<Image className='header__searchicon' src={search} alt='menu' />
					<input
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							onChangeSearch(e.target.value)
						}
						value={searchInput}
						className='header__input'
						type='text'
						name='name'
						placeholder='Поиск...'
					/>
				</div>
				<div className='container'>
					<div className='header__cont'>
						<Link
							className='header__link'
							href='/'
							onClick={() => onChangePage(1)}
						>
							<h1 className='header__label'>BloCK SV</h1>
						</Link>
					</div>
				</div>
				<div className='header__social'>
					<div className='header__round'>
						<Image className='header__vk' src={vk} alt='menu' />
					</div>
				</div>
			</div>
			<nav className='container'>
				<div className='header__navigation'>
					<Link
						onClick={() => onChangePage(1)}
						className='header__link'
						href='/'
					>
						Главная
					</Link>
					<Link className='header__link' href='/blog'>
						Блог
					</Link>
					<Link className='header__link' href='/news'>
						Новости
					</Link>
				</div>
			</nav>
		</header>
	)
}
