import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SmurfCard from './SmurfCard'   
import {getSmurf} from '../actions/smrufActionCreator'

function displaySmurf({getSmurf , smurfs}) 
{  
    console.log(smurfs)
    return (
        <div> 
            <button onClick = {getSmurf}>DisplayAllSmruf</button>
             {smurfs && smurfs.map(s => <SmurfCard smurf = {s} />) }
        </div>
    )  
} 

const mapStateToProps = (state) => {
    return {
      smurfs : state.smurfs
    }
 }  

 export default connect(mapStateToProps , {getSmurf})(displaySmurf)