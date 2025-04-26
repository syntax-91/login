import { Router } from 'express'
import { authController, login, register } from '../../controllers/auth.controller.js'

export const authRoute = Router();

//auth
authRoute.all('/', authController)

//auth/register
authRoute.post('/register', register)
//auth login
authRoute.post('/login', login)