import React, {Component} from 'react'
import {
    Jumbotron, Container, Row} from 'reactstrap'
import Campers from './Campers'
import Cards from './Cards'
class Gear extends Component {
    constructor(props) {
        super(props)
        this.state = {campers:Campers}
    }
    
    render() {
        return (
            <Container>
            {console.log(this.state.campers)}
                <h1>Create A Gear Check List!</h1>
                <Row>
                {this.state.campers.map(camper=><Cards size='6' key={camper.name} name={camper.name}
                body={camper.goals} loc={camper.location} img={camper.img}
                />)}


                </Row>
            </Container>
        )
    }
}
export default Gear