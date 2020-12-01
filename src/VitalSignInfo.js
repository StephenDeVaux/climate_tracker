import "./VitalSignInfo.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Line } from 'react-chartjs-2'
import { useContext } from 'react'
import { InfoContext } from './InfoContext'

const sliderMarks = [
    {
        value: 0,
        label: '0',
    },

    {
        value: 2020,
        label: '2020',
    },
];
const graphOptions = {
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

export default function VitalSignInfo() {
    const { year, co2, co2Data, setYear } = useContext(InfoContext)
    const handleChange = (event, newValue) => {
        setYear(newValue)
    };

    const data = {
        labels: Object.keys(co2Data),
        datasets: [
            {
                label: "CO2 (ppm)",
                data: Object.values(co2Data),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    return (
        <div className="Info">
            <div className="Info__blurb-slider">
                <p>
                    Carbon Diaoxide (CO2) is a green house gas in the atmosphere that traps heat on earth by preventing it from being radiated to space. Sources are industrial processes like burning fossil fuels while deforestation reduces earths ability to reabsorb it.
                </p>
                <div className="Info-slider">
                    <Slider
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={10}
                        marks={sliderMarks}
                        valueLabelDisplay="auto"
                        min={0}
                        max={2020}
                        value={year}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="Info-graph">
                <Line data={data} options={graphOptions} />
            </div>
        </div>
    )
}



