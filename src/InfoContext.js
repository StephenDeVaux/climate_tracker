import React, { useState, createContext } from 'react'
import useScript from './useScript'
let co2Data = require('./data/co2/co2.json')
let northSeaIceData = require('./data/sea_ice/north_sea_ice.json')
let southSeaIceData = require('./data/sea_ice/south_sea_ice.json')
let tempData = require('./data/temp/temp.json')
let forestData = require('./data/forest/forest.json')
let seaLevelData = require('./data/sea_level/seaLevel(mm).json')
let populationData = require('./data/population/population.json')
let cattleData = require('./data/livestock/liveStock.json')

let blurbs = {
    co2: 'Carbon Diaoxide (CO2) is a green house gas in the atmosphere that traps heat on earth by preventing it from being radiated to space. Sources are industrial processes like burning fossil fuels while deforestation reduces earths ability to reabsorb it.',
    seaIce: 'Sea ice is important as it reflects a great deal of sunlight back into space',
    globalTemp: "Ocean warming - the ocean absorbs much of the excess heat due to global warming. An increase in ocean temperature affets ecosystems within it, one of the most delicate being coral. Changes in ocean temperature also affect the natural balance of weather patterns and could theoretically lead to more extreme weather. ",
    forest: 'The forests are dissapeaering because of blah blah blah, bad for C02 bad for biodiveresty',
    seaLevel: 'Rising sea level blah blah blah',
    population: 'Has incraesed much in recent times, and the world has to support all these hungry hungry mouths',
    cattle: 'All the cattle to feed all the people',
}

let labels = {
    co2: 'CO2 (ppm)',
    seaIce: 'Sea ice extent M km2',
    globalTemp: '°C',
    forest: 'km2',
    seaLevel: 'mm',
    population: 'Million people',
    cattle: 'Million Cows',
}


export const InfoContext = createContext()

export function InfoProvider({ children }) {

    const co2Values = Object.values(co2Data)
    const co2Now = co2Values[co2Values.length - 1]
    const northIceNow = northSeaIceData[northSeaIceData.length - 1].extent
    const southIceNow = southSeaIceData[southSeaIceData.length - 1].extent
    const tempNow = Object.values(tempData)[Object.values(tempData).length-1] 

    const [blurb, setBlurb] = useState(blurbs["co2"])
    const [sign, setSign] = useState("")
    const [yAxisData, setyAxisData] = useState(co2Values)
    const [xAxisYears, setxAxisData] = useState(Object.keys(co2Data))
    const [label, setLabel] = useState(labels["co2"])
    const [showThermometer, setShowThermometer] = useState(false)
    const [showInfo, setShowInfo] = useState(true)

    const [year, setYearState] = useState(0)
    const [co2, setCo2] = useState(co2Values[0])
    const [northIce, setNorthIce] = useState(0)
    const [southIce, setSouthIce] = useState(0)
    const [temp, setTemp] = useState(0)

    const setYear = (year) => {
        setYearState(year)
        setCo2(co2Data[year])
        let northIcePt = northSeaIceData.filter(row => row.year === year)
        northIcePt.length > 0 ? setNorthIce(northIcePt[0].extent) : setNorthIce(0)
        let southIcePt = southSeaIceData.filter(row => row.year === year)
        southIcePt.length > 0 ? setSouthIce(southIcePt[0].extent) : setSouthIce(0)
        setTemp(tempData[year])
    }

    const selectVitalSign = (sign) => {
        setShowThermometer(false)
        setShowInfo(true)
        setSign(sign)
        if (sign === "CO2") {
            setYear(Object.keys(co2Data)[0])
            setBlurb(blurbs["co2"])
            setyAxisData(co2Values)
            setxAxisData(Object.keys(co2Data))
            setLabel(labels["co2"])
        }
        if (sign === "North Sea Ice") {
            setYear(northSeaIceData.map(row => row.year)[0])
            setBlurb(blurbs["seaIce"])
            setyAxisData(northSeaIceData.map(row => row.extent))
            setxAxisData(northSeaIceData.map(row => row.year))
            setLabel(labels["seaIce"])
        }
        if (sign === "South Sea Ice") {
            setYear(southSeaIceData.map(row => row.year)[0])
            setBlurb(blurbs["seaIce"])
            setyAxisData(southSeaIceData.map(row => row.extent))
            setxAxisData(southSeaIceData.map(row => row.year))
            setLabel(labels["seaIce"])
        }
        if (sign === "Global Temp") {
            setYear(Object.keys(tempData)[0])
            setBlurb(blurbs["globalTemp"])
            setyAxisData(Object.values(tempData))
            setxAxisData(Object.keys(tempData))
            setLabel(labels["globalTemp"])
            setShowThermometer(true)
        }
        if (sign === "Forests") {
            setYear(Object.keys(forestData)[0])
            setBlurb(blurbs["forest"])
            setyAxisData(Object.values(forestData))
            setxAxisData(Object.keys(forestData))
            setLabel(labels["forest"])
        }
        if (sign === "Sea Level") {
            setYear(Object.keys(seaLevelData)[0])
            setBlurb(blurbs["seaLevel"])
            setyAxisData(Object.values(seaLevelData))
            setxAxisData(Object.keys(seaLevelData))
            setLabel(labels["seaLevel"])
        }
        if (sign === "Population") {
            setYear(Object.keys(populationData)[0])
            setBlurb(blurbs["population"])
            setyAxisData(Object.values(populationData))
            setxAxisData(Object.keys(populationData))
            setLabel(labels["population"])
        }
        if (sign === "Cows") {
            setYear(Object.keys(cattleData)[0])
            setBlurb(blurbs["cattle"])
            setyAxisData(Object.values(cattleData))
            setxAxisData(Object.keys(cattleData))
            setLabel(labels["cattle"])
        } 
        if (sign == "Climate Clock") { 
            setShowInfo(false)
        }
    }




    return (
        <InfoContext.Provider value={{
            blurb, label, xAxisYears, yAxisData, year,
            co2, co2Data, co2Now,
            northIce, southIce, northIceNow, southIceNow,
            temp, tempNow, showThermometer,
            showInfo, sign, 
            setYear, selectVitalSign
        }} >
            {children}
        </ InfoContext.Provider>
    )
}



