import React from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReportIcon from "@mui/icons-material/Report";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import { styled} from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const drawerWidth = 240;
export default function PermanentDrawerLeft() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };
  const handleRedirect1 = () => {
    navigate("/orders");
  };
  const handleRedirect2 = () => {
    navigate("/reports");
  };
  const handleRedirect3 = () => {
    navigate("/customers");
  };
  const handleRedirect4 = () => {
    navigate("/About");
  };

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  const columns = React.useMemo(
    () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns],
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <br />
        <Stack spacing={1} direction="column" className="w1">
          <Button variant="text" onClick={handleRedirect}>
            <DashboardIcon />
            Dashboard
          </Button>
          <Button variant="text" onClick={handleRedirect1}>
            <AddShoppingCartIcon />
            Orders
          </Button>
          <Button variant="text" onClick={handleRedirect2}>
            <ReportIcon />
            Reports
          </Button>
          <Button variant="text" onClick={handleRedirect3}>
            <AccountCircleIcon />
            Customers
          </Button>
          <Button variant="text" onClick={handleRedirect4}>
            <IntegrationInstructionsIcon />
            Abouts
          </Button>
        </Stack>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        <Typography paragraph>
           <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        {...data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
        </Typography>
      </Box>
    </Box>
  );
}
