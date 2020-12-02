import { useContext } from 'react'
import { InfoContext } from './InfoContext'

export default function VitalSignBtn({ label, selected }) {

    const { selectVitalSign } = useContext(InfoContext)

    return (
        <div >
            <button
                className="Navbar-btn"
                style={ selected ? { "background-color": "#fb6384" } : null }
                onClick={() => selectVitalSign(label) }>
                {label}
            </button>
        </div>
    )
}