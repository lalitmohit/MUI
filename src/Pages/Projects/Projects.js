
import React from "react";
import Grid from '@mui/material/Grid';
import MediaCard from './Cards/Cards';
import Heading from '../../Components/Heading/Heading';
import { Box, CssBaseline } from '@mui/material';
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";
import Gensec from '../../Assets/Gensec.jpeg';
import Pass_Extension from '../../Assets/Pass_Extension.png';
import Openlake from '../../Assets/Openlake.png';
import Stock from '../../Assets/Stock.png';
import Aoushadhi from '../../Assets/Aoushadhi.png';
import  Emotion from '../../Assets/Emotion.png';
import TA from '../../Assets/TA.png';
import Portfolio from '../../Assets/Portfolio.png';
import EYE from '../../Assets/EYE.png';
const Projects = () => {

    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('Projects'); // Set the title when the component mounts
    }, [setTitle]);

    const style = {
        height: '100vh', // Full viewport height
        width: '100vw',  // Full viewport width
        margin: '0px',   // No margin
        display: 'flex', // Flexbox for centering
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        overflow: 'auto',         // Handle overflow
        padding: '16px',          // Add padding if needed
    };

    const l = [
        {
            name: "Aoushadhi- An Ecommerce Application",
            image: Aoushadhi,
            content: "I led the development of a feature-rich online pharmacy platform similar to Netmeds, creating a user-friendly interface with React.js for easy navigation, collaborating with vendors to upload detailed medicine information, integrating secure payment gateways, and leveraging Node.js and Express.js for a robust backend to manage authentication, authorization, and database operations.",
            github:"https://github.com/lalitmohit/E-comm",
            visit:"http://aoushadhi.in/"
        },
        {
            name: "TA Management System",
            image: TA,
            content: "I led the development of the TA Management System, integrating frontend, backend, and ML models, designed to assist professors in selecting suitable TAs, establishing user authentication, categorizing user information for efficient storage, implementing a user-friendly interface with React.js, and developing an ML model using Metaflow, Sentence-transformer, and NLP for accurate TA assessment.",
            github:"https://github.com/kunalthgr8/TA_Managment",
            visit:"https://ta-managment.vercel.app/"
        },
        {
            name: "Emotion Prediction by Text",
            image: Emotion,
            content: "I employed CNN and NLP techniques to develop a project that predicts emotions from textual data, utilizing advanced machine learning algorithms for accurate emotion prediction.",
            github:"https://github.com/lalitmohit/Emotion-Detection-by-Text",
            visit:"https://emotion-detection-by-text-2r7exvwxrtjbzdsh9xr8l5.streamlit.app/"
        },
        {
            name: "Web App for OpenLake",
            image: Openlake,
            content: "I developed a web application for Openlake, an open-source club at IIT Bhilai, using HTML, CSS, JavaScript, React, and FAST API to enhance user experience and engagement within the Openlake community through intuitive and responsive web functionalities.",
            github:"https://github.com/lalitmohit/OpeLake-Website-by-DevDynamos",
            visit:"https://webwave-test.vercel.app/"
        },
        {
            name: "MY Portfolio",
            image: Portfolio,
            content: "I developed my portfolio using React and Material-UI, showcasing my projects and skills in a visually appealing, responsive design. This project demonstrates my expertise in front-end development, intuitive UI creation, and proficiency with modern web technologies.",
            github:"https://github.com/lalitmohit/MUI",
            visit:"https://mui-seven-chi.vercel.app/"
        },
        {
            name: "Eye Disease Prediction",
            image: EYE,
            content: "I utilized ResNet, EfficientNet, Inception, and MobileNet neural network models to predict eye diseases, employing transfer learning techniques for improved accuracy and conducting thorough evaluations to identify the optimal predictive models.",
            github:"https://github.com/lalitmohit/Eye-Disease-Prediction",
            visit:"https://github.com/lalitmohit/Eye-Disease-Prediction"
        },

        {
            name: "Web App for Flipr Hackathon",
            image: Stock,
            content: "It is a hackathon web app that I made for the Flipr Hackathon. It is a full stack web app that I made using React, Node.js, Express.js, and MongoDB. It is a platform where users can see stock prices for diff. Org's.",
            github:"https://github.com/lalitmohit",
            visit:"https://github.com/lalitmohit"
        },
        {
            name: "Password Generator Extension",
            image: Pass_Extension,
            content: "I created PassGen, a Chrome extension that generates strong, customizable passwords to bolster online security, by developing a JavaScript function for generating passwords with a custom character set and integrating the Chrome Extension API for seamless functionality and user convenience.",
            github:"https://github.com/lalitmohit/PassGen",
            visit:"https://github.com/lalitmohit/PassGen"
        },
        
        // {
        //     name: "Structural Strength Prediction",
        //     image: Gensec,
        //     content: "I developed a machine learning model for predicting structural strength by utilizing features like cement, slag, fly ash, and age, and applied EDA techniques and OLS libraries for model enhancement.",
        //     github:"https://github.com/lalitmohit/Structural_Strength_Prediction",
        //     visit:"https://github.com/lalitmohit/Structural_Strength_Prediction"
        // },
        
        
        
        

        
    ]

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
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

export default Projects;

