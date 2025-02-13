'use client'
import { selectCurrentFilter } from '@/redux/slices/filterBar'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Content } from './Content'
import Filter from './Filter'
import Category from './Filter/Category'
import PopularTag from './Filter/PopularTag'

export default function MainCont() {
	const colorCategory1 = useSelector(selectCurrentFilter)
	const filter3 = useRef<any>(null)

	useEffect(() => {
		colorCategory1
			? (filter3.current.style.display = 'block')
			: (filter3.current.style.display = 'none')
	}, [colorCategory1])

	return (
		<div className='container'>
			<div className='maincont__inner'>
				<Content />
				<Filter />
			</div>
			<div className='maincont__filter3' ref={filter3}>
				<Category />
				<PopularTag />
			</div>
		</div>
	)
}
