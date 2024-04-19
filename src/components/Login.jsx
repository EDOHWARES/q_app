import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import { useAuth } from './AuthContext';

const Login = () => {

  const {login} = useAuth();


  // const history = useHistory();
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);



  let navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 4 || !isNaN(name)) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 5000)
    } else {
      login();
      setName('');
      navigate('/choices');
    }
  }

  return (
    <section className='bg-[#004643] w-full min-h-screen flex items-center justify-center'>
      <div className='login py-10 px-5 max-w-[430px] h-[550px] max-h-[932px] my-auto flex flex-col items-center justify-between'>
        <div className='w-[160px] h-[160px] bg-white rounded-full flex items-center justify-center text-[40px] font-semibold text-[#004643]'>
          <span className='text-[#F8C660] text-[20px] align-bottom bg-[#004643]'>ed</span><span>QUIZ</span>
        </div>
        <form onSubmit={handleSubmit} action="" className='flex flex-col'>
          <label htmlFor="name" className='text-[#EEEFF2] mb-4 ml-2 font-semibold'>Enter Your Name</label>
          <input 
          value={name} 
          onChange={handleChange} 
          type="text" 
          id='name' 
          placeholder='Edoh Emmanuel...' 
          className='w-[383px] h-[53px] outline-none bg-transparent font-medium text-[12px] text-[#E9EAED] border rounded-[20px] indent-5 border-[#EEEFF2]' />
          {showError && <small className='error ml-2 text-red-400 mt-1'>Pls enter a valid name!</small>}
        </form>
        <button onClick={handleSubmit} className='bg-[#F8C660] text-[#FFFFFF] font-semibold w-[383px] rounded-[20px] h-[59px] text-[24px] hover:scale-95 duration-500'>Start</button>

      </div>
    </section>
  )
}

export default Login