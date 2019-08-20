import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SmurfCard from './SmurfCard'

function smurfList({smurfs}) {
  return(
          smurfs.map(s =>  
          <SmurfCard smurf={s} /> )
  )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(smurfList)