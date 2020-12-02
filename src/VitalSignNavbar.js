import VitalSignBtn from "./VitalSignBtn";
import "./VitalSignNavbar.css"

export default function VitalSignNavBar() { 
    return ( 
        <div className="Navbar"> 
            <div></div>
            <VitalSignBtn label="CO2" /> 
            <VitalSignBtn label="North Sea Ice" /> 
            <VitalSignBtn label="South Sea Ice" /> 
            <VitalSignBtn label="Global Temp" />  
            <VitalSignBtn label="Forests" />  
            <div></div>
        </div>
    )
}