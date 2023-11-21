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
import { useNavigate } from 'react-router-dom'; 
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const drawerWidth = 240;
export default function Reports() {
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
          Customers
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
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={9}>
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 40 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ali A.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 40 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sarah A.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={9}>
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 40 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ali A.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 40 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sarah A.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </Box>
        </Typography>
        
      </Box>
    </Box>
  );
}
