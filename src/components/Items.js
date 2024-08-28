import { useState,useEffect } from "react";
import axios from "axios";
import './Items.css'
import { useNavigate } from "react-router-dom";


function Items(){
   const [items,setItems] =useState([]);
   const navigate = useNavigate();
   useEffect(() =>{
        fetchitems();
  },[])
  const fetchitems = () => {

     axios.get('http://localhost:5000/items')
     .then(Response=>{
        setItems(Response.data);

     })
     .catch(Error=>{
        console.error('there is no items in the store');

     })
    }


const handleDelete = (id)=> {
    axios.delete(`http://localhost:5000/items/${id}`)
    .then(response => {
        fetchitems();
    })
    .catch(error => {
        console.error('There was an error deleting the item data',error)
    })
}

    return(
        <div className="cointainer-item mt-4">
            <div className="row">
                {items.map(items=>(
                    <div className="card-item" mb-4 >
                    <img src={items.image} className="card-img-top" />
                    
                    <div className="list-group list-group-flush">
                      <p className="list-item"><b>Name: </b>{items.name}</p>
                      <p className="list-item"><b>Description:  </b>{items.description}</p>
                      <p className="list-item"><b>Price:  </b>${items.price}</p>
                    </div>
                    <div className="card-body">
                      
                    <button  className="card-link" onClick={()=> handleDelete(items.id)}>DELETE</button>
                    <button className="card-link" onClick={() => navigate(`/updateitem/${items.id}`)}>UPDATE</button>
                    </div>
                  </div>
                ))
                }
            </div>
        </div>
    )
}
export default Items;