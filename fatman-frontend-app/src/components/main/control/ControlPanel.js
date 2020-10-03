import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert'

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import ConfigUpdateService from '../../../service/ConfigUpdateService'

function ControlPanel(props) {

    const [data, setData] = useState(null);
    const [prog, setProg] = useState(0)
    const [show, setShow] = useState(false);
    const { handleSubmit, register } = useForm();


    const onSubmit = values => {
        setProg(5)
        console.log(values);
        ConfigUpdateService.update_config(values).then(setProg(100)).catch()
    }
    return (
        <div md={{ span: 8 }} xs={{ span: 8 }}>

            <Card className='p-3'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col>
                            <Card.Title className='mt-2' class="text-dark font-weight-bold">Control Panel</Card.Title>

                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" size="sm">
                                Updejt
                            </Button>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Vozis li automatik?</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Check
                                name="mode"
                                ref={register}
                                type="switch"
                                id="automatik"
                                label=""
                            />
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Temperatura</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Control ref={register} name="temp" placeholder="26" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Vlaga</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Control ref={register} name="humidity" placeholder="40%" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Svetlo od</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Control ref={register} name="interval-start" placeholder="23:00" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Svetlo do</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Control ref={register} name="interval-stop" placeholder="11:00" />
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Svetlo</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Check
                                name="light_state"
                                ref={register}
                                type="switch"
                                id="svetlo"
                                label=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> Intake</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Check
                                name="fan_state"
                                ref={register}
                                type="switch"
                                id="intake"
                                label=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='mr-3' class="text-dark"> lil Pump</p>
                        </Col>
                        <Col className='ml-3'>
                            <Form.Check
                                name="pump_state"
                                ref={register}
                                type="switch"
                                id="pump"
                                label=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><ProgressBar variant="success" now={prog} label={`${prog}%`} /></Col>
                        <Alert show={show} variant="danger">
                            Nisi osurio bika prika
                        </Alert>
                    </Row>
                </Form>
            </Card>
        </div>
    )
}


export default ControlPanel;