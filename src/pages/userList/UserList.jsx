import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        // set new data from filtering data
        setData(data.filter((item)=> item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User Name', width: 250, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 250 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
            field: "action",
            headerName: "Actions",
            width: 200,
            renderCell: (params)=> {
                return(
                    <>
                    <Link to={"/users/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    return (
        <div className="userList">
            <h3 className="userListTitle">User List</h3>
            <div className="userListContainer">
            <DataGrid disableSelectionOnClick
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
            </div>
        </div>
    )
}

export default UserList
