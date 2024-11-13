import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
import Cities from './Cities';
import DeleteCity from './DeleteCity';

export default function CitiesList() {

    const [citiesData, setCitiesData] = useState();

    const [DeleteMessage, setDeleteMessage] = useState(false)
    const Navigate = useNavigate()
    //datatable variables
    const [Search, setSearch] = useState();
    const coulumns = [
        {
            name: "City ID",
            selector: (row) => row.id,
            sortable: true,
            wrap: true
        },
        {
            name: "City Name",
            selector: (row) => row.city,
            sortable: true,
            wrap: true
        },
        {
            name: "Action",
            cell: (row) => (
                <span>
                    <button className="bg-red-500 text-white p-2 rounded mx-2" onClick={() => { Navigate(`/admin/locations/${row.id}`) }}>
                        <span><MdDelete /></span>
                    </button>
                </span>
            ),
        },
    ];
    //fetch car make details
    const GetCitiesData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/locations`);
            setCitiesData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetCitiesData();
    }, [citiesData]);

    return (

        <div className=" bg-white p-4 m-2 shadow-lg">
            <DeleteCity isOpen={DeleteMessage} onHide={() => { setDeleteMessage(false) }}></DeleteCity>

            <DataTable
                columns={coulumns}
                data={citiesData}
                pagination
                fixedHeader
                highlightOnHover
                fixedHeaderScrollHeight="290px"
               
            />
        </div>

    )
}
