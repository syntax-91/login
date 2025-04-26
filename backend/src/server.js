import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { appController } from './controllers/app.controller.js'
import { authRoute } from './routes/Auth/authRoute.js'

//users
export const users = [{username: 'syntax_91', password: 'syntax12345'}]
console.log('USERS: ', users)

/* не забудь Thunder Client =>Auth=>Bearer */
 
dotenv.config()
console.log('PORT: ', process.env.PORT)

const app = express();
app.use(cors())
 
//делаем чтоб наш сервер поддержывал JSON формат
app.use(express.json())


app.get('/', appController)

//Routes
app.use('/auth', authRoute)



//404
app.use((req, res)=> {
	res.status(404)
	.json({message: "404 Not Found"})
})

//run
app.listen(process.env.PORT, () => {
	console.log(`Server running as http://localhost:`,
		process.env.PORT
	)
})