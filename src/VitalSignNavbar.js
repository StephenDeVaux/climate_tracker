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
            <VitalSignBtn label="Sea Level" />  
            <VitalSignBtn label="Population" />  
            <VitalSignBtn label="Cows" />  
            <VitalSignBtn label="Climate Clock" />  
            <div></div>
        </div>
    )
}