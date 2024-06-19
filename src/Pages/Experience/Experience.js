import React from "react";
import Grid from '@mui/material/Grid';
import MediaCard from './Cards/Cards';
// import Heading from '../../Components/Heading/Heading';
import { Box, CssBaseline } from '@mui/material';
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";
import EMS from '../../Assets/EMS.png';

const Experience = () => {

    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('Experience'); // Set the title when the component mounts
    }, [setTitle]);

    const style = {
        height: '90vh', // Full viewport height
        width: '110vw',  // Full viewport width
        margin: '0px',   // No margin
        display: 'flex', // Flexbox for centering
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        overflow: 'auto',         // Handle overflow
        padding: '16px',          // Add padding if needed
    };

    const l = [
        {
            name: "EMS 2.0 ( InternShip )",
            image: EMS,
            content: "I contributed to the development of the Election Management System (EMS) 2.0 for the Election Commission of India (ECI) as a Full Stack Developer, working with React.js and FASTAPI, handling database manipulations, and creating updated API documentation.",
            github:"https://github.com/lalitmohit/TA_Management_CSD_Frontend",
            visit:"https://ta-management-csd-frontend.vercel.app"
        },
    ]

    return (
        <Box sx={{  display: 'flex', height: '110vh'  }}>
            <CssBaseline />
            <Grid container spacing={2} style={style}>
                {/* Uncomment if you want to include the heading */}
                {/* <Heading title="Projects" /> */}
                <Grid container justifyContent="center" spacing={10}>
                {l.map((value) => (
                        <Grid key={value} item>
                            <MediaCard title={value.name} image={value.image} content = {value.content} github = {value.github} visit = {value.visit} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Experience;