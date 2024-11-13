import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import AdminPhoto from "../../assets/images/janvi.jpeg"
import { useUserAuth } from '../../Context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const { logOut, user } = useUserAuth();
    const Navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await logOut();
          Navigate("/admin");
        }
        catch (error) {
          console.log(error.message);
        }
      };
      
    return (
        <div>
            <div className='container bg-primary p-4 rounded-lg m-2 flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-secondary'>Admin Dashboard</h1>
                </div>
                <div>
                    <div className="flex">
                        <input
                            type="text"
                            className="rounded bg-secondary w-[250px] p-2 outline-none border-none placeholder:text-[14px]"
                            placeholder="Search"
                        ></input>
                        <div
                            className="rounded-tr-[5px] rounded-br-[5px] bg-adminprimary px-[14px] flex items-center
               justify-center cursor-pointer text-white"
                        >
                            <CiSearch color="white" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-8 ">

                    <div className="flex items-center gap-4">
                        <p className='text-xl text-secondary font-bold'>Janvi Parmar</p>
                        <div className="h-[50px] w-[50px] rounded-full flex items-center cursor-pointer justify-center relative">
                            <img src={AdminPhoto} alt="" className='rounded-full'/>
                        </div>
                        <div>
                            <button type="button" className='border-2 border-secondary text-secondary text-lg font-bold p-2 rounded-md hover:bg-secondary hover:text-primary' onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
