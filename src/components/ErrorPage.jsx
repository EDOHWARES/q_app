import React from 'react';
import { useRouteError } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const error = useRouteError();
    console.error(error)

    const handleClick = () => (
        navigate('/')
    )

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-3'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <button onClick={handleClick} className='bg-red-400 text-white p-2 font-semibold'>exit</button>
    </div>
  )
}

export default ErrorPage