import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ControlPanel from './control/ControlPanel';
function Main() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="public/favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Fatman | Main
                    </Navbar.Brand>
            </Navbar>
            <div class="p-3 bg-secondary text-white">
                <Container >
                    <Row>
                        <Col md={{ span: 8 }} xs={{ span: 8 }}>
                        <Card>
                                <Card.Title class="text-dark" className='m-3'>Necu asni</Card.Title>
                               
                            </Card>
                        </Col>
                        <Col md={{ span: 4 }} xs={{ span: 4 }}>
                            
                            <ControlPanel/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Main;