import React from 'react'

const Doctor = ({img,name}) => {
  return (
    <div>
      <img src={img} alt="" className='md:m-auto md:my-[20px] w-[190px]' />
      <h1 className='text-[18px] font-semibold'>{name}</h1>
      <p>Pupil, age:16</p>
      <button className='px-[20px] mt-[10px] py-[10px] bg-[#4468e9] text-white rounded-[15px]'>More</button>
    </div>
  )
}

export default Doctor
