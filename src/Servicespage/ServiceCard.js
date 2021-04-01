import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '350px',
    marginRight: '100px',
    marginLeft: '100px',
    marginTop:'50px',
    marginBottom:'50px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 600,
   
  },
}));

export default function ServiceCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
    </Card>
  );
}