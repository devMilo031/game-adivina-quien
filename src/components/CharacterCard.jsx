import { useState } from "react"
import './styles/CharacterCard.css'
export function CharacterCard({ characters, anime }) {

    const [viewLap, setViewLap] = useState('none')//view
    const [lap, setLap] = useState(Math.floor(Math.random() * characters.length))

    const handleLap = () => {
        viewLap === 'none' ? setViewLap('active') : setViewLap('none')
    }

    return (
        <>
            {
                viewLap === 'none'
                    ? <div className="wi-character-card none" onClick={handleLap}>
                        {anime === 'one-piece'
                            ? <img src="../public/logo-op.png" alt="logo.png" />
                            : anime === 'kimetsu' ? < img src="../public/logo-kny.png" alt="logo.png" /> : ''}
                    </div>
                    : <div className="wi-character-card" onClick={handleLap}>
                        <img src={characters[lap].image} alt={characters[lap].name} />
                    </div>
            }
        </>
    )
}