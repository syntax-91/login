import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import FetchData from '../../res/fetchData'
import { schemaPassword, schemaUsername } from '../../schema/schema'
import { modal } from '../../store/modalText'

 function Login(){
	
	const {register, handleSubmit, formState: {errors}} = useForm({'mode': 'onChange'});

  const [isLoad, setIsLoad] = useState(false);

  const nav = useNavigate();

	useEffect(() => {
     
		const t = setTimeout(() => {modal.isOpen=false}, 2000)
    
    setIsLoad(false)

		return()=> clearTimeout(t);
	}, [modal.isOpen])

  return (
		<div className="ob w-[100vw] 
		h-[100vh] ">

    {/* modal text */}

		{modal.isOpen && 
		<div className={` p-10
		ml-10 mt-10 modal_text ${modal.success ? 'success' : 'success_false'}`}>

			<p>{modal.text}</p>

		</div>}

			<div className='flex justify-center items-center w-[100%] h-200'>
    <div className=' w-100 h-100
    border border-[#444] rounded-2xl'>

      <h2 className='text-center
      mt-19 text-3xl' >Login</h2>

    <form
    onSubmit={handleSubmit(FetchData)}
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
      <Link to="/register">Register</Link>
    </div>

      <div className='text-center mt-5'>
        <button onClick={()=>setIsLoad(true) }>{isLoad ? "loading..." : "Submit"}</button>
      </div>

    </form>
    </div>
		</div>
		</div>
  )
}

export default observer(Login);