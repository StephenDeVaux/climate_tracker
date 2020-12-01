import React, { useState, createContext } from 'react'
let co2Data = require('./data/co2/co2.json')


export const InfoContext = createContext()

export function InfoProvider({ children }) {

    const co2Values =  Object.values(co2Data)
    const co2Now = co2Values[co2Values.length - 1]

    const [year, setYearState] = useState(0)
    const [co2, setCo2 ] = useState(co2Values[0])

    const setYear = (year) => { 
        setYearState(year)
        setCo2(co2Data[year])
    } 
    
    

    return (
        <InfoContext.Provider value={{ year, co2, co2Data, co2Now, setYear }} >
            {children}
        </ InfoContext.Provider>
    )
}



