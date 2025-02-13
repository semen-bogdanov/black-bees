import Image from 'next/image'
import imgBlock from '../../public/News/foto_400x400.jpg'

export default function News() {
	return (
		<div className='container'>
			<div className='live__inner'>
				<div className='live__block'>
					<div className='live__texts'>
						<h1 className='live__h1'>Заголовок новости</h1>
						<p className='live__text'>
							Учитывая ключевые сценарии поведения, повышение уровня
							гражданского сознания предоставляет широкие возможности для модели
							развития. Ясность нашей позиции очевидна: курс на
							социально-ориентированный национальный проект не оставляет шанса
							для поставленных обществом задач. Есть над чем задуматься:
							интерактивные прототипы представляют собой не что иное, как
							квинтэссенцию победы маркетинга над разумом и должны быть смешаны
							с не уникальными данными до степени совершенной неузнаваемости,
							из-за чего возрастает их статус бесполезности.
						</p>
						<p className='live__date'>12.08.2024</p>
					</div>
					<Image className='live__foto w-auto' src={imgBlock} alt='img' />
				</div>
			</div>
		</div>
	)
}
