import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import { InsertLinkRounded, PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    minHeight: 440,
    maxHeight: 440,
    display: 'Inline-block',
    margin: '80px',
  },
  media: {
    maxHeight: 180,
    minHeight: 180,
  },
});

const iconStyle = { 
    marginRight: '30px',
    color: '#823038',
};

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title= "o"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={iconStyle}>
        <EmailIcon style={iconStyle}/>{props.email}
        </Button>
      </CardActions>
    </Card>
  );
}