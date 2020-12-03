import './CattleGauge.css'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


export default function CattleGauge({ value }) {

    const cows = []
    const numCows = Math.round(value/40)


    for ( let i = 0 ; i < numCows ; i ++ ){ 
        cows.push(<div>🐄</div>)
    }

    const valuePercentage = (value + 100) / 400 * 100

    return (
        <div>
            <div className="CattleGauge-containter">
                {cows}
            </div>
        </div>
    )
} 