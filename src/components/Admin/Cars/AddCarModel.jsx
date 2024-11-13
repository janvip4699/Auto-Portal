import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import axios from 'axios';
import CarModelList from './CarModelList';
import { Select, Option } from "@material-tailwind/react";

export default function AddCarModel() {
  const [carMakeData, setcarMakeData] = useState();
  const [msg, setMsg] = useState(false);
  const model = useRef();
  const [makename, setmake] = useState();
  const makeRef = useRef();

  

  const addCarModel = (e) => {
    e.preventDefault();
    

    var ins = {
      model: model.current.value,
      makeId: makeRef.current.value
    };
    axios.post(`http://localhost:4000/car-model`, ins).then(() => {
      setMsg(true);
      if (msg == false) {
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      }
    })
    e.target.reset();
  };

  const GetCarMake = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/car-make`);
      setcarMakeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCarMake();
  }, [carMakeData]);

  return (
    <div>
      <div className="flex">
        <div className="basis-[18%]">
          <Sidebar></Sidebar>
        </div>
        <div className="bg-gray-300/40 basis-[82%]">
          <Header></Header>
          <h1 className="text-2xl font-bold p-4">Car Model Management</h1>
          <div className="bg-white p-4 m-2 shadow-lg" onSubmit={addCarModel}>
            {
              msg && <div className='bg-blue-200 text-black px-2 py-2 m-2'>
                Car model added successfully!!
              </div>
            }
            <form className='flex flex-row  px-20 gap-10 items-center justify-center'>
              <div className="sm:col-span-6">
                <select variant="standard" className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6' ref={makeRef}>
                  {carMakeData && carMakeData.map((item) => {
                    return (
                      <option className='hover:bg-secondary text-center py-2' value={item.id}>{item.make}</option>
                    );

                  })}

                </select>
              </div>
              <div className="sm:col-span-6">
                <div>
                  <input
                    id="model"
                    name="model"
                    type="text"
                    autoComplete="make"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder='Model of the car'
                    ref={model}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-3 py-2 text-md font-semibold text-white shadow-sm hover:primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>

          <CarModelList></CarModelList>

        </div>
      </div>
    </div>
  )
}
