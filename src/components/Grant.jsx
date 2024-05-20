import React from 'react'

const Persone = ({img}) => {
  return (
    <div className='w-[30%] my-[20px] md:w-[100%] md:text-center'>
      <img src={img} alt="" className='md:m-auto md:my-[20px]' />
      <h1 className='text-[18px] font-semibold'>Safia Dodarjonova</h1>
     
      <button className='px-[20px] mt-[10px] py-[10px] bg-[green] text-white rounded-[15px]'>Запись на прием</button> <br />
      <button className='px-[35px] mt-[10px] py-[10px] border-[1px] border-[green] text-[green] rounded-[15px]'>Подробнее</button>
    
    </div>
  )
}

export default Persone
