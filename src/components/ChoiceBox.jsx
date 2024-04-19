import React from 'react';
import { Link } from 'react-router-dom';

const ChoiceBox = ({id, career}) => {

  return (
    <Link to={`/quiz/${id}`}
    className='h-[200px] flex items-center justify-center font-semibold cursor-pointer p-4 border bg-orange-300'>{career}
    </Link>
  )
}

export default ChoiceBox