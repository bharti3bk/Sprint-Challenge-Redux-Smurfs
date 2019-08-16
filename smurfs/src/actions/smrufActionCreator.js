import axios from 'axios'; 
export const START = 'START';
export const ADD = 'ADD';
export const FAILURE = 'FAILURE'; 

export const getResponse = () => {
    return dispach => {
        dispach({type: START});
       const results = axios.get(`http://localhost:3333/smurfs`) 
       results.then(res => { 
           console.log(res.data)
           dispach({type: ADD , payload: res.data})
       }) 
       .catch(error => {
           dispach({type: FAILURE , payload: res.error})
       })

    }
}