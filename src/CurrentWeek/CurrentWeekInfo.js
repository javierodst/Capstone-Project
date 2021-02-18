import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      left: {
        width: '50%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'left',
      },
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function CurrentWeekInfo() {
  
  const classes = useStyles();

  return (
    <React.Fragment>
     
  </React.Fragment>
  );
}