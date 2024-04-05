import React from 'react'

export const QuizApp = () => {
  return (
    <section className='bg-[#EFF0F3] w-full min-h-screen flex items-center justify-center'>
      <div className='quizapp py-10 pt-2 px-5 max-w-[430px] my-auto flex flex-col items-center gap-[2rem] md:shadow-2xl'>
        <div className='flex cursor-pointer mb-[2rem] items-center justify-between text-[#004643] font-semibold text-[12px] self-start w-[50%]'>
          <pre>&lt; Previous</pre>
          <span>7/10</span>
        </div>
        <div>
          <div className='relative w-[383px] h-[229px] bg-[#ffff] shadow-lg rounded-[20px] p-5 flex items-center justify-center text-center font-semibold'>
            <div className='absolute top-[-2.4rem] outline-none w-[86px] h-[86px] rounded-full bg-white border-[.7rem]  border-r-[#004643] border-t-[#004643] border-l-[#ABD1C6] border-b-[#ABD1C6] border-top [#004643] flex items-center justify-center text-[32px] font-semibold text-[#004643]'>30</div>
            <p>Which of the following is NOT a valid JavaScript data type?</p>
          </div>
        </div>
        <div>
          <ul className='flex flex-col gap-5'>
            <li className='flex cursor-pointer items-center justify-between py-2 px-5 w-[383px] h-[53px] bg-white rounded-[20px] font-semibold text-[20px] text-gray-700'><label htmlFor="option1">String</label><input type="checkbox" id="option1" /></li>
            <li className='flex cursor-pointer items-center justify-between py-2 px-5 w-[383px] h-[53px] bg-white rounded-[20px] font-semibold text-[20px] text-gray-700'><label htmlFor="option1">Undefined</label><input type="checkbox" id="option1" /></li>
            <li className='flex cursor-pointer items-center justify-between py-2 px-5 w-[383px] h-[53px] bg-white rounded-[20px] font-semibold text-[20px] text-gray-700'><label htmlFor="option1">Boolean</label><input type="checkbox" id="option1" /></li>
            <li className='flex cursor-pointer items-center justify-between py-2 px-5 w-[383px] h-[53px] bg-white rounded-[20px] font-semibold text-[20px] text-gray-700'><label htmlFor="option1">Float</label><input type="checkbox" id="option1" /></li>
          </ul>
          <button className='w-[383px] h-[59px] bg-[#004643] rounded-[20px] font-semibold text-[24px] text-white mt-[3rem] hover:scale-95 duration-500'>Next</button>
        </div>
      </div>
    </section>
  )
}
