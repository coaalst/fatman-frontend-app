import { Line } from 'react-chartjs-2'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Spinner from 'react-bootstrap/Spinner'

import React, { useState, useEffect } from 'react';

import DataFetchService from '../../../service/DataFetchService'

function makeTempData(data) {
    var tempData = []
    for (var i = 0; i < data.length; i++) {
        var obj = data[i].temp;

        tempData.push(obj);
    }
    return tempData;
}

function makeHumidData(data) {
    var humidData = []
    for (var i = 0; i < data.length; i++) {
        var obj = data[i].humidity;

        humidData.push(obj);
    }
    return humidData;
}

function makeLightData(data) {
    var humidData = []
    for (var i = 0; i < data.length; i++) {
        var obj = data[i].light_state;

        humidData.push(obj);
    }
    return humidData;
}

function makePumpData(data) {
    var humidData = []
    for (var i = 0; i < data.length; i++) {
        var obj = data[i].pump_state;

        humidData.push(obj);
    }
    return humidData;
}

function makeIntakeData(data) {
    var humidData = []
    for (var i = 0; i < data.length; i++) {
        var obj = data[i].fan_state;

        humidData.push(obj);
    }
    return humidData;
}

function timeDiff(data) {
    var timeData = []
    for (var i = 0; i < data.length; i++) {
        var obj = convert(data[i].date);

        timeData.push(obj);
    }
    return timeData;
}

function convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, mnth].join("-") + " " + [date.getHours(), date.getMinutes()].join(":");
}


function ChartPanel() {

    const [data, setData] = useState([]);
    const [fetch, setFetch] = useState(true)
    const [title, setTitle] = useState("Mesec");
     
    useEffect(() => {
        (async ()=>{
            if(title === "Mesec"){
                const chartData = await DataFetchService.fetchMonth();
                setData(chartData); 
                setFetch(false);
            }
            else{
                const chartData = await DataFetchService.fetchAll();
                setData(chartData);
                setFetch(false);
            }
        })()
    },[]);

    const tempData = {
        labels: timeDiff(data),
        datasets: [
            {
                label: 'Temperatura',
                borderColor: 'rgba(208, 67, 67, 1)',
                backgroundColor: 'rgba(235, 173, 173, 0.4)',
                data: makeTempData(data)
            },
            {
                label: 'Vlaga',
                borderColor: 'rgba(112, 171, 219, 1)',
                backgroundColor: 'rgba(112, 171, 219, 0.4)',
                data: makeHumidData(data)
            }
        ]
    }

    const stepData = {
        labels: timeDiff(data),
        datasets: [
            {
                label: 'Pumpa',
                borderColor: 'rgba(208, 67, 67, 1)',
                backgroundColor: 'rgba(235, 173, 173, 0.4)',
                lineTension: 0,
                steppedLine: true,
                data: makeLightData(data)
            },
            {
                label: 'Svetlo',
                borderColor: 'rgba(219, 203, 112, 1)',
                backgroundColor: 'rgba(219, 203, 112, 0.4)',
                lineTension: 0,
                steppedLine: true,
                data: makePumpData(data)
            },
            {
                label: 'Intake',
                borderColor: 'rgba(112, 171, 219, 1)',
                backgroundColor: 'rgba(112, 171, 219, 0.4)',
                lineTension: 0,
                steppedLine: true,
                data: makeIntakeData(data)
            }
        ]
    }


    while(fetch) return (
        <div>
        <Card className='p-3'>
            <Container>
                <Row>
                    <Col>
                    <Spinner className = 'center' animation="border" variant="secondary" />
                    </Col>
                </Row>
            </Container>
        </Card>
    </div>
    )

    return (
        <div>
            <Card className='p-3'>
                <Container>
                    <Row>
                        <Col><Card.Title className='mt-2' class="text-dark font-weight-bold ">Data privju:</Card.Title></Col>
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Period">
                                <Dropdown.Item as="button" ><div onClick={()=>setTitle("Svi")}>Svi</div></Dropdown.Item>
                                <Dropdown.Item as="button" ><div onClick={()=>setTitle("Mesec")}>Mesec</div></Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {fetch ? <Spinner className = 'center' animation="border" variant="secondary" /> : <Line data={tempData} />}
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {fetch ? <Spinner className = 'center' animation="border" variant="secondary" /> : <Line data={stepData} />}
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}


export default ChartPanel;