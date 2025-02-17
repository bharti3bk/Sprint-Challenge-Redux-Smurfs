/*
  Be sure to import in all of the action types from `../actions` 
*/ 
import {DELETE, ADD , FAILURE , GET} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/ 
const initialState = {
  smurfs : [""]
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/ 
export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case DELETE : { 
      return {
        ...state ,
        smurfs: [...action.payload ]
      }
    }  
    case ADD : {
      return {
        ...state,
        smurfs: [ ...action.payload ]
      }
    }   
    
    case GET : {
      return {
        ...state, 
        smurfs: [ ...action.payload ]
      }
    }
    default: 
    return state;
  }
}
