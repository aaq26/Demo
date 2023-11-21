import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom'; 

const drawerWidth = 240;
export default function PermanentDrawerLeft() {
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate('/');
    };
    const handleRedirect1 = () => {
      navigate('/orders');
    };
    const handleRedirect2 = () => {
      navigate('/reports');
    };
    const handleRedirect3 = () => {
      navigate('/customers');
    };
    const handleRedirect4 = () => {
      navigate('/About');
    };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          About
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <br />
          <Stack spacing={1} direction="column" className='w1'>
            <Button variant="text" onClick={handleRedirect}><DashboardIcon />Dashboard</Button>
            <Button variant="text" onClick={handleRedirect1}><AddShoppingCartIcon />Orders</Button>
            <Button variant="text" onClick={handleRedirect2}><ReportIcon />Reports</Button>
            <Button variant="text" onClick={handleRedirect3}><AccountCircleIcon />Customers</Button>
            <Button variant="text" onClick={handleRedirect4}><IntegrationInstructionsIcon />Abouts</Button>
          </Stack>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <br />
       < div className="ww9">
       <img src="https://pqcb.pshealthpunjab.gov.pk/Content/images/about/about-us.png" alt="Description of the image" width="400" height="300" >
       </img>
       </div>
       <div className="ww10">
        <InstagramIcon  />
        <PinterestIcon />
        <LinkedInIcon />
       </div>
       <hr />
      </Box>
    </Box>
  );
}
