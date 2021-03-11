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

  var handleSaved = (id, title, date, keep, path) => {
    toogleKeep(id, title, date, keep, path);
  }

  var url = "https://nameless-ravine-22066.herokuapp.com/api/video/keep/";

  var toogleKeep = (id, title, date, keep, path) => {
    console.log(url + id);
    let vidBody = {
      '_id': id,
      'title': title,
      'date': date,
      'keep': keep,
      'path': path
    }
    console.log(JSON.stringify(vidBody));
    fetch(url + id, {
      method: 'PUT',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(vidBody)
    })
      .then(response => {
        this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
        if (response.ok) {

          return response.json();

        }

        else if (response.status === 404) {
          throw Error("HTTP 404, Not found");
        }

        else {
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        this.setState({ videos: responseData });
      })
      .catch(error => {
        console.log(error);
      })
  }

  var kept = () => {
    if (video.keep) {
      return (
        <div>
          <p>Video will be kept</p>
          <Button size="small" className={classes.btn} onClick={() => handleSaved(video._id, video.title, video.date, video.keep, video.path)}>
            Un-save
          </Button>
        </div>

      );
    }
    else {
      return (
        <div>
          <p>Video is not kept</p>
          <Button size="small" className={classes.btn} onClick={() => handleSaved(video._id, video.title, video.date, video.keep, video.path)}>
            Save
          </Button>
        </div>
      );
    }
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
        {kept()}
      </CardActions>
    </Card>
  );
}


