import React, { useState, createContext } from 'react'
let co2Data = require('./data/co2/co2.json')
let northSeaIceData = require('./data/sea_ice/north_sea_ice.json')
let southSeaIceData = require('./data/sea_ice/south_sea_ice.json')
let tempData = require('./data/temp/temp.json')

let blurbs = {
    co2: 'Carbon Diaoxide (CO2) is a green house gas in the atmosphere that traps heat on earth by preventing it from being radiated to space. Sources are industrial processes like burning fossil fuels while deforestation reduces earths ability to reabsorb it.',
    seaIce: 'Sea ice is important as it reflects a great deal of sunlight back into space',
    globalTemp:"Ocean warming - the ocean absorbs much of the excess heat due to global warming. An increase in ocean temperature affets ecosystems within it, one of the most delicate being coral. Changes in ocean temperature also affect the natural balance of weather patterns and could theoretically lead to more extreme weather. ",
}

let labels = {
    co2: 'CO2 (ppm)',
    seaIce: 'Sea ice extent m km2',
    globalTemp: '°C',
}


export const InfoContext = createContext()

export function InfoProvider({ children }) {

    const co2Values = Object.values(co2Data)
    const co2Now = co2Values[co2Values.length - 1]
    const northIceNow = northSeaIceData[northSeaIceData.length-1].extent
    const southIceNow = southSeaIceData[southSeaIceData.length - 1].extent

    const [year, setYearState] = useState(0)
    const [co2, setCo2] = useState(co2Values[0])
    const [northIce, setNorthIce] = useState(0)
    const [southIce, setSouthIce] = useState(0)

    const [blurb, setBlurb] = useState(blurbs["co2"])
    const [yAxisData, setyAxisData] = useState(co2Values)
    const [xAxisYears, setxAxisData] = useState(Object.keys(co2Data))
    const [label, setLabel] = useState(labels["co2"])


    const setYear = (year) => {
        setYearState(year)
        setCo2(co2Data[year])
        let northIcePt = northSeaIceData.filter(row => row.year === year)
        northIcePt.length > 0 ?  setNorthIce(northIcePt[0].extent) : setNorthIce(0)
        let southIcePt = southSeaIceData.filter(row => row.year === year)
        southIcePt.length > 0 ? setSouthIce(southIcePt[0].extent) : setSouthIce(0)
    }

    const selectVitalSign = (sign) => {

        if (sign === "CO2") {
            setBlurb(blurbs["co2"])
            setyAxisData(co2Values)
            setxAxisData(Object.keys(co2Data))
            setLabel(labels["co2"])
        }
        if (sign === "North Sea Ice") {
            setBlurb(blurbs["seaIce"])
            setyAxisData(northSeaIceData.map(row => row.extent))
            setxAxisData(northSeaIceData.map(row => row.year))
            setLabel(labels["seaIce"])
        }
        if (sign === "South Sea Ice") {
            setBlurb(blurbs["seaIce"])
            setyAxisData(southSeaIceData.map(row => row.extent))
            setxAxisData(southSeaIceData.map(row => row.year))
            setLabel(labels["seaIce"])
        }
        if(sign === "Global Temp") { 
            console.log(tempData)
            setBlurb(blurbs["globalTemp"])
            setyAxisData(Object.values(tempData))
            setxAxisData(Object.keys(tempData))
            setLabel(labels["globalTemp"])
        }

    }




    return (
        <InfoContext.Provider value={{ blurb, label, xAxisYears, yAxisData, year, co2, northIce, southIce, co2Data, co2Now, northIceNow, southIceNow, setYear, selectVitalSign }} >
            {children}
        </ InfoContext.Provider>
    )
}



