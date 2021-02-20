import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export const StyledTableCell = withStyles((theme) => ({
    head: {
      background: 'linear-gradient(#B03A2E, #F8C471)',
      color: theme.palette.common.white,
      
    },
    body: {
      color: theme.palette.secondary.dark,
      backgroundColor: 'antiquewhite',
    },
    root:{
      fontSize:20,
      borderRadius:5,
      height:20
    }
  }))(TableCell);
  
export const StyledTableRow = withStyles((theme) => ({
    root: {
      height: 20,
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);