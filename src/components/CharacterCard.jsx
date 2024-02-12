import { useState } from "react"
import './styles/CharacterCard.css'
export function CharacterCard({ characters }) {

    const [viewLap, setViewLap] = useState('none')//view
    const [lap, setLap] = useState(Math.floor(Math.random() * characters.length))
    const handleLap = () => {
        viewLap === 'none' ? setViewLap('active') : setViewLap('none')
    }

    return (
        <div className="wi-character-card-container">
            {
                viewLap === 'none' ? <div className="wi-character-card-none" onClick={handleLap}><img src="../public/logo.png" alt="logo.png" /></div>
                    : <div className="wi-character-card" onClick={handleLap}>
                        <p>{characters[lap].name}</p>
                        <img src={characters[lap].image} alt={characters[lap].name} />
                    </div>
            }
        </div>
    )
}