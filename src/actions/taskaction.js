import {GET_TASKS,ADD_TASKS,DELETE_TASK,ITEMS_LOADING,UPDATE_TASK} from './types';
import axios from 'axios';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';  
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/tasks')
    
    .then(res=>
    dispatch({
        
        type:GET_TASKS,
        payload: res.data
    }))
    .catch(err=> dispatch(returnErrors(err.response.data,err.response.status)));
}
export const deleteItem = (id) =>(dispatch,getState) => {
  axios.delete(`/api/tasks/${id}`,tokenConfig(getState)).then(res=>
    dispatch({
        type:DELETE_TASK,
        payload:id
    })
  )
  .catch(err=> dispatch(returnErrors(err.response.data,err.response.status)));
};



export const addTask = (item) => (dispatch,getState) => {
    axios.post('/api/tasks/',item,tokenConfig(getState))
    .then(res=> dispatch({
        type: ADD_TASKS,
        payload: res.data
    }))
    .catch(err=> dispatch(returnErrors(err.response.data,err.response.status)));
}
export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
       
    }
}
