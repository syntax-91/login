import axios from 'axios'
import { modal } from '../store/modalText'


  async function FetchDataReg <T>(data: T) {
	 try { 

		 console.info('data: ', data)
 
		 const res = await axios.post('http://localhost:3000/auth/register', data )
		 
		 console.log('sss', res.data.message)
		  
		  if(res.data){
					console.log('resDATA: ', res.data.message.success)
				
				modal.run(res.data.message.success, 
				res.data.message.message) 
			}

			return res
		 

	 } catch (err){ 
		 console.log('ERROR: ', err)
	 }
}

export default FetchDataReg 