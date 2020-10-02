import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function ControlPanel(props) {

    const [data, setData] = useState(null);



    return (
        <div md={{ span: 8 }} xs={{ span: 8 }}>

            <Card className='p-3'>
                <Card.Title className='mt-2' class="text-dark">Oces maslo asni?</Card.Title>
                <hr></hr>
                <Container>
                    <Row>
                        <Col>
                            <p class="text-dark">Testera</p>
                        </Col>
                        <Col>
                            <p class="text-dark">Udarac</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p class="text-dark">Prvi</p>
                        </Col>

                        <Col>
                            <p class="text-dark">Dim</p>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                            <p class="text-dark">Ga</p>
                        </Col>

                        <Col>
                            <p class="text-dark">Puko</p>
                        </Col>
                        
                    </Row>
                </Container>

            </Card>
        </div>
    )
}


export default ControlPanel;