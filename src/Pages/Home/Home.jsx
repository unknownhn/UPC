import { Button } from '@mui/material'
import React from 'react'
import Saf from '../../components/Saf'
import Sam from '../../components/Sam'                                              

const Home = ({img1,img2,img3,one,two,three,four,saf,map,stu}) => {
  return (
 <>
  <div className='bg-[#4585fb] pt-[10vh] px-[5%] py-[10vh] flex justify-between dark:bg-[black] dark:text-[white] items-center md:flex-col'>
    <div className='w-[40%] text-white md:w-[100%]'>
      <h1 className='text-[40px]'>University Preparation Club</h1><br />
      <p className='text-[25px]'>-is an online platform that provides information on scholarships, grants and financial aid for students wishing to study at universities around the world.
         The site partners with various universities and organizations to offer a wide range of funding opportunities.</p><br />
         <Button sx={{backgroundColor:"white",color:"blue"}}>More details</Button>
    </div>
    <img src={img1} alt="" className='md:hidden w-[800px]' />
  </div>
  <div className=' px-[5%] py-[10vh] flex justify-between items-center dark:bg-[black] dark:text-[white] md:flex-col'>
    <div className='w-[50%] md:w-[100%]'>
      <h1 className='text-[40px] font-semibold'>A little about us</h1><br />
      <p className='text-[20px]'>is a student organization that helps students prepare for university. We provide our members with a range of resources and services, including:
<br />
• University application information, including application deadlines, requirements and essay tips. <br />
• Help you prepare for admissions tests such as the SAT and ACT. <br />
• Opportunities to visit campuses and meet with university representatives. <br />
• Mentoring from students and graduates who have already entered the university. </p>
    </div>
    <img src={img2} alt="" className='w-[50%]' />
  </div>
  <div className='py-[10vh] px-[5%] text-center dark:bg-[black] dark:text-[white]'>
   <div className='flex justify-between items-center mb-[5vh] md:block'>
   <h1 className='text-[30px]'>Our mission: </h1>
   </div>
     <div className='w-[60%] m-auto'>
       <p className='text-[20px] '>
       Our mission is to provide students with the knowledge, skills and support they need to get into the
        university of their dreams. We are committed to helping students reach their academic potential and prepare for a successful career.
       </p>
     </div>

  </div>

  <div className='py-[10vh] px-[5%] py-[10vh] bg-[#F1F5F8] text-center dark:bg-[black] dark:text-[white]'>
  <div className='flex justify-between items-center mb-[5vh] md:block'>
   <h1 className='text-[30px]'> Наши специалисты</h1>
   <div className='flex gap-[20px] md:mt-[20px]'>
   <Button variant="outlined" sx={{border:"green",bgcolor:"white",color:"green",width:"20px"}}>◀</Button>
   <Button variant="outlined" sx={{bgcolor:"green",color:"white"}}>▶</Button>
   </div>
   </div>
   <div className='flex justify-between my-[5vh] md:flex-col text-start md:text-center'>
    < Saf img={saf} name={"Domullojonova Iffatoy"}/>
    < Saf img={saf} name={"Nasrieva Robiya"}/>
    < Saf img={saf} name={"Hotami Najmiya"}/>
    < Saf img={saf} name={"Safia Dodojonova"}/>
   </div>
   <Button variant='outlined' sx={{color:"green"}}>Все специалисты</Button>
  </div>
  


  <div className='py-[10vh] px-[4%]  bg-[#F1F5F8] dark:bg-[black] dark:text-[white]'>
   
  <h1 className='text-[30px] font-semibold dark:text-[white]'>Students</h1>
   <div className='mt-[5vh] flex md:flex-col items-center gap-9'>
    <div className='w-[50%] md:w-[100%] md:mb-[20px]'>
        <p className='text-[18px]'>The University Prep Club team represents a unique level of effectiveness in achieving its mission of preparing students for college. Here are the important aspects of their effectiveness:
<br />
1. Subject area expertise:
<br />
• The team has in-depth knowledge of university requirements and application processes.
<br />
• They are constantly changing with regard to the latest trends and admission requirements.
<br />
2. Individual approach:
<br />
• They conduct a comprehensive assessment of each student's strengths and weaknesses.
<br />
• They develop preparation plans tailored to the needs of the student. <br />

3. Structured programs:
<br />
• Training programs are designed with a sequential approach.
<br />
• These include training activities, interview simulations and one-on-one mentoring.
<br />
4. Qualified instructors:
<br />
• Instructors are experienced university consultants and teachers.
<br />
• They have a deep understanding of the university application process and effective teaching methods.
<br />

5. Support throughout the entire process:
<br />
• The team provides support throughout your university journey, from course selection to applications.
<br />
• They offer guiding advice and constant encouragement.</p>
    </div>
    <img src={stu} alt="" className='w-[50%]' />
   </div>
  </div>
 

  <div className='py-[10vh] px-[4%]  dark:bg-[black] dark:text-[white]'>
   <h1 className='text-[30px] font-semibold dark:text-[white]'>Our values:</h1>
   <div className='bg-[#F4F6FA] dark:bg-[grey] flex p-[20px] md:flex-col'>
     <div className='w-[50%] md:w-[100%]'>
        <ul className='leading-[50px]'>
            <li className='text-[20px] font-semibold'>• Availability:</li>
            <p className='text-[20px]'>We believe that every student should be able to access a high-quality education, 
              regardless of their background or financial situation.</p>
            <li className='text-[20px] font-semibold'>• Cooperation:</li>
            <p className='text-[20px]'>We believe in the power of teamwork and collaboration.
               We work together with students, faculty and administration to create a positive learning environment.</p>
            <li className='text-[20px] font-semibold'>• Innovation:</li>
            <p className='text-[20px]'>We are constantly looking for new and innovative ways to help students prepare 
              for university. We use the latest technology and best practices to provide our members with the best experience possible.</p>
        </ul>
     </div>
     <div className='w-[50%] md:w-[100%] p-[20px] bg-[white] dark:bg-[black]'>
        <h1 className='text-[30px] font-semibold'>Professionalism</h1>
        <p>The University Preparation Club team demonstrates an exceptional level of professionalism
           in fulfilling its mission of preparing students for admission to university.. </p> <br />
              <div className='items-center md:flex-col w'>
               
                <img src={img3} alt="" className='w-[60%]' />
              </div>
     </div>
   </div>
  </div>
 
 
  <div className=' flex items-center md:flex-col dark:bg-[black] dark:text-[white]'>
   <div className='bg-black px-[4%] text-white w-[50%] md:w-[100%] py-[17vh]'>
    <h1 className='text-[30px]'>Наши контакты</h1><br />
    <p>
    Адрес<br />
    Tаджикистан,Душанбе
    </p> <br />
    <p>
    Телефон <br />
    93 543 50 73
    </p> <br />
    <p>
        G-mail <br />
        upc@gmail.com
    </p> <br />
   
   </div>
   <img src={map} alt="" className='h-[545px]' />
  </div>
  </>
  )
}

export default Home
