import './Atlas.css'
import Thermometer from './Thermometer';


export default function Atlas({ showThermometer, northIce, southIce, temp }) {
    return (
        <div>
            <div className="Atlas-map">
                <div className="Atlas__ice north shadow-pop-tl" style={{ height: `${northIce}px`, width: `${northIce * 2}px` }}></div>
                <div></div>
                <div></div>
                <div className="Atlas-thermom">
                    {showThermometer ? <Thermometer  value={temp} /> : null}
                </div>
                <div></div>
                <div className="Atlas__ice south shadow-pop-tl" style={{ height: `${southIce}px`, width: `${southIce * 2}px` }}></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}