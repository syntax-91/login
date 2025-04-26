import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FetchDataReg } from '../../res/FetchDataRegister'
import { schemaPassword, schemaUsername } from '../../schema/schema'
import { modal } from '../../store/modalText'

 

  function Register(){

	const {register, handleSubmit, formState: {errors}} = useForm({'mode': 'onChange'});
	
	useEffect(() => {
			const t = setTimeout(() => {modal.isOpen=false}, 2000)
	
			return()=> clearTimeout(t);
		}, [modal.isOpen])

	return(
	<div className="ob w-[100vw] 
			h-[100vh] ">
	
			{modal.isOpen && 
			<div className='border w-120 h-14
			ml-10 mt-10 modal_text'>
	
				<p className='text-[15px]'>{modal.text}</p>
	
			</div>}
	
			<div className='flex justify-center items-center w-[100%] h-200'>
		<div className=' w-100 h-100
    border border-[#444] rounded-2xl'>

      <h2 className='text-center
      mt-19 text-3xl' >Register</h2>

    <form
    onSubmit={handleSubmit(FetchDataReg)}
     className='w-[75%] mx-auto mt-5'
     >

    {/* username */}    
    <div className='rounded-[20px] 
    '>
      <input type="text"
      placeholder='Enter username' 
      className='py-3 px-5 rounded-[20px]
      border border-[#444]
      focus:border-[#a09f9f]
      w-[100%] outline-0'
      {...register('username', schemaUsername)}/>
    </div>
    
    {errors.username && 
    <p
    className='text-red-600 text-center pt-1'
    >{errors.username.message}</p>}

      {/* password */}

      <div className='rounded-[20px] mt-2
    '>
      <input type="password"
      placeholder='Enter password' 
      className='py-3 px-5 rounded-[20px]
      border border-[#444]
      focus:border-[#a09f9f]
      w-[100%] outline-0'
      {...register('password', schemaPassword)}/>
    </div>
    
    {errors.password && 
    <p
    className='text-red-600 text-center pt-1'
    >{errors.password.message}</p>}


    <div className='w-[97%] mt-2 mx-auto'>
      <Link to="/login">Login</Link>
    </div>

      <div className='text-center mt-5'>
        <button>Submit</button>
      </div>

    </form>
    </div>
		</div>
		</div>
	)
 }

 export default Register