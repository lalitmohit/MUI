// import React from 'react';
// import Navbar from './Components/Navbar/Navbar';

// import { Outlet } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import {  Drawer, CssBaseline, Toolbar, AppBar, Typography, Box } from '@mui/material';
// import { TitleProvider, useTitle } from './TitleContexts';

// const drawerWidth = 240;
// function MainApp() {
//   const { title } = useTitle();
//   return (
  
//   <Box sx={{ display: 'flex'}} >
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,bgcolor:'#0a0a5c'}}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             {title }
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <div>
//           {/* Navbar content */}
//           <Navbar />
//         </div>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           bgcolor: 'background.default',
//           p: 3,
//           width: `calc(100% - ${drawerWidth}px)`,
//         }}
//       >
//         <Toolbar />
//         <Grid container>
//           <Grid item xs={12}>
//             {/* <Heading /> */}
//             <Outlet />
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// function App() {
//   return (
//     <TitleProvider>
//       <MainApp />
//     </TitleProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Grid, Drawer, CssBaseline, Toolbar, AppBar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleProvider, useTitle } from './TitleContexts';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar/Navbar';

const drawerWidth = 240;

function MainApp() {
  const { title } = useTitle();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Navbar />
    </div>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#0a0a5c',
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // bgcolor: 'linear-gradient(#642bff, #ff22e6)',
          background: 'linear-gradient(#09203f, #537895)',
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container>
          <Grid item xs={12} >
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <TitleProvider>
      <MainApp />
    </TitleProvider>
  );
}

export default App;
