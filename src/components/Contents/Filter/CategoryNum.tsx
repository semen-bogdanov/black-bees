'use client'

export interface Props {
	name: string
	num: number
	color: number
}

const CategoryNum: React.FC<Props> = ({ name, num, color }) => {
	const categoryNameRu = ['Пчёлы', `Пчеловодство`, `Мёд`, `Пасека`, `Улей`]
	return (
		<div className='category__infocat'>
			<div
				className='category__info'
				style={
					categoryNameRu[color] === name
						? { backgroundColor: '#808080' }
						: { backgroundColor: '#2b2b2b' }
				}>
				<p className='category__text'>{name}</p>
				<div className='category__round'>{num}</div>
			</div>
		</div>
	)
}

export default CategoryNum
