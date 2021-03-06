import './Atlas.css'
import Thermometer from './Thermometer';
import { useContext } from 'react'
import { InfoContext } from './InfoContext'
import SeaLevelGauge from './SeaLevelGauge';
import PopulationGauge from './populationGauge';
import CattleGauge from './CattleGauge';


export default function Atlas({ showThermometer, northIce, southIce, temp, seaLevel, population, cattle }) {

    const { sign } = useContext(InfoContext)

    return (
        <div>
            <div className="Atlas-map">
                <div
                    className={sign === "North Sea Ice" ? "Atlas__ice north shadow-pop-tl" : "Atlas__ice north"}
                    style={{ height: `${northIce}px`, width: `${northIce * 2}px` }}></div>
                <div></div>
                <div></div>
                <div className="Atlas-thermom">
                    {showThermometer ? <Thermometer value={temp} /> : null}
                    {sign === "Sea Level" ? <SeaLevelGauge value={seaLevel} /> : null}
                    {sign === "Population" ? <PopulationGauge value={population} /> : null}
                    {sign === "Cows" ? <CattleGauge value={cattle} /> : null}
                </div>
                <div></div>
                <div
                    className={sign === "South Sea Ice" ? "Atlas__ice south shadow-pop-tl" : "Atlas__ice south"}
                    style={{ height: `${southIce}px`, width: `${southIce * 2}px` }}></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}