import React from 'react'

import Navigation from './components/Navigation'
import CountryList from './components/CountryList'
import Country from './components/Country'

import { Row, Col, Container, Button, Jumbotron } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <div>
            <Navigation />
            <Router>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/country/:name" exact component={Country} />
                </Switch>
            </Router>
        </div>
    )
}

function MainPage() {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <Jumbotron fluid>
                        <Container style={{textAlign: "center"}}>
                            <h1>Country Info</h1>
                            <p>
                                This application made for practice ReactJS & React-Bootstrap
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Container>
                    <CountryList />
                </Container>
            </Row>
        </div>
    )
}

export default App