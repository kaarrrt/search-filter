import React from 'react'
import logo from './images/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <img src={logo} alt="" className='w-48 ml-24 mt-8 cursor-pointer' onClick={()=>{window.location.reload()}}/>
        <ul className='flex  ml-[33%] mt-[-2.2%]'>
            <li className='font-semibold  cursor-pointer' onClick={()=>{window.location.reload()}}>
                Rent
            </li>
            <li className='font-normal pl-12 cursor-pointer'>
                Buy
            </li>
            <li className='font-normal pl-12 cursor-pointer'>
                Sell
            </li>
            <li className='font-normal pl-12 cursor-pointer'>
                Manage Property
            </li>
            <li className='font-normal pl-12 cursor-pointer'>
                Resources
            </li>
            <li className='font-[400] pl-48 text-xl mt-[-0.5%] cursor-pointer'>
                Login
            </li>
            <li className='font-[400] ml-4 px-4 text-xl mt-[-0.5%]'>
                <button className='bg-black text-white px-4 py-2 mt-[-15%] rounded-md'>SignIn</button>
            </li>
        </ul>
        <div className='bg-black w-100 h-[0.2vh] my-12'></div>
    </div>
  )
}

export default Navbar