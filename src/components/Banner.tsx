'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function Banner() {
	const banner1 = `Надпись для баннера на главную страницу №1`
	const banner2 = `Надпись для баннера на главную страницу №2`
	const banner3 = `Надпись для баннера на главную страницу №3`
	const banner4 = `Надпись для баннера на главную страницу №4`

	const massivImg: any[] = [banner1, banner2, banner3, banner4]

	// слайдер
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		adaptiveHeight: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
					appendDots: (dots: any) => (
						<div
							className='banner__append'
							style={{
								bottom: '0px',
								top: '600px',
								opacity: '1',
							}}>
							<ul
								style={{
									margin: '0px',
								}}>
								{' '}
								{dots}{' '}
							</ul>
						</div>
					),
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
					infinite: true,
					dots: true,
					arrows: false,
					appendDots: (dots: any) => (
						<div
							className='banner__append'
							style={{
								bottom: '0px',
								top: '300px',
								opacity: '1',
							}}>
							<ul
								style={{
									margin: '0px',
								}}>
								{' '}
								{dots}{' '}
							</ul>
						</div>
					),
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
					appendDots: (dots: any) => (
						<div
							className='banner__append'
							style={{
								bottom: '0px',
								top: '300px',
								opacity: '1',
							}}>
							<ul
								style={{
									margin: '0px',
									padding: `10px`,
								}}>
								{' '}
								{dots}{' '}
							</ul>
						</div>
					),
				},
			},
		],
	}

	return (
		<div className='banner__banner1'>
			<div className='banner__container'>
				<Slider {...settings}>
					{massivImg.map((element: any, index: number) => (
						<h1 key={index} className='banner__name'>
							{element}
						</h1>
					))}
				</Slider>
			</div>
		</div>
	)
}
