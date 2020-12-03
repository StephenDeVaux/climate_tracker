import './PopulationGauge.css'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


export default function PopulationGauge({ value }) {

    const peeps = []
    const numPeeps = Math.round(value/200)


    for ( let i = 0 ; i < numPeeps ; i ++ ){ 
        peeps.push(<EmojiPeopleIcon /> )
    }

    const valuePercentage = (value + 100) / 400 * 100

    return (
        <div>
            <div className="PopulationGauge-containter">
                {peeps}
            </div>
        </div>
    )
} 