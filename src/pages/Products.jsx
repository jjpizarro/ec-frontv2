import { Container } from "@mui/material";
import React from "react";
import ProductsList from "../components/products/ProductsList"
const Products = ()=>{
    return (<Container maxWidth="md" sx={{marginTop:8}}>
            <ProductsList/>
            </Container>)
}
export default Products;