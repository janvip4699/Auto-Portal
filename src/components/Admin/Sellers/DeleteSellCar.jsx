import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function DeleteSellCar(props) {
    
  const { id } = useParams();
  
  const [Message, SetMessage] = useState(false);
  useEffect(() => {
    axios.delete(`http://localhost:4000/sell-car/${id}`).then(()=>{
        SetMessage(true);
        if (Message == false) {
          setTimeout(() => {
            SetMessage(false);
            
            props.onHide();
          }, 2000);
        }
    })
  });
  return (<>
    <div {...props}
        className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${
            Message ? "opacity-100" : "opacity-0"
          } duration-700 transition-all`} 
        role="alert"
      >
        
        <span className="block sm:inline mx-2">
          Seller <strong className="font-bold">Deleted</strong> Succesfully!
        </span>
      </div>
    </>
  )
}

export default DeleteSellCar