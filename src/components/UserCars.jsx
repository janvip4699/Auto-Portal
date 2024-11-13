import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useUserAuth } from '../Context/UserAuthContext';

const UserCars = () => {

    const [cardata, setcarData] = useState();
    const { user } = useUserAuth();
    const [UserData, setUserData] = useState();

    useEffect(() => {
        const fetchUserData = async () => {
          if (user) {
            const response = await axios.get(`http://localhost:4000/users`);
            setUserData(response.data.filter((e) => e.UID === user.uid));
          }
        };
    
        fetchUserData();
      });

    useEffect(() => {
        axios.get("http://localhost:4000/sell-car").then((response) => {
            setcarData(response.data.filter((e)=>e.seller_uid === UserData[0].UID || e.buyer_uid === UserData[0].UID  ));
            //console.log(cardata);
            // setcarData(response.data);
        })
    });

  return (
    <div>
      <Header></Header>
      <h1 className='text-center py-2 text-4xl font-semibold border-b-2'>Your Cars</h1>
      <div className="text-black px-3 rounded-xl mb-2 cursor-pointor grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {
        cardata && cardata.map((item) => (
          <div class="max-w-sm rounded overflow-hidden shadow-2xl">
            <img className="w-[380px] h-[230px]" src={item.imgs} alt="CarImg" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{item.make} <span>{item.model}</span></div>
              <p className='text-primary font-semibold text-sm'>{item.km} Km | {item.fuel} | {item.city} </p>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 flex justify-between">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rs. {item.price}</span>
              <span class="inline-block bg-primary rounded-md px-3 py-2 text-md font-semibold text-secondary mr-2 mb-2">{item.status}</span>
            </div>
          </div>
        )

        )
      }
    </div>
    </div>
  )
}

export default UserCars
