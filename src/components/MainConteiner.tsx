'use client'
import Header from '../components/Header'
import Footer from '../components/footer'

interface PostProps<T> {
	children: T
}

const MainContainer: React.FC<PostProps<React.ReactNode>> = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	)
}

export default MainContainer
