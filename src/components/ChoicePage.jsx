import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ChoiceBox from './ChoiceBox';

import { useAuth } from './AuthContext';

const ChoicePage = () => {

  const {authenticated} = useAuth();

  // const [choice, setChoice] = useState(null);

  // const handleChoice = (id) => {
  //   setChoice(id)
  //   navigate(`/choices/${id}`)
  // }

  const careerList = [
    {id: 1, c:'Frontend'},
    {id: 2, c:'Backend'},
    {id: 3, c:'Cybersecurity'},
    {id: 4, c:'AI and Ml'},
    {id: 5, c:'Blockchain'},
    {id: 6, c:'Cloud Engineering'},
    {id: 7, c:'Data Science'},
    {id: 8, c:'Embedded Systems'},
    {id: 9, c:'Mobile App Development'},
    {id: 10, c:'Product Design'},
    {id: 11, c:'Graphics Design'},
  ];

  return (
    <section className='bg-[#EFF0F3] w-full min-h-screen flex items-center justify-center'>
      
      {authenticated ? <div className='quizapp py-10 pt-2 px-5 min-w-[430px] my-auto flex flex-col items-center gap-[2rem] md:shadow-2xl'>
        <ul className='grid grid-cols-2 gap-[2rem] w-full'>
          {careerList.map((career, index) => (
            <ChoiceBox 
            key={index}
            id={career['c']}
            career={career['c']}
            />
          ))}
        </ul>
      </div> : <Navigate to='/'/>}
    </section>
  )
}

export default ChoicePage