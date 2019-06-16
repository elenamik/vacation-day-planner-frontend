import {TEST} from '../actions/actionConstants';

function entries(entries=[],action){
    console.log("data passed to reducer",action)
    switch(action.type){
        case TEST:
            return [...entries,action.modal_data]
        default:
            return entries; 
    }
}

export default entries;