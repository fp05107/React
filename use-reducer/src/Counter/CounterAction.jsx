export const IncAction = {type:"INC_COUNT"};
export const DecAction = {type:"DEC_COUNT"};

export const IncByValAction = (value) =>{
    return{
        type:"INC_BY_VALUE",
        payload:value
    }
} 