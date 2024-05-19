import React from 'react'

const Doctor = ({img}) => {
  return (
    <div>
      <img src={img} alt="" className='md:m-auto md:my-[20px]' />
      <h1 className='text-[18px] font-semibold'>Safia Dodarjonova</h1>
      <p>lorem</p>
      <button className='px-[20px] mt-[10px] py-[10px] bg-[green] text-white rounded-[15px]'>Запись на прием</button>
    </div>
  )
}

export default Doctor
