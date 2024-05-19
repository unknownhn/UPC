import React from 'react'
import { Button } from '@mui/material'

const Doct = ({img,name}) => {
  return (
    <div className='w-[22%] md:w-[100%] my-[20px] shadow-lg'>
      <img src={img} alt="" className='w-[100%]' />
      <div className='p-[10px]'>
      <h1>{name}</h1>
      <Button>Подробнее</Button>
      </div>
    </div>
  )
}

export default Doct
