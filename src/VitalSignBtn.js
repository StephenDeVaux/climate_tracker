import { useContext } from 'react'
import { InfoContext } from './InfoContext'

export default function VitalSignBtn({ label }) {

    const { selectVitalSign } = useContext(InfoContext)

    return (
        <div >
            <button
                className="Navbar-btn"
                onClick={() => selectVitalSign(label) }>
                {label}
            </button>
        </div>
    )
}