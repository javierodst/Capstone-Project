import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 320,
    maxWidth: 320,
    marginBottom: '25px',
    marginLeft: '25px',
    display: 'inline-block',
  },
  media: {
    height: 180,
  },
  btn: {
    backgroundColor: 'rgb(13, 45, 62)',
    color: 'white',
    marginLeft: '10px',
    marginBottom: '10px',
    "&:hover": {
      backgroundColor: "#823038",
    },
  },
});

const initialValues = {
  text: 'SAVE'
}


export default function VideoCard({ video }) {
  const classes = useStyles();

  const [values, setValues] = useState(initialValues);

  function handleSaved(text) {
    values.text = text;
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardMedia
          className={classes.media}
          component="video"
          image={video.path}
          title={video.title}
          type='video/mp4'
          controls='true'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {video.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.btn} onClick={handleSaved("saved")}>
          {values.text}
        </Button>
      </CardActions>
    </Card>
  );
}


