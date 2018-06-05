import React from 'react'
import {Route, Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'reactstrap'
import {routes} from './routes'
const Navbar = () => ( 
    <Container> 
        <Row style={{backgroundColor: "blue"}}>
 
                <Button  style={{backgroundColor: "red"}}>
                    <Link to="/">Home</Link>
                </Button>

                <Button style={{backgroundColor: "red"}}>
                    <Link to="/gearchecker">Gear Checker</Link>
                </Button>
            

        </Row> 
        <div> {routes.map((route, index) => (<Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}/>))}   
        </div>
    </Container>
)
export default Navbar;