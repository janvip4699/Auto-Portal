import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [showSubmenu, setshowSubmenu] = useState(false);
  const handlesubMenu = () => {
    setshowSubmenu(!showSubmenu);
  }
  return (
    <div>
      <div className='h-screen w-full bg-secondary px-8 py-5'>
        <h1 className='text-3xl font-bold mt-3'>Admin Panel</h1>
        <div>
          <ul className='list-none flex-col gap-10 mt-12 text-md'>
            <Link to="/admin/dashboard"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Home</li></Link>
            <Link to="/admin/users"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Users</li></Link>
            <Link to="/admin/sellers/sell-cars-list"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Sell Cars List</li></Link>
            <div className='group'>
              <Link to="/admin/cars/add-car-make"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center relative' onClick={handlesubMenu}>Cars</li></Link>
              <ul className={`list-none flex-col text-sm hidden group-hover:block`}>
                <Link to="/admin/cars/add-car-make"><li className='rounded-md p-1 my-2 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 ms-5'>Add Car Make</li></Link>
                <Link to="/admin/cars/add-car-model"><li className='rounded-md p-1 my-2 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 ms-5'>Add Car Model</li></Link>
              </ul>
            </div>
            <Link to="/admin/locations"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Locations</li></Link>
            <Link to="/admin/contacts"><li className='rounded-md p-2 my-5 transition-all duration-300 ease-in-out hover:bg-primary/45 flex gap-5 items-center'>Contacts</li></Link>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
