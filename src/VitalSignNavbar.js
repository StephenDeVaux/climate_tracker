import VitalSignBtn from "./VitalSignBtn";
import "./VitalSignNavbar.css"
import { useContext } from 'react'
import { InfoContext } from './InfoContext'

export default function VitalSignNavBar() { 
    const { sign } = useContext(InfoContext)

    return ( 
        <div className="Navbar"> 
            <div></div>
            <VitalSignBtn selected={ sign === "CO2"} label="CO2" /> 
            <VitalSignBtn selected={ sign === "North Sea Ice"} label="North Sea Ice" /> 
            <VitalSignBtn selected={ sign === "South Sea Ice"} label="South Sea Ice" /> 
            <VitalSignBtn selected={ sign === "Global Temp"} label="Global Temp" />  
            <VitalSignBtn selected={ sign === "Sea Level"} label="Sea Level" />  
            <VitalSignBtn selected={ sign === "Population"} label="Population" />  
            <VitalSignBtn selected={ sign === "Cows"} label="Cows" />  
            {/* <VitalSignBtn selected={ sign === "Forests"} label="Forests" />   */}
            <VitalSignBtn selected={ sign === "Climate Clock"} label="Climate Clock" />  
            <div></div>
        </div>
    )
}