import React from "react";
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { MainNavbarItems } from "./Consts/NavbarItems";
import { NavbarStyles } from "./Styles";
import { useParams,useNavigate } from "react-router";


const Navbar = () => { 
    const navigate = useNavigate();

    return (
        <Drawer
        sx={NavbarStyles.Drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar  />
        {/* <List >Lalit</List> */}
        <Divider />
        <List>
          {MainNavbarItems.map((item, index) => (
            <ListItem 
            button
            key={item.id} 
            onClick={() => navigate(item.route)}
            >
              <ListItemButton>
                <ListItemIcon sx={NavbarStyles.Color}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                sx={NavbarStyles.Text}
                primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
    );
    };

export default Navbar;