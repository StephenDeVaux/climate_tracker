import "./VitalSignInfo.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Line } from 'react-chartjs-2'
let co2info = require('./data/co2/co2.json')


export default function VitalSignInfo() {

    // console.log(Object.values(co2info))


    const data = {
        labels: Object.keys(co2info),
        datasets: [
            {
                label: "CO2 (ppm)",
                data: Object.values(co2info),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    const classes = useStyles();

    return (
        <div className="Info">
            <div>C02 is bad for the planet</div>
            <div className="Info-graph">
                <Line data={data} options={options} />
            </div>
            <div className="Info-slider">
                <Slider
                    defaultValue={80}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </div>
        </div>
    )

}



const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}




const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                },
            },
        ],
        xAxes: [
            {
                ticks: {
                    max: 2020,
                    min: 20,
                    // maxTicksLimit: 10,
                    stepSize: 200
                },
            },
        ]
    },
}
