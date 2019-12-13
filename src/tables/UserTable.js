import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const UserTable = props => (
  <div className={useStyles.root}>
    <Paper className={useStyles.paper}>
      <Table className={useStyles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Account Name</StyledTableCell >
            <StyledTableCell  align="left">Account Number</StyledTableCell >
            <StyledTableCell  align="left">Bank Name</StyledTableCell >
            <StyledTableCell  align="left">Address</StyledTableCell >
            <StyledTableCell  align="left">City</StyledTableCell >
            <StyledTableCell  align="left">Country</StyledTableCell >
            <StyledTableCell  align="left">Actions</StyledTableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.length > 0 ? (
            props.users.map(user => (
            <TableRow key={user.id}>
              <TableCell align="left">{user.accountName}</TableCell>
              <TableCell align="left">{user.accountNumber}</TableCell>
              <TableCell align="left">{user.bankName}</TableCell>
              <TableCell align="left">{user.address}</TableCell>
              <TableCell align="left">{user.city}</TableCell>
              <TableCell align="left">{user.country}</TableCell>
              <TableCell align="left">
                <Button color="primary" type="submit" variant="contained"
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  Edit
                </Button>
                &nbsp;
                <Button color="secondary" type="submit" variant="contained"
                  onClick={() => props.deleteUser(user.id)}
                  className="button muted-button"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6}> 
              No users
            </TableCell>
          </TableRow>
      )}
        </TableBody>
      </Table>
    </Paper>
  </div>
)

export default UserTable
