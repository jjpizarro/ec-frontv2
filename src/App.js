import React from "react";
import MisRutas from "./MisRutas";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function App() {
  
  return (
    
      <div >
        <AppBar position="static">
          <Container maxWidth="xl">
              <Toolbar disableGutters>
                <AutoStoriesIcon sx={{display:{xs:'none', md: 'flex'}, mr: 2}} />
                <Typography variant="h6" noWrap component="a" href="/" 
                   sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,                    
                    color: 'inherit',
                    textDecoration: 'none',
                  }}>
                    Mi app
                  </Typography>
                  
                  <Box sx={{flexGrow: 1, display:{xs:'none', md: 'flex'}}}>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }} component="a" href="/products"   >
                      Products
                    </Button>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }} component="a" href="/add-product"   >
                      Add Product
                    </Button>
                  </Box>
                 
                    
             </Toolbar>
          </Container>
        </AppBar>
       
        <MisRutas />
      </div>

  );
}

export default App;
