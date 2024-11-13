import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useUserAuth } from '../Context/UserAuthContext';
import Swal from 'sweetalert2';

const ManageProfile = () => {

    const { user } = useUserAuth();
    const [ProfileImage, setProfileImage] = useState();
    const [UserName, setUserName] = useState();
    const Navigate = useNavigate();
    const [UserData, SetUserData] = useState();
    // const [Profilevalue, SetProfileValue] = useState()
    // const [userNamevalue, SetuserNamevalue] = useState();
    //var userdata = {}
    useEffect(() => {
        const fetchUserData = () => {

            if (user) {
                axios.get(`http://localhost:4000/users`).then((response) => {
                    const currentUser = response.data.find((e) => e.UID === user.uid);
                    setProfileImage(currentUser.ProfileImage);
                    setUserName(currentUser.UserName);
                })

            }
        };
        fetchUserData();
    });

    // const updateProfileData = async (e) => {
    //     e.preventDefault();
    //     var update = {
    //         ProfileImage: ProfileImage.current.value,
    //         UserName: UserName.current.value,
    //     }

    //     await axios.put(`http://localhost:4000/users/${UserData[0].id}`, update).then(() => {
    //         Swal.fire({
    //             title: "Profile details updated successfully!!",
    //             showClass: {
    //                 popup: `
    //                 animate__animated
    //                 animate__fadeInUp
    //                 animate__faster
    //               `
    //             },
    //             hideClass: {
    //                 popup: `
    //                 animate__animated
    //                 animate__fadeOutDown
    //                 animate__faster
    //               `
    //             }
    //         });
    //         Navigate("/home");
    //     })


    //     e.target.reset();
    // }

    return (
        <div>
            <Header></Header>
            <div>
                <h1 className='text-center py-2 mt-4 text-2xl font-semibold'>Manage Profile</h1>
                <div className=" md:w-[95%] w-[95%] flex items-center  bg-secondary mx-auto rounded-2xl justify-between ">
                    <div className="min-h-[500px] md:min-h-[200px] rounded">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center">
                            <div className='mx-auto p-5'>
                                <Link to="/manage-profile"><h1 className="text-xl text-center font-semibold mb-5 cursor-pointer hover:bg-secondary hover:text-primary p-3 bg-primary text-secondary rounded-sm" >Profile Details</h1></Link>
                                <Link to="/update-login"><h1 className="text-xl text-center font-semibold mb-5 cursor-pointer hover:bg-secondary hover:text-primary p-3 bg-primary text-secondary rounded-sm">Update Login Details</h1></Link>
                            </div>
                            <div className="w-[100%] md:w-[500px] md:mx-5 mx-9 p-4 bg-white/80 mb-10 md:mt-10 text-black rounded-2xl shadow-2xl">
                                <div className="space-y-6 flex-col justify-center items-center">
                                    <img src={ProfileImage} className='w-28 h-28 rounded-full mx-auto'>
                                    </img>
                                    <h1 className="text-xl text-center font-semibold mb-5 text-adminprimary">
                                    {UserName}
                                    </h1>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProfile
