import React from 'react'

export const QuizApp = () => {
  return (
    <section className='bg-[#EFF0F3] w-full min-h-screen flex items-center justify-center'>
      <div className='py-10 pt-0 px-5 max-w-[430px] h-[550px] max-h-[932px] my-auto flex flex-col items-center gap-[5rem]'>
        <div className='flex items-center justify-between text-[#004643] font-semibold text-[12px] self-start w-[50%]'>
          <pre>&lt; Previous</pre>
          <span>7/10</span>
        </div>
        <div>
          <div className='relative w-[283px] h-[229px] bg-[#ffff] shadow-lg rounded-[20px] p-5 flex items-center justify-center text-center font-semibold'>
            <div className='absolute top-[-2.4rem] outline-none w-[86px] h-[86px] rounded-full bg-white border-[.7rem]  border-r-[#004643] border-t-[#004643] border-l-[#ABD1C6] border-b-[#ABD1C6] border-top [#004643] flex items-center justify-center text-[32px] font-semibold text-[#004643]'>30</div>
            <p>In what year did the United States 
host the FIFA World Cup for the first time?</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}
