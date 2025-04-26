import axios from 'axios'
import { modal } from '../store/modalText'

export async function FetchDataReg<T>(data: T){
	 try {

		 console.info('data: ', JSON.stringify(data))

		 const res = await axios.post('http://localhost:3000/auth/register', data)
		 
		 .then(r =>
			 modal.run(r.data.message)
		 ) 
		 

	 } catch (err){
		 console.log('ERROR: ', err)
	 }
}

