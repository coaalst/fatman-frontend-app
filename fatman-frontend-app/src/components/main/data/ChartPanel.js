const CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function ChartPanel(props) {

     const [data, setData] = useState({data: [], isFetching: true});
    /*
    useEffect(() => {
        (async ()=>{
            const chartData = await DataFetchService.fetchData();
            setData(data: chartData, isFetching: false);

        })()
        chart();
    },[]);
    */

    const chart = () => {
        setChartData({
            labels: ['x','y'],
            datasets: [{
                label: 'Temperatura kroz vreme',
                backgroundColor: ['rgba(255,0,0,0.6)'],
                borderwidth: 4,
            }]
        })
    };

    return (
        <div>
            <Container>
                <Row>
                    <Line data = {chartData}/>
                </Row>

                <Row>
                    <Line data = {chartData}/>
                </Row>
            </Container>
        </div>
    )
}


export default ChartPanel;