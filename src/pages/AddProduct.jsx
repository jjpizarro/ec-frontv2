import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Collapse, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
//import { useNavigate } from "react-router-dom";

const AddProduct = ()=>{
    const [categories, setCategories] = useState([])
    const formInitialState = {
        "name": "",
        "quantity": 0,
        "description": "",
        "price": 0,
        "category_id": 0
      }
    const [formData, setFormData] = useState(formInitialState);
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [msg, setMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    //let navigate = useNavigate();
    useEffect(()=>{
        async function getCategories(){
            try {
                const response = await fetch("http://localhost/products/category");
                if(response.ok){
                    const categoryList = await response.json();
                    setCategories(categoryList)
                }
            } catch (error) {
                console.log("Error al hacer la petici'on");
            }
        }
        getCategories();
    }, []);

    const handleSubmit = ev =>{
        ev.preventDefault();
        async function postFormData (){
            const url = 'http://localhost/products'
            const configuration = {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            try {
                const response = await fetch(url, configuration);
                if(response.ok){
                    const data = await response.json();
                    console.log(data);
                    setOpen(true);
                    setMsg("Se guardó el producto")
                    //navigate('/products')
                }else{
                    setOpenError(true);
                    setErrorMsg("Ha ocurrido un error")
                }


            } catch (error) {
                setOpenError(true);
                setErrorMsg("Ha ocurrido un error")
            }
        }
        postFormData ();
    }
    const handleInputChange = ev =>{
        setFormData(
            {
                ...formData, 
                [ev.target.name] : ev.target.value
            }
        );

    }
    return (
    <Container maxWidth="md">
         
        <Box sx={{marginTop:8, display:'flex', flexDirection: 'column', alignItems:'center'}} >
            <Box sx={{ width: '100%' }}>
                <Collapse in={openError}>
                    <Alert severity="error"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenError(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                            {errorMsg}
                    </Alert>
                </Collapse>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                            {msg}
                    </Alert>
                </Collapse>
            </Box>
            <Typography component='h5' variant="h5">
                Add Product
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:2}}>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <TextField required fullWidth id="name" label="Nombre del producto" name="name" value={formData.name} onChange={handleInputChange}/>
                    </Grid>
                    <Grid item md={12}>
                        <TextField required multiline rows={6} fullWidth id="description" label="Descripci'on del producto" name="description" value={formData.description} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth type="number" id="quantity" label="Cantidad" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="price" label="Precio" name="price" value={formData.price} onChange={handleInputChange} />
                    </Grid>
                    <Grid item md={12}>
                        <FormControl fullWidth>
                            <InputLabel id="category-label">Categor&iacute;a</InputLabel>
                            <Select required
                                labelId="category-labe"
                                id="demo-select-small"
                                name="category_id"
                                label="Categor'ia"
                                value={formData.category_id} onChange={handleInputChange} 
                            >
                                { categories.length > 0? categories.map( category => (
                                    <MenuItem value={category.id}>
                                        {category.name}
                                    </MenuItem>
                                )):(
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>        
                                )

                                }
                                
                            </Select>
                        </FormControl>
                        
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Agregar</Button>
            </Box>
        </Box>
    </Container>
    )
}

export default AddProduct;