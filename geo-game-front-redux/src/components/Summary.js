import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box  from '@material-ui/core/Box';
import scoreCalculator from '../util/score';
import {useSelector,useDispatch} from 'react-redux';
import {incrementScore} from '../actions/actions';


import styled from 'styled-components';

const ScoreWrapper = styled.div`
  background-color:${props=>props.danger?'#F08080':props.alert?'#F8C471':'#55F555'};
  font-size:20;
  font-weight:800;
  padding:5px;
  border-radius:15;
;`

const useStyles = makeStyles({
  table: {},
  tableWrapper:{
    maxWidth: 400,
    maxHeight:150,
    justifyContent:'center',
    margin:'10px',
    OverflowY:'scroll',
  },
});

export default function Summary() {
  const dispatch=useDispatch();
  const answers=useSelector(state=>state.answers);
  const score=useSelector(state=>state.score);
  const classes = useStyles();
  useEffect(()=>{
    dispatch(incrementScore(scoreCalculator(answers)));
  },[answers]);

  return (
    <Box display='flex' p={1} m={1}>
      <TableContainer className={classes.tableWrapper}component={Paper}>
        <Table className={classes.table}  size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell align="right">Difference</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {answers.map((row) => (
              <TableRow  key={row.name}>
                <TableCell >{row.name}</TableCell>
                <TableCell align="right">{row.difference}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={1} p={1}>
            <ScoreWrapper
             alert={score>=answers.length/2 && score<(3*answers.length/4)?true:false}
             danger={score<answers.length/2?true:false}
             >
               Your score is :<p>{score}/{answers.length}</p>
            </ScoreWrapper>
      </Box>
    </Box>
  );
}
