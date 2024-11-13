import React, { useRef, useState } from "react";
import { Modal } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from "../assets/images/signup.jpg";
import Image from "../assets/images/user.png";
import axios from "axios";
import Swal from "sweetalert2";
import { UserAuthContextProvider } from "../Context/UserAuthContext";
import { useUserAuth } from "../Context/UserAuthContext";

import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Register(props) {
    const ProfileImage = useRef(null);
    const [UserImage, setUserImage] = useState(Image);
    const [Message, SetMessage] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { signUp } = useUserAuth();

    //form input object destructuring
    const UserName = useRef("");
    const Email = useRef("");
    const Password = useRef("");
    const Role = useRef("");

    //functions
    const ChangeProfilePic = () => {
        setUserImage(ProfileImage.current.value);
    };

    //user Registration
    const RegisterUser = async (event) => {
        event.preventDefault();
        setError("")

        try {
            const { user } = await signUp(Email.current.value, Password.current.value);
            var UserDetails = {
                UserName: UserName.current.value,
                Email: Email.current.value,
                Password: Password.current.value,
                Role: "user",
                ProfileImage: ProfileImage.current.value,
                UID: user.uid,
                IsBuyer: false,
                IsSeller: false,
            };

            axios.post(`http://localhost:4000/users`, UserDetails).then(() => {

                Swal.fire({
                    title: "Registered successfully!!",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                navigate("/");
                e.target.reset();
            });
        }
        catch (err) {
            setError(err.message);
        }
    };
    return (
        <div>
            <div className=" mt-14 md:w-[70%] w-[95%] flex items-center  bg-primary md:mx-56 mx-auto rounded-2xl ">
                <div className="min-h-[500px] md:min-h-[200px] rounded">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div>
                                <img src={SignUpImage} className="h-[450px]"></img>
                            </div>
                            {/*Sign Up Form */}
                            <div>
                                {error && <div className="bg-red-500 " variant="danger">{error}</div>}

                                <div className="w-[90%] md:w-[full] md:mx-4 mx-auto p-4 bg-white/80 mb-10 md:mt-10  text-black rounded-2xl shadow-2xl">
                                    <div>
                                        <h1 className="text-4xl text-center font-semibold mb-5 text-adminprimary">
                                            Sign Up
                                        </h1>
                                        <form action="" onSubmit={RegisterUser}>
                                            <div className="space-y-6 flex-col justify-center items-center">
                                                <div
                                                    className="flex-col justify-center items-center mx-auto"
                                                >
                                                    <input
                                                        id="profileimage"
                                                        type="url"
                                                        className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                        ref={ProfileImage}
                                                        placeholder="Image URL"
                                                        onChange={ChangeProfilePic}
                                                    />
                                                </div>

                                                <input
                                                    type="text"
                                                    name="naame"
                                                    id="name"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                    placeholder="Name"
                                                    ref={UserName}
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                    placeholder="Email"
                                                    ref={Email}
                                                />
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none"
                                                    placeholder="Password"
                                                    ref={Password}
                                                />
                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="btn-primary bg-primary rounded-sm p-2 text-secondary font-bold text-xl w-[50%]"
                                                    >
                                                        Sign-Up
                                                    </button>
                                                </div>
                                                <div className="text-center">
                                                    <span className="">
                                                        Already Have Account?
                                                        <Link
                                                            to="/login"
                                                            className="text-xl ms-2 text-primary font-bold"
                                                        >
                                                            Log-In
                                                        </Link>
                                                    </span>
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
