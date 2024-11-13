import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../Sidebar";
import DeleteSellCar from "./DeleteSellCar";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SellcarList() {
    const Navigate = useNavigate();
    //users data object destructring
    const [UserData, setUserData] = useState();

    const [DeleteMessage, setDeleteMessage] = useState(false)
    //datatable variables
    const [Search, setSearch] = useState();
    const coulumns = [
        {
            name: "City",
            selector: (row) => row.city,
            sortable: true,
            wrap: true
        },
        {
            name: "Make",
            selector: (row) => row.make,
            sortable: true,
            wrap: true
        },
        {
            name: "Model",
            selector: (row) => row.model,
            sortable: true,
            wrap: true
        },
        {
            name: "Fuel",
            selector: (row) => row.fuel,
            sortable: true,
            wrap: true
        },
        {
            name: "Color",
            selector: (row) => row.color,
            sortable: true,
            wrap: true
        },
        {
            name: "KMs",
            selector: (row) => row.km,
            sortable: true,
            wrap: true
        },
        {
            name: "Owner",
            selector: (row) => row.owner,
            sortable: true,
            wrap: true
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true,
            wrap: true
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            wrap: true
        },
        {
            name: "Car Images",
            selector: (row) => (<img src={row.imgs} className="w-16 h-16"></img>),
            sortable: true,
        },
        // {
        //     name: "Role",
        //     selector: (row) => row.Role,
        //     sortable: true,
        //     wrap: true
        // },
        {
            name: "Action",
            cell: (row) => (
                <span>
                    <button className="bg-red-500 text-white p-2 rounded mx-2" onClick={() => { Navigate(`/admin/sellers/${row.id}`) }}>
                        <span><MdDelete /></span>
                    </button>
                </span>
            ),
        },
    ];
    //fetch user details
    const GetUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/sell-car`);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetUsers();
    }, [UserData]);
    useEffect(() => {

    }, [Search])
    return (
        <div className="flex">
            <div className="basis-[18%]">
                <Sidebar></Sidebar>
            </div>
            <div className="bg-gray-300/40 basis-[82%]">
                <Header></Header>
                <h1 className="text-xl font-bold p-4">Sell Cars Management</h1>
                <div className=" bg-white p-4 m-2 shadow-lg">
                    <DeleteSellCar isOpen={DeleteMessage} onHide={() => { setDeleteMessage(false) }}></DeleteSellCar>

                    <DataTable
                        columns={coulumns}
                        data={UserData}
                        pagination
                        fixedHeader
                        highlightOnHover
                        fixedHeaderScrollHeight="450px"
                    />
                </div>
            </div>
        </div>
    )
}
