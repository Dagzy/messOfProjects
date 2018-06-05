import React, {Component} from 'react';
import {Container, Button} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render(){
        return(
            <Container>
                <h1>Welcome to my React App Portal</h1>
                <Button>Click Me</Button>
            </Container>
        )
    }
}
export default Home
