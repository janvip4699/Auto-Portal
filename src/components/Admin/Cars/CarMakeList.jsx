import React, { useEffect, useState } from 'react'
import DeleteCarMake from './DeleteCarMake';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';

export default function CarMakeList() {

    const [carMakeData, setcarMakeData] = useState();

    const [DeleteMessage, setDeleteMessage] = useState(false)
    const Navigate = useNavigate()
    //datatable variables
    const [Search, setSearch] = useState();
    const coulumns = [
        {
            name: "Make of the Car",
            selector: (row) => row.make,
            sortable: true,
            wrap: true
        },
        {
            name: "Action",
            cell: (row) => (
                <span>
                    <button className="bg-red-500 text-white p-2 rounded mx-2" onClick={() => { Navigate(`/admin/cars/delete-car-make/${row.id}`) }}>
                        <span><MdDelete /></span>
                    </button>
                </span>
            ),
        },
    ];
    //fetch car make details
    const GetCarMake = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/car-make`);
            setcarMakeData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetCarMake();
    }, [carMakeData]);

    return (

        <div className=" bg-white p-4 m-2 shadow-lg">
            <DeleteCarMake isOpen={DeleteMessage} onHide={() => { setDeleteMessage(false) }}></DeleteCarMake>

            <DataTable
                columns={coulumns}
                data={carMakeData}
                pagination
                fixedHeader
                highlightOnHover
                fixedHeaderScrollHeight="290px"
               
            />
        </div>

    )
}
