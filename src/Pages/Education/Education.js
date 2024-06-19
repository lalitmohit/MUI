import React from "react";
import Grid from '@mui/material/Grid';
import Charts from "./Charts/Charts";
import { useEffect } from "react";
import { useTitle } from "../../TitleContexts";

const Education = () => {
    const { setTitle } = useTitle(); // Get the setTitle function from context

    useEffect(() => {
        setTitle('Education'); // Set the title when the component mounts
    }, [setTitle]);

    return (
        <Grid xs={12} sx={{padding:"0px 0px 310px"}}>
            <Charts />
        </Grid>
    );
}

export default Education;