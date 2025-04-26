import { users } from '../server.js'

 export const register = (req, res) => {
	console.log(req.body)
	

	const userData = req.body; 
	
	const user = users.find(user => user.username === userData.username)

	if(user) {	 
	res.status(201)
	.json({message: 'Уже Существует!'}) 
	}
	
	else {
	res.status(200)
	.json({message: 'Успех'})
	users.push(userData)
	console.log('users:', users) 
	}
	
 }
  
 export const login = (req, res) => {
	
	console.log('req data: ', req.body)
	const userData = req.body;
	
	const user = users.find(user => user.username == userData.username && user.password == userData.password)

	if(user){
		res.status(200)
		.json({message: "Успех!"})
	} else {
		res.status(201)
		.json({message: "имя пользывателья или пароль неправильный!"})
	}
 }

 export const auth = (req, res, next) => {
	if(!req.headers.authorization) res.status(401)
		.json({message: "No Auth"})

	next()
 }

 export const authController = (req, res) => {
	res.status(200)
	.json({message: "Hi"})
}