import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import Login from '../pages/login/login'
import Register from '../pages/login/register'


 export function AppRoutes(){
	return(
		<BrowserRouter>
		<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' 
				element={<Register />} />

		</Routes>
</BrowserRouter>
	)
 }