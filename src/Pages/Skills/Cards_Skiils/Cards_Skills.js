import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Backdrop, Grid } from '@mui/material';
import Signup from '../../../Assets/Signup.png';

export default function CardSkill({title, image, content, github, visit}) {
  const style = {
    
  }

  return (
    <Grid xs={12} container style={style}>
      <Card sx={{ Width: 270 }}>
        <CardMedia
          sx={{ height: 250,width: 250}}
          image={image}
          title={title}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        
      </Card>
    </Grid>
  );
}