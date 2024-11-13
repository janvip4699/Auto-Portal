import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { BsCarFront } from "react-icons/bs";
import SellCarForm from './SellCarForm';

const SellingCars = () => {
  return (
    <div className='w-full h-screen container'>
      <div className='bg-secondary text-gray-600 h-[250px]'>
        <h1 className='font-bold text-3xl text-center px-4 py-5'>SELL CAR ONLINE FOR FREE</h1>
        <ul className='list-none flex gap-10 items-center justify-center'>
          <li className='flex gap-4'>
            <IoHomeOutline size={40} />
            <p className='text-sm'>Sell from your <br></br> doorstep</p>
          </li>
          <li className='flex gap-4'>
          <BsPersonCheck size={40} />
            <p className='text-sm'>Verified <br></br>buyers</p>
          </li>
          <li className='flex gap-4'>
            <BsCarFront  size={40}/>
            <p className='text-sm'>Best price for <br></br>your car</p>
          </li>
        </ul>
        <SellCarForm/>
      </div>
     
    </div>
  )
}

export default SellingCars
