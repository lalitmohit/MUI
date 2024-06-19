
import React from "react";
import Grid from '@mui/material/Grid';
import CardSkill from "./Cards_Skiils/Cards_Skills";
// import Heading from '../../Components/Heading/Heading';
import { Box, CssBaseline } from '@mui/material';
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";
// import HtmlIcon from '@mui/icons-material/Html';
import HTML from '../../Assets/HTML.png';
import CSS from '../../Assets/CSS.png';
import JS from '../../Assets/JS.png';
import Node from '../../Assets/Node.png';
import EXPRESS from '../../Assets/EXPRESS.png';
import MONGODB from '../../Assets/MongoDB.png';
import REACT from '../../Assets/React.png';
import AWS from '../../Assets/AWS.png';
import CICD from '../../Assets/CICD.png';
import DOCKER from '../../Assets/DOCKER.png';
import GIT from '../../Assets/GIT.png';





const Skills = () => {

    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('Skills'); // Set the title when the component mounts
    }, [setTitle]);



    const l = [
        {
            image: HTML,
            
        },
        {
            image: CSS,
            
        },
        {
            image: JS,
            
        },
        {
            image:Node,
        },
        {
            image:EXPRESS,
        },
        {
            image:MONGODB,
        },
        {
            image:REACT,
        },
        {
            image:AWS,
        },
        {
            image:CICD,
        },
        {
            image:DOCKER,
        },
        {
            image:GIT,
        },

       

    ]
    return (
        <Box sx={{ display: 'flex',padding:'100px' }}>
            <CssBaseline />
            <Grid container spacing={2} >
                {/* Uncomment if you want to include the heading */}
                {/* <Heading title="Projects" /> */}
                <Grid container justifyContent="center" spacing={10}>
                    {l.map((value) => (
                        <Grid key={value} item>
                            <CardSkill title={value.name} image={value.image} content = {value.content} github = {value.github} visit = {value.visit} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Skills;