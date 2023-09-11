import React from 'react';
import { Line } from 'react-chartjs-2'; 
import { Row, Col, Typography } from 'antd';
import { Chart as ChartJS,
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement 
} from "chart.js";

const { Title } = Typography;
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement);

const LineChart = ({coinHistory, currentPrice, coinName}) => {

    const coinPrice = [];
    const coinTimeStamp = [];

    for(let i = coinHistory?.data?.history.length - 1; i>=0; i--) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                labels: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return (
        <>
            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className='price-container'>
                    <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
    );
};


export default LineChart;