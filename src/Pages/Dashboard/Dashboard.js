import React from "react";
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Dashboard.css';
import { blue } from "@mui/material/colors";
import LalitPhoto from '../../Assets/LalitPhoto.png';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link  from "react-router-dom";
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";

const Dashboard = () => {
    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('Dashboard'); // Set the title when the component mounts
    }, [setTitle]);
    const style = {
        // backgroundColor: "blue",
        width: "295px",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        borderRadius: "10px",
        marginBottom:"20px",
        backgroundColor: "white",

    }

    const download = {
        width: "290px",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "48px",
    }

    return (
        <Grid item xs={12} sx = {{margin:"0px 0px 463px"}} >
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{color:"white"}}>
                    <h1 >Hey, I'm Lalit Gour</h1>
                    <h2>YO</h2>
                    <div className="SocialMedia" style={style}>
                    {/* <Button variant="" startIcon={<InstagramIcon />}>
                    </Button>
                    <Button variant="" startIcon={<InstagramIcon />}>
                    </Button> */}
                    <IconButton aria-label="delete" size="large">
                    <a href="https://www.instagram.com/lalitgour72/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <InstagramIcon />
                    </a>
                    </IconButton>
                    <IconButton aria-label="delete" size="large">
                    <a href="https://x.com/lalit17167" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FacebookIcon/>
                    </a>
                    </IconButton>
                    <IconButton aria-label="delete" size="large">
                    <a href="https://x.com/lalit17167" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <TwitterIcon/>
                    </a>
                    </IconButton>
                    <IconButton aria-label="delete" size="large">
                    <a href="https://www.linkedin.com/in/lalit-gour-881489226/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <LinkedInIcon />
                    </a>
                    </IconButton>
                    <IconButton aria-label="delete" size="large">
                    <a href="http://www.youtube.com/@LALITGOUR3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <YouTubeIcon  />
                    </a>
                    </IconButton>
                    </div>
                    <div className="Downloads" style={download}>
                    <a href="https://github.com/lalitmohit" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Fab variant="extended" size="medium" color="primary" >
                        {/* <a href="http://www.youtube.com/@LALITGOUR3" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                            <GitHubIcon sx={{mr:1}}/>
                            Github
                        {/* </a> */}
                    </Fab>
                    </a>
                    <a href="/resume.pdf" download style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Fab variant="extended" size="medium" color="primary">
                        <DownloadForOfflineIcon sx={{ mr: 1 }} />
                        Resume
                    </Fab>
                    </a>
                    </div>
                    <div style={{width:"80%"}}>
                        I am Lalit Gour, a devoted learner enrolled in the Computer Science and Engineering program at the renowned Indian
                        Institute of Technology (IIT), Bhilai. Fueled by a deep interest in technology and a strong dedication to achieving
                        academic excellence, I am eager to apply my expertise and learning to make meaningful contributions to the realm of
                        computer science.                    
                    </div>
                </div>
                <div>
                    {/* Apply my photo here */}
                    {/* <img src={LalitPhoto} alt="Avatar" className="avatar" /> */}
                </div>
            </div>
        </Grid>
    )
}

export default Dashboard