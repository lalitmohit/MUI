import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Backdrop, Grid } from '@mui/material';
import Signup from '../../../Assets/Signup.png';
import Gensec from '../../../Assets/Gensec.jpeg';

export default function HonorCard({title, image,content}) {
  const style = {
    
  }

  return (
    <Grid xs={12} container style={style}>
      <Card sx={{ maxWidth: 250,height:450 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        
      </Card>
    </Grid>
  );
}