import { addUser, LoginUser } from '../db.js'

 export const register = async (req, res) => {
	console.log(req.body)

	try {
		
	
	const userData = req.body; 
	
	const user = await addUser(userData)

		.then(e => {
			res.json({message: e}) 
		})


	} finally {

	}
 }
   
 export const login = async(req, res) => {
		try {
	console.log('req data: ', req.body)
	const userData = req.body;
	
	const user =  LoginUser(userData)

	.then(e => {
		res.json(e) 
	})	}

	catch(err) {
			console.log('ERROR', err)
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