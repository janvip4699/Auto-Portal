import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';
import axios from 'axios';

const UpdateLogin = () => {

    const { user } = useUserAuth();
    const [UserData, SetUserData] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const emailRef = useRef("");
    const passRef = useRef();

    useEffect(() => {
        const fetchUserData = () => {

            if (user) {
                axios.get(`http://localhost:4000/users`).then((response) => {
                    const currentUser = response.data.find((e) => e.UID === user.uid);
                    SetUserData(currentUser);
                    emailRef.current.value=currentUser.Email
                    setEmail(currentUser.Email);
                    //setPassword(currentUser.Password);
                })

            }
        };
        fetchUserData();
    },[UserData]);


    return (
        <div>
            <Header></Header>
            <div>
                <h1 className='text-center py-2 mt-4 text-2xl font-semibold'>Manage Profile</h1>
                <div className="md:w-[95%] w-[95%] flex items-center  bg-secondary mx-auto rounded-2xl justify-between ">
                    <div className="min-h-[500px] md:min-h-[200px] rounded">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center">
                            <div className='mx-auto p-5'>
                                <Link to="/manage-profile"><h1 className="text-xl text-center font-semibold mb-5 cursor-pointer hover:bg-secondary hover:text-primary p-3 bg-primary text-secondary rounded-sm" >Profile Details</h1></Link>
                                <Link to="/update-login"><h1 className="text-xl text-center font-semibold mb-5 cursor-pointer hover:bg-secondary hover:text-primary p-3 bg-primary text-secondary rounded-sm">Update Login Details</h1></Link>
                            </div>
                            <div>
                                <div className="w-[100%] md:w-[500px] md:mx-5 mx-9 p-4 bg-white/80 mb-10 md:mt-10 text-black rounded-2xl shadow-2xl">
                                    <div>
                                        <h1 className="text-xl text-center font-semibold mb-5 text-adminprimary">
                                            Update Login Details
                                        </h1>
                                        <form action="">
                                            <div className="space-y-6 flex-col justify-center items-center">

                                                <div
                                                    className="flex-col justify-center items-center mx-auto"
                                                >
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                        placeholder="Email"
                                                        ref={emailRef}
                                                        value={Email}
                                                        onChange={(e)=>{setEmail(e.current.value)}}
                                                    />
                                                </div>

                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none"
                                                    placeholder="New Password"

                                                />

                                                <input
                                                    type="password"
                                                    name="confirmpassword"
                                                    id="confirmpassword"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none"
                                                    placeholder="Confirm Password"

                                                />
                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="btn-primary bg-primary rounded-sm p-2 text-secondary font-bold text-xl w-[50%]"
                                                    >
                                                        Update Login
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateLogin
