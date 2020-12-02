import './Thermometer.scss'

export default function Thermometer({ value }) {

    const max = '1.5°C'
    const valuePercentage = 100 * ((Number(value) + 0.5) / 2.0)

    return (
        <div className="donation-meter">
            {/* <strong>Our Goal</strong> */}
            <strong className="goal">{max}</strong>
            <span className="glass">
                <strong className="total" style={{ bottom: `${valuePercentage}%` }}>{`${value}°C`}</strong>
                <span className="amount" style={{ height: `${valuePercentage}%` }}></span>
            </span>
            <div className="bulb">
                <span className="red-circle"></span>
                <span className="filler">
                    <span></span>
                </span>
            </div>
        </div>
    )
}