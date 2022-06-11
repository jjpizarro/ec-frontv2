import React from "react";
import { Link } from "react-router-dom";

export default function Home () {
    return (<> 
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Produts</Link></li>
            <li><Link to="/add-product">Add Products</Link> </li>
          </ul>
         </div>
      </>)
}