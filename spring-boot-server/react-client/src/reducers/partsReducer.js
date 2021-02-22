import {SET_PARTS } from '../actions/types';
const initialState=[];

const partsReducer = (state = initialState, action)=> {
    switch (action.type) {
      case SET_PARTS:
        return action.payload;
      default:
        return state;
    }
  }
  export default partsReducer ;