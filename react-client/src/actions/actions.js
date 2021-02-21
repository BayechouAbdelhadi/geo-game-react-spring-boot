export const  getAnswer=(value)=>{
    return  {
        type:'GET_ANSWER',
        value:value
    };
}
export const  resetAnswer=()=>{
    return  {
        type:'RESET_ANSWER'
    };
}
export const  getAnswers=(value)=>{
    return  {
        type:'GET_ANSWERS',
        value:value
    };
}
export const  clearAnswers=()=>{
    return  {
        type:'CLEAR_ANSWERS',
    };
}

export const loading =()=>{
    return {type:'CITY_REQUEST_LOADING'};

}
export const  received=(value)=>{
    return {
        type:'CITY_REQUEST_FETCHED',
        value:value
    }
}

export const failed=()=>{
    return {
        type:'CITY_REQUEST_FAILED',
    };
}


export const  incrementDifference=(value)=>{
    return  {
        type:'INCREMENT_DIFFERENCE',
        value:value
    };
}
export const  resetDifference=()=>{
    return {type:'RESET_DIFFERENCE'}
}

export const  startPart=()=>{
    return {type:'START_PART'};
}
export const  endPart=()=>{
    return {type:'END_PART'}

}

export const  start=()=>{
    return {type:'START'}

}
export const  end=()=>{
    return {type:'END'}

}

export const  incrementIteration=()=>{
    return {type:'INCREMENT_ITERATION'}

}
export const  resetIteration=(value)=>{
    return {type:'RESET_ITERATION',
            value:value
            }
}

export const  getMarkers=(value)=>{
    return  {
        type:'GET_MARKERS',
        value:value
    };
}

export const  incrementScore=(value)=>{
    return  {
        type:'INCREMENT_SCORE',
        value:value
    };
}
export const  resetScore=()=>{
    return {type:'RESET_SCORE'}

}

export const  enableStart=()=>{
    return {type:'ENABLE_START'}
}
export const  disableStart=()=>{
    return {type:'DISABLE_START'}
}
export const  hideMarkers=()=>{
    return {type:'HIDE_MARKERS'}
}
export const  showMarkers=()=>{
    return {type:'SHOW_MARKERS'}
}