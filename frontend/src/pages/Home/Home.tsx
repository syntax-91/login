import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../store/auth'

export function Home(){

	const nav = useNavigate();

	useEffect(() => {	
		if(!auth.isAuth) { nav('/login'); }
	}, [auth.isAuth])


	return(
		<div className='w-100 h-100'>
		<h1 className='text-center mt-50 text-[20px]'>Hello World!</h1>
		</div>
	)
}