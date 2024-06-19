import React from "react";
import Grid from '@mui/material/Grid';
import KeyCard from "./KeyCard/KeyCard";
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";

const KeyCourses = () => {
    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('KeyCourses'); // Set the title when the component mounts
    }, [setTitle]);

    return (
        <Grid xs={12}>
            <KeyCard />
        </Grid>
    );
}

export default KeyCourses;