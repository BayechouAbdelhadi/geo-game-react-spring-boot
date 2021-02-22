const initialState={
    data:{lat:42,lng:2,city:''},
    status:''
};

const cityReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CITY_REQUEST_LOADING':
        return {...state,status: "waiting"};
        case 'CITY_REQUEST_FETCHED':
        return {data: action.value, status: "received"};
        case 'CITY_REQUEST_FAILED':
        return {
            data:{lat:42,lng:2,city:''},
            status:'failed'
        };
        default:return state;
        
    }
}
export default  cityReducer;