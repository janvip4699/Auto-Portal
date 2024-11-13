import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar';
import Header from '../Header';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import DeleteContact from './DeleteContact';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {

  const [contactData, setcontactData] = useState();
  const [DeleteMessage, setDeleteMessage] = useState(false);
  const Navigate=useNavigate()
  
  const coulumns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      wrap: true
    },
    {
      name: "First Name",
      selector: (row) => row.firstname,
      sortable: true,
      wrap: true
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
      sortable: true,
      wrap: true
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      wrap: true
    },
    {
      name: "Phone No",
      selector: (row) => row.phone,
      sortable: true,
      wrap: true
    },
    {
      name: "Message",
      selector: (row) => row.message,
      sortable: true,
      wrap: true
    },
    {
      name: "Action",
      cell: (row) => (
        <span>
          <button className="bg-red-500 text-white p-2 rounded mx-2" onClick={() => { Navigate(`/admin/delete-contacts/${row.id}`) }}>
            <span><MdDelete /></span>
          </button>
        </span>
      ),
    },
  ];
  //fetch contacts details
  const GetContactsData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/contact-us`);
      setcontactData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetContactsData();
  }, [contactData]);


  return (
    <div>
      <div className="flex">
        <div className="basis-[18%]">
          <Sidebar></Sidebar>
        </div>
        <div className="bg-gray-300/40 basis-[82%]">
          <Header></Header>
          <h1 className="text-2xl font-bold p-4">Contacts Management</h1>

          <div className=" bg-white p-4 m-2 shadow-lg">
            <DeleteContact isOpen={DeleteMessage} onHide={() => { setDeleteMessage(false) }}></DeleteContact>

            <DataTable
              columns={coulumns}
              data={contactData}
              pagination
              fixedHeader
              highlightOnHover
              fixedHeaderScrollHeight="290px"

            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contacts
