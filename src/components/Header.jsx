import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';
import axios from 'axios';

const Header = () => {

  const { logOut, user } = useUserAuth();
  const [UserData, setUserData] = useState({});
  const [locationData, setLocationData] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const response = await axios.get(`http://localhost:4000/users`);
        setUserData(response.data.filter((e) => e.UID == user.uid));
      }
    };

    fetchUserData();
  });

  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    }
    catch (error) {
      console.log(error.message);
    }
  };

  const GetCities = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/locations`);
      setLocationData(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCities();
  }, [locationData]);

  return (
    <header className='bg-primary text-secondary py-4 w-full'>
      <nav className='container flex gap-20 items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Link to="/home" className='font-semibold text-3xl'>AutoPortal</Link>
          <img src={logo} alt="logoimg" style={{ width: "100%", height: "40px" }}></img>
        </div>
        <div className='hidden md:flex items-center gap-5 font-medium text-md'>
          <Link to="/home" className="hover:text-black transition duration-200 ease-linear">Home</Link>
          <Link to="/buy-car" className="hover:text-black transition duration-200 ease-linear">Buy Car</Link>
          <Link to="/sell-car" className="hover:text-black transition duration-200 ease-linear">Sell Car</Link>
          <Link to="/contact-us" className="hover:text-black transition duration-200 ease-linear">Contact Us</Link>

          <div className="group cursor-pointer">
            <div className='flex md:flex items-center gap-[2px]'>
              <span>
                {UserData && UserData[0] && (
                  <h1 className='text-md'>{UserData[0].UserName}</h1>
                )}
              </span>
              <span>
                {UserData && UserData[0] && (
                  <img
                    src={UserData[0].ProfileImage}
                    className="w-10 h-10 rounded-full"
                  ></img>
                )}
              </span>
            </div>
            <div className="hidden md:flex lg:flex">
              <div className="md:absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000 z-50">
                <ul className="w-28 text-[14px] space-y-1 bg-secondary translate-x-6 p-2 shadow-md text-black rounded-md group-hover:-translate-y-2 mt-3 translate-y-3 duration-700  transition-all ease-in-out">
                  <li className="p-2 hover:bg-primary hover:text-secondary rounded-lg duration-700 ease-in-out transition-all">
                    {" "}
                    <Link to={"/manage-profile"}>Profile</Link>
                  </li>

                  <li className="p-2 hover:bg-primary hover:text-secondary rounded-lg duration-700 ease-in-out transition-all">
                    {" "}
                    <Link to={"/user-cars"}>Your Cars</Link>
                  </li>
                  <li
                    className="p-2 hover:bg-primary hover:text-secondary rounded-lg duration-700 ease-in-out transition-all"
                    onClick={handleLogout}
                  >
                    {" "}
                    Log-Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
