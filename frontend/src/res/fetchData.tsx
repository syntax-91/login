import axios from 'axios'
import { modal } from '../store/modalText'

 async function FetchData<T>(data: T){
		try {

			console.info('data: ', JSON.stringify(data))

			const res = await axios.post('http://localhost:3000/auth/login', data)
			
			.then(r =>
				modal.run(r.data.message)
			)

			return res.data
			

		} catch (err){
			console.log('ERROR: ', err)
		}
}

export default FetchData