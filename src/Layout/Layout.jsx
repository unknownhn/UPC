import React from 'react'
import {Link, Outlet} from "react-router-dom"
import Swither from '../components/Swither';


const Layout = ({img}) => {
  
  return (
    <div >
      <div className='flex items-center justify-between w-[100%] md:flex px-[5%] py-[10px] dark:bg-[black] dark:text-[white] '>
      <div>
      <img src={img} alt="" className='w-[50px]' />
      </div>
      <ul className='flex gap-[30px] md:flex-wrap md:hidden '>  
        <li>
          <Link to="/">Home</Link>
        </li> 
        <li>
          <Link to="/about">Grants</Link>
        </li> 
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/diagnostics">Students</Link>
        </li>
       
        <li>
          <Link to="/sale">About us</Link>
        </li>
        
      
        <li>
          <Link to="/comments"> Reviews</Link>
        </li>
        <li>
          <Link >Contacts</Link>
        </li>
      </ul>
      <Swither/>
      <button className='hidden'>🔳</button>
    </div>
    <Outlet/>
    <div className='dark:bg-[black] dark:text-[white] bg-[#4585fb] px-[10vh] md:px-[20px] text-white py-[6vh] flex items-center justify-between md:flex-wrap'>
      <div>
       <img src={img} alt="" className='w-[40px]' /><br />
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
      <ul>
        <h1 className="font-semibold">О гранте</h1>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
      </ul>
      <ul>
        <h1 className="font-semibold">Гранты</h1>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
      </ul>
      <ul>
        <h1 className="font-semibold">Ученики</h1>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
      </ul>
      <ul>
        <h1 className="font-semibold">Услуги</h1>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
        <li>Название пункта меню</li>
      </ul>
    </div>
    </div>
  )
}

export default Layout
