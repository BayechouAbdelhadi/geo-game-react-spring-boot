import answerReducer  from './answerReducer' ;
import answersReducer  from './answersReducer' ;
import cityReducer  from './cityReducer' ;
import differenceReducer  from './differenceReducer' ;
import endPartReducer  from './endPartReducer' ;
import endReducer  from './endReducer' ;
import iterationReducer  from './iterationReducer' ;
import markersReducer  from './markersReducer' ;
import scoreReducer  from './scoreReducer' ;
import startReducer  from './startReducer' ;
import securityReducer from './securityReducer';
import errorReducer from './errorReducer';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    answer :answerReducer,
    answers :answersReducer,
    city :cityReducer,
    difference:differenceReducer,
    endPart :endPartReducer,
    end :endReducer,
    iteration :iterationReducer,
    markers :markersReducer,
    score :scoreReducer,
    start:startReducer,
    errors: errorReducer,
    security:securityReducer
});

export default rootReducer;