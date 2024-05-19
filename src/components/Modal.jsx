import React from 'react'

const ModalInf = ({img,name}) => {
  return (
    <div className='w-[30%] md:w-[100%] bg-[#F4F6FA] p-[20px] rounded-[15px]'>
      <img src={img} alt="" />
      <h1 className='text-[20px] font-semibold'>{name}</h1>
      <ul>
        <li>1.5 тесла / до 200 кг</li>
        <li>3D/4D запись исследования</li>
        <li>МР маммография</li>
        <li>МРТ всего тела за 1.5 часа</li>
        <li>МРТ суставов</li>
      </ul>
    </div>
  )
}

export default ModalInf
