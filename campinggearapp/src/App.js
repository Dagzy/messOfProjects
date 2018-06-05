import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import {Container, Jumbotron, Row, Col} from 'reactstrap'
// import {Header} from './components/Header'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Router>
          <Navbar/>
        </Router>
      </Container>
    );
  }
}

export default App;
