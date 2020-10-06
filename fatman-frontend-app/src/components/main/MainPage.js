import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ControlPanel from './control/ControlPanel';
import ChartPanel from './data/ChartPanel'

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
                        <Col md={{ span: 8 }} xs={{ span: 12 }}>
                            <ChartPanel />
                        </Col>
                        <Col md={{ span: 4 }} xs={{ span: 12 }}>
                            <ControlPanel />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Main;