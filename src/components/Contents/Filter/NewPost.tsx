'use client'
import { useTemplate } from '@/utils/hooks/useTemplate'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NewPost() {
	// const [postNew, setPostNew] = useState<any>(null);
	const [massiv, setMassiv] = useState<any>([])
	const { data, isFetching, isFetched, isLoading, refetch } = useTemplate()

	useEffect(() => {
		if (data?.length) {
			setMassiv(data.reverse().slice(2, 6))
		}
	}, [data])

	return (
		<div className='releted__block'>
			<div className='filter__about'>
				<div className='filter__line'></div>
				<h2 className='filter__text'>Новые статьи</h2>
				<div className='filter__line'></div>
			</div>
			{massiv?.length ? (
				massiv.map((element: any, index: any) => (
					<div key={index} className='releted__inner'>
						<Link href={`post/${element.id}`} key={element.id}>
							<div className='releted__post'>
								<div className='releted__content'>
									<Image className='releted__img' src={element.img} alt='post' />
									<div className='releted__blockt'>
										<p className='releted__text2'>{element.title}</p>
										<p className='releted__time'>{element.date}</p>
									</div>
								</div>
							</div>
						</Link>
						<div className='releted__border'>
							<div className='releted__line'></div>
						</div>
					</div>
				))
			) : (
				<></>
			)}
		</div>
	)
}
