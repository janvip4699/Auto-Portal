import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function DeleteCarMake(props) {
    
  const { id } = useParams();
  
  const [Message, SetMessage] = useState(false);
  const Navigate=useNavigate()
  useEffect(() => {
    axios.delete(`http://localhost:4000/car-make/${id}`).then(()=>{
        
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
        className={`bg-red-100 border border-red-400 text-red-700 px-4 rounded relative ${
            Message ? "opacity-100" : "opacity-0"
          } duration-700 transition-all`} 
        role="alert"
      >
        
        <span className="block sm:inline mx-2">
          Car Make <strong className="font-bold">Deleted</strong> Succesfully!
        </span>
      </div>
    </>
  )
}

export default DeleteCarMake