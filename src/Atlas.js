import './Atlas.css'
import Thermometer from './Thermometer';


export default function Atlas({ northIce, southIce, temp }) {
    return (
        <div>
            <div className="Atlas-map">
                <div className="Atlas__ice north" style={{ height: `${northIce}px`, width: `${northIce * 2}px` }}></div>
                <div></div>
                <div></div>
                <div className="Atlas-thermom">
                    <Thermometer
                        value={temp} />
                </div>
                <div></div>
                <div className="Atlas__ice south" style={{ height: `${southIce}px`, width: `${southIce * 2}px` }}></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}