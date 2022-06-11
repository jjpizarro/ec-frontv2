import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";

export default function ProductList(){
    const initialProductList = [

    ];
    const [productList, setProductList] = useState(initialProductList);

    useEffect(()=>{
        async function fecthProducts() {
            try {
                const response = await fetch("http://localhost/products/");
                if(response.ok){
                    const products = await response.json();
                    setProductList(products);
                }
            } catch (error) {
                console.log("No se pudo hacer la petici'on")
            }
            
        };

        fecthProducts();

    }, []);
    
    return (

        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Descripci&oacute;n</TableCell>
              <TableCell>Categor&iacute;a</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                    {product.name}
                </TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="center">{product.description}</TableCell>
                <TableCell align="center">{product.category.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );


}

