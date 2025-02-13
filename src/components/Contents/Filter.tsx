'use client'
import About from './Filter/About'
import Category from './Filter/Category'
import NewPost from './Filter/NewPost'
import PopularTag from './Filter/PopularTag'

export default function Filter() {
	return (
		<div className='filter2__block'>
			<About />
			<Category />
			<NewPost />
			<PopularTag />
		</div>
	)
}
