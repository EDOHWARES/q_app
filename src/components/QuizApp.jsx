import React, { useRef, useState } from 'react';
import {Navigate, useParams} from "react-router-dom"
import {frontendInterviewQuestions} from '../assets/data';
import { backendInterviewQuestions } from '../assets/data';
import { cybersecurityInterviewQuestions } from '../assets/data';
import { aiMachineLearningInterviewQuestions } from '../assets/data';
import { blockchainDevelopmentInterviewQuestions } from '../assets/data';
import { cloudEngineeringInterviewQuestions } from '../assets/data';
import { dataScienceInterviewQuestions } from '../assets/data';
import { embeddedSystemsInterviewQuestions } from '../assets/data';
import { mobileAppDevelopmentInterviewQuestions } from '../assets/data';
import { productDesignInterviewQuestions } from '../assets/data';
import { graphicsDesignInterviewQuestions } from '../assets/data';

import { useAuth } from './AuthContext';


export const QuizApp = () => {

  const {authenticated} = useAuth();

  const [qN, setQn] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const params = useParams();
  const id = params.id;

  const data = {
    Frontend: frontendInterviewQuestions,
    Backend: backendInterviewQuestions,
    Cybersecurity: cybersecurityInterviewQuestions,
    'AI and Ml': aiMachineLearningInterviewQuestions,
    Blockchain: blockchainDevelopmentInterviewQuestions,
    'Cloud Engineering': cloudEngineeringInterviewQuestions,
    'Data Science': dataScienceInterviewQuestions,
    'Embedded Systems': embeddedSystemsInterviewQuestions,
    'Mobile App Development': mobileAppDevelopmentInterviewQuestions,
    'Product Design': productDesignInterviewQuestions,
    'Graphics Design': graphicsDesignInterviewQuestions
  }

  const theSkill = data[id];

  const handleNext = () => {
    if (lock) {
      if (qN+1 == theSkill.length) {
        setShowStats(true);
      } else {
        setQn(qN+1);
      }
      setLock(false);
    } else {
      setQn(qN);
      alert('Pls pick an option before going to next!')
    }
  };

  const handlePrevious = () => {
    // if (qN !== 0) {
    //   setQn(qN-1);
    // } else {
    //   setQn(qN)
    // };
    // setLock(true);
    alert("Sorry Pal, you can't check previous questions for now!")
  };

  const checkAns = (e, option) => {
    if (!lock) {
      if (theSkill[qN].answer == option) {
        e.target.classList.add('correct');
        setScore(score+1)
        setLock(true);

      } else {
        e.target.classList.add('wrong');
        setLock(true);
      }
    }
  }

  const reset = () => {
    setQn(0);
    setLock(false);
    setScore(0);
    setShowStats(false);
  }

  return (
    <>
      {authenticated ? <section className='bg-[#EFF0F3] w-full min-h-screen flex items-center justify-center'>
        {showStats ? 
        <div className='text-center'>
          <p className='block mb-1 text-center align-self-center '>You scored {score} out of {theSkill.length}</p>
          <button onClick={reset} className='bg-[#004643] px-4 py-2 rounded-md text-center font-semibold text-[24px] text-white mt-[3rem] hover:scale-95 duration-500'>Reset</button>
        </div> : 
        <div className='quizapp py-10 pt-2 px-5 max-w-[430px] my-auto flex flex-col items-center gap-[2rem] md:shadow-2xl'>
          <div className='flex cursor-pointer mb-[1rem] items-center justify-between text-[#004643] font-semibold text-[12px] self-start w-[50%]'>
            <pre onClick={handlePrevious}>&lt; Previous</pre>
            <span>{`${qN+1}/${theSkill.length}`}</span>
          </div>
          <h4 className='mb-[1rem] text-gray-700'>{id}</h4>
          <div>
            <div className='relative w-[383px] h-[229px] bg-[#ffff] shadow-lg rounded-[20px] p-5 flex items-center justify-center text-center font-semibold'>
              <div className='absolute top-[-2.4rem] outline-none w-[86px] h-[86px] rounded-full bg-white border-[.7rem]  border-r-[#004643] border-t-[#004643] border-l-[#ABD1C6] border-b-[#ABD1C6] border-top [#004643] flex items-center justify-center text-[32px] font-semibold text-[#004643]'>{qN+1}</div>
              <p>{theSkill[qN].question}</p>
            </div>
          </div>
          <div>
            <ul id='options' className='flex flex-col gap-5'>
              {theSkill[qN].options.map((option, index) => (
                <label key={option} htmlFor={option} id='options_container'>
                  <li onClick={(e) => {checkAns(e, option)}} className='flex text-sm cursor-pointer items-center justify-between py-2 px-5 w-[383px] h-[53px] bg-white rounded-[20px] font-semibold text-[15px] text-gray-700'>{option}</li>
                </label>
            ))}
            </ul>
            <button onClick={handleNext} className='w-[383px] h-[59px] bg-[#004643] rounded-[20px] font-semibold text-[24px] text-white mt-[3rem] hover:scale-95 duration-500'>Next</button>
          </div>
        </div>}
      </section> : <Navigate to='/'/>}
    </>
  )
}
