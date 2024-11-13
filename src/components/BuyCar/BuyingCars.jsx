import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import BuyCarCard from './BuyCarCard'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyingCars = () => {
    //search method will be here
    const [cardata, setcarData] = useState();
    const [filtercarData, setfiltercarData] = useState(cardata);
    // const [searchcarData, setsearchcarData] = useState();
    
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/sell-car").then((response) => {
            setcarData(response.data.filter((e)=>e.status.toLowerCase().includes("available")));
            setfiltercarData(response.data.filter((e)=>e.status.toLowerCase().includes("available")));
        })
    }, []);

    const handleSearch = (Cityvalue, Makevalue) => {
        // const value = event.target.value;
        // setsearchcarData(value);

        const filter = cardata.filter((car) => {
            const matchCity = car.city.toLowerCase().includes(Cityvalue.toLowerCase());
            const matchMake = car.make.toLowerCase().includes(Makevalue.toLowerCase());
            // console.log(matchCity)
            return matchCity && matchMake;
        })
    //    console.log(filter)
        setfiltercarData(filter);
    }

    return (
        <div className='w-full container h-screen mt-5'>
            <div className='flex flex-row'>
                <div>
                    <Sidebar onFilter={handleSearch} />
                </div>
                <div className='w-full px-5 py-5'>
                    <h1 className='font-bold text-3xl border-b-4'>Best Used Cars</h1>
                    <div className='px-4 py-4'>
                        <BuyCarCard filteredCars={filtercarData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyingCars
