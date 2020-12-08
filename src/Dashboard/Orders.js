import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const textStyle = { //to change signin text color
    color: 'rgb(13, 45, 62)',
};

// Generate Order Data
function createData(id, date, hour, amountViewed) {
  return { id, date, hour, amountViewed };
}

const rows = [
  createData(0, '8 Dec, 2020', '8:00 AM - 9:00 AM', '2'),
  createData(1, '8 Dec, 2020', '1:00 AM - 2:00 AM', '3'),
  createData(2, '8 Dec, 2020', '6:00 PM - 7:00 PM', '1'),
  createData(3, '6 Dec, 2020', '10:00 AM - 11:00 AM','1' ),
  createData(4, '5 Dec, 2020', '8:00 PM - 9:00 PM', '4'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>  Recently Viewed Footage</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell align="right">Amount Viewed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell align="right">{row.amountViewed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault} style={textStyle}>
          See more footage
        </Link>
      </div>
    </React.Fragment>
  );
}