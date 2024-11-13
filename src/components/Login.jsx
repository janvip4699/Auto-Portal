import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpImage from '../assets/images/signup.jpg'
import { useUserAuth } from "../Context/UserAuthContext";

const Login = (props) => {
  const { logIn } = useUserAuth();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const Email = useRef("");
  const Password = useRef("");
  const LoginUSer = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(Email.current.value, Password.current.value);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div
        {...props}
        className={`absolute backdrop-blur-lg pt-24${props.isOpen
          ? "top-0 opacity-100 z-[1030] duration-700"
          : "-top-[100%] opacity-0 -z-[1030] duration-700"
          } transition-all duration-700`}
      ></div>
      <div className=" mt-24 md:w-[70%] w-[95%] flex items-center  bg-primary md:mx-56 mx-auto rounded-2xl ">
        <div className="min-h-[500px] md:min-h-[200px] rounded">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div>
                <img src={SignUpImage} className="h-[300px]"></img>
              </div>

              <div className="w-[90%] md:w-[full] md:mx-4 mx-auto p-4 bg-white/80 mb-10 md:mt-10  text-black rounded-2xl shadow-2xl">
                <div>
                  {error && <div className="bg-red-500 " variant="danger">{error}</div>}
                  <h1 className="text-4xl text-center font-semibold mb-5 text-adminprimary">
                    Log-In
                  </h1>
                  <form action="" onSubmit={LoginUSer}>
                    <div className="space-y-6 flex-col justify-center items-center">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        ref={Email}
                        className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                        placeholder="Email"

                      />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        ref={Password}
                        className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none"
                        placeholder="Password"

                      />

                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="btn-primary bg-primary rounded-sm p-2 text-secondary font-bold text-xl w-[50%]"
                        >
                          Sign-In
                        </button>
                      </div>
                      <div className="text-center">
                        <span className="">
                          Don't have account?
                          <Link
                            to="/register"
                            className="text-xl ms-2 text-primary font-bold"
                          >
                            Sign Up
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
  )
}

export default Login
