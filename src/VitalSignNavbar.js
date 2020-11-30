import VitalSignBtn from "./VitalSignBtn";
import "./VitalSignNavbar.css"

export default function VitalSignNavBar() { 
    return ( 
        <div className="Navbar"> 
            <div></div>
            <VitalSignBtn label="CO2" /> 
            <VitalSignBtn label="Sea Ice" /> 
            <VitalSignBtn label="Pandas" /> 
            <div></div>
        </div>
    )
}