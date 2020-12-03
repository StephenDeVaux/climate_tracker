import React, { useState, createContext, useEffect } from 'react'
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
    const tempNow = Object.values(tempData)[Object.values(tempData).length - 1]
    const forestNow = Object.values(forestData)[Object.values(forestData).length - 1]
    const seaLevelNow = Object.values(seaLevelData)[Object.values(seaLevelData).length - 1]
    const populationNow = Object.values(populationData)[Object.values(populationData).length - 1]
    const cattleNow = Object.values(cattleData)[Object.values(cattleData).length - 1]

    const [blurb, setBlurb] = useState(blurbs["co2"])
    const [sign, setSign] = useState("")
    const [yAxisData, setyAxisData] = useState(co2Values)
    const [xAxisYears, setxAxisData] = useState(Object.keys(co2Data))
    const [label, setLabel] = useState(labels["co2"])
    const [showThermometer, setShowThermometer] = useState(false)
    const [showInfo, setShowInfo] = useState(true)
    const [valueText, setValueText] = useState()
    const [valueNowText, setValueNowText] = useState()

    const [year, setYearState] = useState(0)
    const [co2, setCo2] = useState(co2Values[0])
    const [northIce, setNorthIce] = useState(0)
    const [southIce, setSouthIce] = useState(0)
    const [temp, setTemp] = useState(0)
    const [forest, setForest] = useState(0)
    const [seaLevel, setSeaLevel] = useState(0)
    const [population, setPopulation] = useState(0)
    const [cattle, setCattle] = useState(0)

    useEffect(() => { setYear(year) }, [sign])

    const setYear = (year) => {
        setValueText()
        setValueNowText()
        setYearState(year)
        setCo2(co2Data[year])
        let northIcePt = northSeaIceData.filter(row => row.year === year)
        northIcePt.length > 0 ? setNorthIce(northIcePt[0].extent) : setNorthIce(0)
        let southIcePt = southSeaIceData.filter(row => row.year === year)
        southIcePt.length > 0 ? setSouthIce(southIcePt[0].extent) : setSouthIce(0)
        setTemp(tempData[year])
        setForest(forestData[year])
        setSeaLevel(seaLevelData[year])
        setPopulation(populationData[year])
        setCattle(cattleData[year])

        if (sign === "CO2") {
            setValueText(`CO2: ${Math.round(co2Data[year])}ppm`)
            setValueNowText(`CO2: ${Math.round(co2Now)}ppm`)
        } else if (sign === "North Sea Ice") {
            setValueText(`North Ice: ${northIce} Million km2`)
            setValueNowText(`North Ice: ${northIceNow} Million km2`)
        } else if (sign === "South Sea Ice") {
            setValueText(`South Ice: ${southIce} Million km2`)
            setValueNowText(`South Ice: ${southIceNow} Million km2`)
        } else if (sign === "Global Temp") {
            //dont need it as displayed on thermometer
            // setValueText(`Global temp change: ${tempData[year]}°C`)
            // setValueNowText(`Global temp change: ${tempNow}°C`)
        } else if (sign === "Forests") {
            setValueText(`Forest Area: ${Math.round(forestData[year])} km2`)
            setValueNowText(`Forest Area: ${Math.round(forestNow)} km2`)
        } else if (sign === "Sea Level") {
            setValueText(`Sea level change: ${seaLevelData[year]} mm`)
            setValueNowText(`Sea level change: ${seaLevelNow} mm`)
        } else if (sign === "Population") {
            setValueText(`People: ${populationData[year]} Million`)
            setValueNowText(`People: ${populationNow} Million`)
        } else if (sign === "Cows") {
            setValueText(`Cows: ${cattleData[year]} Million`)
            setValueNowText(`Cows: ${cattleNow} Million`)
        } else if (sign == "Climate Clock") {

        }
    }

    const selectVitalSign = (sign) => {
        setShowThermometer(false)
        setShowInfo(true)
        setSign(sign)
        if (sign === "CO2") {
            setBlurb(blurbs["co2"])
            setyAxisData(co2Values)
            setxAxisData(Object.keys(co2Data))
            setLabel(labels["co2"])
            setYear(Object.keys(co2Data)[0])
        }
        if (sign === "North Sea Ice") {
            setBlurb(blurbs["seaIce"])
            setyAxisData(northSeaIceData.map(row => row.extent))
            setxAxisData(northSeaIceData.map(row => row.year))
            setLabel(labels["seaIce"])
            setYear(northSeaIceData.map(row => row.year)[0])
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
        // setYear(year)
    }




    return (
        <InfoContext.Provider value={{
            blurb, label, xAxisYears, yAxisData, year,
            co2, co2Data, co2Now,
            northIce, southIce, northIceNow, southIceNow,
            temp, tempNow, showThermometer,
            forestNow, seaLevelNow, populationNow, cattleNow,
            forest, seaLevel, population, cattle, 
            showInfo, sign, valueText, valueNowText,
            setYear, selectVitalSign
        }} >
            {children}
        </ InfoContext.Provider>
    )
}



