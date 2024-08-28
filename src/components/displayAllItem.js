import React, { useState, useEffect } from 'react';
import axios from 'axios';
function displayAllItem(){
    const [items, setItems] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/items')
        .then(response => setItems(response.data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);
  
    return(

        <div className="container">
      <h1>All Pizza Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  
    )
}
export default displayAllItem;