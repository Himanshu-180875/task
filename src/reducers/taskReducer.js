import { v4 as uuidv4 } from 'uuid';
import {GET_TASKS,ADD_TASKS,DELETE_TASK,ITEMS_LOADING,UPDATE_TASK} from '../actions/types';

const InitialState = {
    items: [],
    loading:false
}

export default function(state=InitialState,action){
    switch(action.type){
        case GET_TASKS:
            return{
                ...state,
                items:action.payload,
                loading:false
            };
        case DELETE_TASK:
            return{
                ...state,
                items: state.items.filter(item=>item._id !== action.payload)
            }
        case ADD_TASKS:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading:true
            }
        
        default:
            return state;
    }
}