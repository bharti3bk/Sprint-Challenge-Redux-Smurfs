import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'
import { Card, Button } from 'semantic-ui-react'

function smurfCard({ smurf, deleteSmurf }) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{smurf.name}</Card.Header>
                <Card.Meta>{smurf.age}</Card.Meta>
                <Card.Description>
                    {smurf.height}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui button'>
                    <Button basic color='red' onClick={() => deleteSmurf(smurf.id)} >
                        Delete
                    </Button>  
                </div>
            </Card.Content>
        </Card>
    )
}

export default connect(null, {deleteSmurf})(smurfCard)