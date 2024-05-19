import React from 'react'
import { Button } from '@mui/material'
import Person from '../../components/Person'

const About = ({img}) => {
  return (
    <div className='py-[10vh] px-[10vh] md:px-[20px]  text-center dark:bg-[black] dark:text-[white]'>
      <div className=' md:flex-col flex flex-wrap justify-between text-start' >
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
     <Person img={img}/>
    </div>
    <button className='px-[35px] mt-[10px] py-[10px] border-[1px] border-[green] text-[green] rounded-[15px]'>Показать еще</button>
   
    </div>
  )
}

export default About
