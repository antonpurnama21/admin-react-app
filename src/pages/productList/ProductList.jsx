import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter( (item) => item.id !== id ))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product Name', width: 250, renderCell: (params) => {
            return (
                <div className="productListProduct">
                    <img className="productListImg" src={params.row.image} alt="" />
                    {params.row.productname}
                </div>
            )
        } },
        { 
            field: 'stock', 
            headerName: 'Stock', 
            width: 250 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field: "action",
            headerName: "Actions",
            width: 200,
            renderCell: (params)=> {
                return(
                    <>
                    <Link to={"/products/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    return (
        <div className="productList">
            <h3 className="productListTitle">Product List</h3>
            <div className="productListContainer">
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

export default ProductList
