import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../Sidebar";
import DeleteUsers from "./DeleteUsers";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
    const Navigate = useNavigate();
    //users data object destructring
    const [UserData, setUserData] = useState();

    const [DeleteMessage, setDeleteMessage] = useState(false)
    //datatable variables
    const [Search, setSearch] = useState();
    const coulumns = [
        {
            name: "User Name",
            selector: (row) => row.UserName,
            sortable: true,
            wrap: true
        },
        {
            name: "Email",
            selector: (row) => row.Email,
            sortable: true,
            wrap: true
        },
        {
            name: "Profile Image",
            selector: (row) => (<img src={row.ProfileImage} className="w-16 h-16"></img>),
            sortable: true,
        },
        {
            name: "Role",
            selector: (row) => row.Role,
            sortable: true,
            wrap: true
        },
        {
            name: "IsBuyer",
            selector: (row) => row.IsBuyer.toString(),
        },
        {
            name: "IsSeller",
            selector: (row) => row.IsSeller.toString(),
        },
        {
            name: "Action",
            cell: (row) => (
                <span>
                    <button className="bg-red-500 text-white p-2 rounded mx-2" onClick={() => { Navigate(`/admin/users/${row.id}`) }}>
                        <span><MdDelete /></span>
                    </button>
                </span>
            ),
        },
    ];
    //fetch user details
    const GetUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/users`);
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
                <h1 className="text-xl font-bold p-4">User Management</h1>
                <div className=" bg-white p-4 m-2 shadow-lg">
                    <DeleteUsers isOpen={DeleteMessage} onHide={() => { setDeleteMessage(false) }}></DeleteUsers>

                    <DataTable
                        columns={coulumns}
                        data={UserData}
                        pagination
                        fixedHeader
                        highlightOnHover
                        fixedHeaderScrollHeight="450px"x
                    />
                </div>
            </div>
        </div>
    )
}
