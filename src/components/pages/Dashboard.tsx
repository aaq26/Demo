import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { LineChart } from '@mui/x-charts/LineChart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { useNavigate } from 'react-router-dom'; 

const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
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

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const years = [
    new Date(1990, 0, 1),
    new Date(1992, 0, 1),
   
    new Date(1994, 0, 1),
    new Date(1995, 0, 1),
   
    new Date(1998, 0, 1),
    
    new Date(2000, 0, 1),
    
  ];
  const FranceGDPperCapita = [
    28129,28619.805,  28907.977, 29418.863, 29736.645,  33409.68,   
  ];
  

 

  const lineChartsParams = {
    series: [
      {
        
        data: FranceGDPperCapita,
        showMark: false,
      },
      

    ],
    width: 800,
    height: 250,
  };
  
  const yearFormater = (date: Date) => date.getFullYear().toString();
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;

  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" fontFamily={"sans-serif"} color={"#1976d2"}>
          Recent Deposit
        </Typography>
        <Typography variant="h5" component="div">
          $3,024.00
        </Typography>
        <Typography variant="body2">
          on 15 March,2019
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <a href='' className='ww6'>View Balance</a>
      </CardActions>
    </React.Fragment>
  );
  function createData(
    Date: string,
    Name: string,
    ShipTo: string,
    PaymentMethod: string,
    SaleAmount: string
  ) {
    return { Date, Name, ShipTo, PaymentMethod, SaleAmount };
  }
  
  const rows = [
    createData('16 Mar,2019', "ElvisPresley", "Tupelo,MS", "VISA3719",'$44'),
    createData('15 Mar,2019', "ElvisPresley", "Tupelo,MS", "VISA3719",'$44'),
    createData('12 Mar,2019', "ElvisPresley", "Tupelo,MS", "VISA3719",'$44'),
    createData('13 Mar,2019', "ElvisPresley", "Tupelo,MS", "VISA3719",'$44'),
    createData('14 Mar,2019', "ElvisPresley", "Tupelo,MS", "VISA3719",'$44'),
  ];
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
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
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <br />
          <Stack spacing={2} direction="column" className='w1'>
            <Button variant="text" onClick={handleRedirect}><DashboardIcon />&nbsp;Dashboard</Button>
            <Button variant="text" onClick={handleRedirect1}><AddShoppingCartIcon />&nbsp;Orders</Button>
            <Button variant="text" onClick={handleRedirect2}><ReportIcon />&nbsp;Reports</Button>
            <Button variant="text" onClick={handleRedirect3}><AccountCircleIcon />&nbsp;Customers</Button>
            <Button variant="text" onClick={handleRedirect4}><IntegrationInstructionsIcon />&nbsp;About</Button>


          </Stack>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <div className='ww3'>

            <Typography paragraph>
              <Card variant="outlined">
                <div className='ww1'> Today </div>
                <LineChart
                  {...lineChartsParams}
                  xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormater }]}
                  series={lineChartsParams.series.map((s) => ({
                    ...s,
                    valueFormatter: currencyFormatter,
                  }))} />
              </Card>
            </Typography>
          </div>
          <div className="ww4">
            <TableContainer component={Paper}>
              <Card variant="outlined">
                <div className="ww1"> Recent </div>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Date</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Name</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Ship To</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Payment Method</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Sale Amount</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.Date}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.Date}
                        </TableCell>
                        <TableCell align="right">{row.Name}</TableCell>
                        <TableCell align="right">{row.ShipTo}</TableCell>
                        <TableCell align="right">{row.PaymentMethod}</TableCell>
                        <TableCell align="right">{row.SaleAmount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <CardActions>
                  <a href='' className='ww6'>See more orders</a>
                </CardActions>
              </Card>
            </TableContainer>
            <div className='ww5'>Copyright &#169;  <a href='' className='ww5'>Your Website</a>2023.</div>
          </div>
        </Main>
        <div className='ww2'>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        </div>
      </Box>
    );
  }
