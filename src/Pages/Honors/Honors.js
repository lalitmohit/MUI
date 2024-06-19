
import React from "react";
import Grid from '@mui/material/Grid';
import HonorCard from './HonorCard/HonorCard';
// import Heading from '../../Components/Heading/Heading';
import { Box, CssBaseline } from '@mui/material';
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";
import Gensec from '../../Assets/Gensec.jpeg';
// import Signup from '../../Assets/Signup.png';
import Contingent from '../../Assets/Contingent.jpeg';
import Entre from '../../Assets/Entre.png';
import Informal from '../../Assets/Informal.png';
import Inspire from '../../Assets/Inspire.jpeg';
import Inter from '../../Assets/Inter22.jpeg';
import Meraz from '../../Assets/Meraz.jpeg';
import Prayatna5 from '../../Assets/Prayatna50.jpeg';
import Prayatna6 from '../../Assets/Prayatna60.png';
import Prayatna6c from '../../Assets/Prayatna60C.jpeg';
import Security from '../../Assets/Security.png';
import Smp from '../../Assets/Smp.jpeg';
import Colgate from '../../Assets/Colgate.png';

const Honors = () => {

    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('Honors'); // Set the title when the component mounts
    }, [setTitle]);

    // const style = {
    //     height: '100vh', // Full viewport height
    //     width: '100vw',  // Full viewport width
    //     margin: '0px',   // No margin
    //     display: 'flex', // Flexbox for centering
    //     justifyContent: 'center', // Center horizontally
    //     alignItems: 'center',     // Center vertically
    //     overflow: 'auto',         // Handle overflow
    //     padding: '16px',          // Add padding if needed
    // };
    const l = [
        {
            title: "General Secretary Sports and Games 2023-24",
            image: Gensec,
            content: "Highest Position in the Sports Council and am responsible for all the sports related activities inside or outside IIT BHILAI along with fostering and promoting Sports in our college."
        },
        {
            title: "Contingent Leader Inter IIT Sports Meet 2023",
            image: Contingent,
            content: "Highest Position among Inter IIT Sports Meet 2023 Participants and am responsible to lead all the contingent members from ground practices to the Sports Meet conclusion."
        },
        {
            title: "Prayatna'6.0 Convener",
            image: Prayatna5,
            content: "It was the sixth edition of the Intra College Annual Sports Event and as Convener was responsible to work with my team for all the sports related activities to make the event successful and memorable for all the participants and audience present."
        },
        {
            title: "Member of the Entrepreneurship Cell (Meraz'22)",
            image: Entre,
            content: "I was a member of the Entrepreneurship Cell, where I played a crucial role in fostering the startup ecosystem by connecting investors with promising startups."
        },
        {
            title: "Inter IIT Sports Meet 2022 Participant",
            image: Inter,
            content: "Being a part of the Inter IIT Sports Meet 2022 was a rewarding and transformative experience. It provided a platform to push my limits, achieve new milestones, and contribute to it."
        },
        {
            title: "Volunteer Student Mentorship Program",  
            image: Smp,
            content: "I have worked as a volunteer in the Student Mentorship Program and am responsible for all the Student Mentorship Program related activities from doubt solving of freshers to the successful completion of the program."
        },
        {
            title: "Event Coordinator Meraz'22",
            image: Informal,
            content: "I was an Event Coordinator for Meraz'22, where I was responsible for planning, organizing, and executing the event to ensure the success of the fest. It was a nice experience to work."
        },
        {
            title: "Informals Convener Meraz'23",
            image: Meraz,
            content: "I held the highest position in the Informal Council, where I was responsible for overseeing and coordinating all informal activities to ensure the success of various events.  "
        },
        {
            title: "INSPIRE Scholarship",
            image: Inspire,
            content: "The INSPIRE Scholarship is a prestigious scholarship program in India that stands for Innovation in Science Pursuit for Inspired Research. It is funded by the Dapartment of Science and Technology (DST), Government of India,"
        },
        
        {
            title: "Security Council Member",
            image: Security,
            content: "I was a member of in the Security Council and am responsible for all the Security related activities to make the campus safe and secure for the successful completion of the events."
        },
        
        {
            title: "Prayatna'5.0 Participant",
            image: Prayatna6c,
            content: "Being a part of the Prayatna'5.0 was a rewarding and transformative experience. It provided a platform to push my limits, achieve new milestones,and enhance network in the students community."
        },
        {
            title: "Prayatna'6.0 Participant",
            image: Prayatna6,
            content: "Being a part of the Prayatna'6.0 was a rewarding and transformative experience. It provided a platform to push my limits, achieve new milestones, and enhance network in the student community."
        },
        {
            title: "Keep India Foundational Scholarship",
            image: Colgate,
            content: "Keep India Smiling Foundational Scholarship Program aims to provide foundational support to individuals, who are deserving & meritorious."
        },
        
        
    ]
    return (
        <Box sx={{ display: 'flex', padding:"60px"}}>
            <CssBaseline />
            <Grid container spacing={2} >
                {/* Uncomment if you want to include the heading */}
                {/* <Heading title="Projects" /> */}
                <Grid container justifyContent="center" spacing={10}>
                    {l.map((value) => (
                        <Grid key={value} item>
                            <HonorCard title={value.title} image={value.image} content = {value.content} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Honors;