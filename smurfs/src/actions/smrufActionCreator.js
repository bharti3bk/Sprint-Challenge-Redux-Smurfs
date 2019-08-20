import axios from 'axios';
export const DELETE = 'DELELE';
export const ADD = 'ADD';
export const FAILURE = 'FAILURE'; 
export const GET = 'GET';

export const addSmurf = (smurf) => {
    return dispach => {
        axios.post(`http://localhost:3333/smurfs`,smurf)
        .then(res => {
            console.log(res.data)
            dispach({ type: ADD, payload: res.data })
        })
        .catch(error => { dispach({ type: FAILURE, payload: error})})
    }
}

export const deleteSmurf = (smurfId) => {
    return dispach => {
        axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
        .then(res => {
            dispach({ type: DELETE, payload: res.data })
        })
        .catch(error => {
                dispach({ type: FAILURE, payload: error})
        })
    }
}  

export const getSmurf = () => {
    return dispach => {
       axios.get(`http://localhost:3333/smurfs`) 
       .then(res => {
           dispach({type : GET , payload: res.data})
       })  
       .catch(error => {
           dispach({type: FAILURE, payload:error})
       })
    }
}

