import { compare, hash } from 'bcryptjs'
import { config } from 'dotenv'
import { MongoClient } from 'mongodb'

config();


export async function addUser(data){
	const client = new MongoClient(process.env.URI)
	console.log('psw: ', data.password)

	try {
	
	await	client.connect();
	const db = client.db('mydb');
	const users = db.collection('users')

	console.log('data', data )

	console.log('Подождите ответ..')
	const isUser = await users.findOne({username: data.username });
	

	if(isUser){
		console.log('Уже существует!')
		return {success: false, message: 'Уже существует!'}
	} 
	
	else {
		
		const HashPsw = await hash(data.password, 13)
		console.log('HASHPSW: ', HashPsw)

		await users.insertOne(
			{username: data.username, password: HashPsw}
		);
		console.log('Успех!')
		return {success: true, message: 'Успех'}
	}

		}
		catch(err){
			console.log('Ошибка: ', err)
			return {success: false, message: "Ошибка при регистраций"}
		}
		finally {
			await client.close();
		}
}

export async function LoginUser(data){
	
	const client = new MongoClient(process.env.URI)

	try {
		
	await	client.connect();
	const db = client.db('mydb');
	const users = db.collection('users')

	
	const isUser = await users.findOne({username: data.username });
		console.log('isUser: ', isUser)

		
			const isPswValid = await compare(data.password, isUser.password)
		
	
	if(!isUser || !isPswValid) {
		console.log('неверные данные')
		return { success: false, message: 'неверные данные'}
	}
	
		const psw = data.password
		const hPsw = await hash(psw, 12)

		users.insertOne(
			{username: data.username, password: hPsw}
		)

		return { success: true, message: 'Успех'}


	} finally {

	}
}