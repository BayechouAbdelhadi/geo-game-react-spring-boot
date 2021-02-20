import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import {StyledTableCell,StyledTableRow} from '../styledElement/ScoreTableElements'

const useStyles = makeStyles({
    table: {
      width: 200,
      border:'solid 2px',
      borderRadius:'15%'
    }
  });
function ScoreTable(difference) {
    const classes = useStyles();
    return (
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                    <StyledTableCell>Difference</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell>{difference.difference}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
    );
}

export default ScoreTable;