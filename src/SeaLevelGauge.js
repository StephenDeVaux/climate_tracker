import './SeaLevelGauge.css'

export default function SeaLevelGauge({value}) { 

    const valuePercentage = (value+100)/400 * 100

    return ( 
        <div>
            <div className="SeaLevelGauge-containter">
                <div 
                    className="SeaLevelGauge-gauge" 
                    style={{ height: `${valuePercentage}%` }}>

                </div>
            </div>
        </div>
    )
} 