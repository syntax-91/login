import axios from 'axios'
import { toJS } from 'mobx'
import { modal } from '../store/modalText'

 async function FetchData<T>(data: T){
		try {

			console.info('data: ', JSON.stringify(data))

			const res = await axios.post('http://localhost:3000/auth/login', data)
			 
			console.info('res_data: ', res.data)
			if(res.data){
				console.log('resDATA: ', toJS(res.data.message))
				modal.run(res.data.message, res.data.success) 
			}
				
			return res
			

		} catch (err){
			console.log('ERROR: ', err)
		}
}

export default FetchData