import React from 'react';
import Button from '@material-ui/core/Button';
import Box  from '@material-ui/core/Box';
import ScoreTable from './ScoreTable';
import Summary from './Summary';
import {useEffect} from 'react';
import {DirectionWrapper,Text,Iteration,TextStart} from '../styledElement/DirectionElements.js'
import fetchData from '../util/fetchData';
import {saveScore} from '../actions/securityActions';
import {useSelector,useDispatch,useStore} from 'react-redux';
import {
    startPart,disableStart,
    resetDifference , 
    getAnswer ,getAnswers,incrementIteration,
    end,resetIteration,start,clearAnswers} from '../actions/actions';
import useSound from 'use-sound';
import note from '../sound/btn.mp3';

function Direction() {
    const [sound]=useSound(
        note,
    { volume: 0.08 }
    );
    const nbIteration=3;
    const dispatch =useDispatch();
    const store =useStore();
    const markers=useSelector(state=>state.markers);
    const city=useSelector(state=>state.city);
    const difference=useSelector(state=>state.difference);
    const endOfPart=useSelector(state=>state.endPart);
    const iteration=useSelector(state=>state.iteration);
    const answer=useSelector(state=>state.answer);
    const answers=useSelector(state=>state.answers);
    const endOfGame=useSelector(state=>state.end);
    const startGame=useSelector(state=>state.start);
    const score=useSelector(state=>state.score);

    const next=()=>{
        //sound();
        const idCity=Math.floor(Math.random() * 471)+1;
        if(startGame){
            store.dispatch(fetchData(idCity));
            dispatch(disableStart());
            dispatch(startPart());
            dispatch(incrementIteration());
        }
        else if(iteration<=nbIteration && endOfPart && !endOfGame & !startGame)
        {   
            store.dispatch(fetchData(idCity));
            if(city.status==='received')
            {
                dispatch(getAnswer({name:city.data.city,difference:difference}));
                dispatch(incrementIteration());
                dispatch(resetDifference());
                dispatch(startPart());
                if(start)
                    dispatch(disableStart());
                if(iteration===nbIteration) 
                    dispatch(end());
                
            }
                
        }
        else if(endOfGame){
            dispatch(resetDifference());
            dispatch(resetIteration(1));
            dispatch(clearAnswers());
            dispatch(start());
            console.log(score);
            store.dispatch(saveScore({"score":score}));
        }
        if(markers)
            for(var marker of markers)
                marker.setMap(null);    
    }

    useEffect(()=>{
        if(answer && answer.difference>0)
            dispatch(getAnswers(answer));
        
    },[answer]);

    return (
        <DirectionWrapper>
            {!startGame?endOfGame?
            <><Summary answers={answers}/></>:
            <>
            <Box display ="flex" justifyContent="center" >
                <Iteration>{iteration}/{nbIteration}</Iteration>
                <Text> 
                    Find the position of {city.data.city}
                </Text>
            </Box>

            <Box display="flex" p={1} justifyContent="center">
                <ScoreTable 
                    difference={difference}
                />


            </Box>
            </>:
            <TextStart >Ready to start ?</TextStart>}
            <Box display ="flex" p={1}justifyContent="center" > 
                <Button variant="contained" 
                            color="primary" 
                            disableElevation 
                            onClick={next}
                >
                        {startGame?'Start':(iteration===nbIteration&& endOfPart)?'finish':endOfGame?'restart':'next'}
                </Button>
            </Box>
        </DirectionWrapper>
    );
}
export default Direction;



