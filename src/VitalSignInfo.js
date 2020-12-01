import "./VitalSignInfo.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Line } from 'react-chartjs-2'
import { useContext } from 'react'
import { InfoContext } from './InfoContext'



export default function VitalSignInfo() {
    const { blurb, label, year, xAxisYears, yAxisData, setYear } = useContext(InfoContext)
    const handleChange = (event, newValue) => {
        setYear(newValue)
    };

    const min = Number(xAxisYears[0])
    const max = Number(xAxisYears[xAxisYears.length-1])

    const sliderMarks = [
        {
            value: min,
            label: min,
        },
    
        {
            value: max,
            label: max,
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
                        max: max,
                        min: 20,
                        // maxTicksLimit: 10,
                        stepSize: 500
                    },
                },
            ]
        },
    }

    const data = {
        labels: xAxisYears,
        datasets: [
            {
                label: label,
                data: yAxisData,
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
                    {blurb}
                </p>
                <div className="Info-slider">
                    <Slider
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        marks={sliderMarks}
                        valueLabelDisplay="auto"
                        min={min}
                        max={max}
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



