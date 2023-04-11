function CounterReducer(state,action){
    if(action.type === 'INC_COUNT'){
        return state+1;
    }else if(action.type === 'DEC_COUNT'){
        return state - 1;
    }else if(action.type === 'INC_BY_VALUE'){
        return state + action.payload;
    }
    else{
        return state;
    }
}
export default CounterReducer;