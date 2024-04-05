import React from 'react';

const ChoicePage = () => {
  return (
    <section className='bg-[#EFF0F3] w-full min-h-screen flex items-center justify-center'>
      <div className='quizapp py-10 pt-2 px-5 min-w-[430px] my-auto flex flex-col items-center gap-[2rem] md:shadow-2xl'>
        <ul className='grid grid-cols-2 gap-[2rem] w-full'>
            <li className='h-[200px] border bg-orange-300'></li>
            <li className='h-[200px] border bg-orange-500'></li>
        </ul>
      </div>
    </section>
  )
}

export default ChoicePage