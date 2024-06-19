import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Backdrop, Grid } from '@mui/material';
import Signup from '../../../Assets/Signup.png';

export default function MediaCard({title, image, content, github, visit}) {
  const style = {
    margin: '0px 0px 20px 0px ',
  }

  return (
    <Grid xs={12} container style={style}>
      <Card sx={{ maxWidth: 550 }}>
        <CardMedia
          sx={{ height: 200 }}
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
        {/* <CardActions>
        <Button size="small"><a href = {visit}>Visit</a></Button>
        <Button size="small"> <a href={github}>Github</a> </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}