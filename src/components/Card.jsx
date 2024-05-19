    import React from 'react'
    import { Button } from '@mui/material'
    
    const Card = ({name,desc,w}) => {
      return (
        <div style={{width:w}} className='p-[20px] dark:border-[1px] shadow-lg my-[20px] w-[w]'>
          <h1>{name}</h1>
          <p className='w-[80%]'>{desc}</p>
          <Button>Подробнее</Button>
        </div>
      )
    }
    
    export default Card
    