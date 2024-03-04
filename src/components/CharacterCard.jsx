import { useState } from "react"
import './styles/CharacterCard.css'

const logoOp = 'https://seeklogo.com/images/S/straw-hat-pirates-logo-CE30ADBE3A-seeklogo.com.png'
const logoKny = 'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/c/c9/Logo.png/revision/latest?cb=20190930171844&path-prefix=es'

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
                    ? <div className="wi-character-card none" onClick={handleLap} >
                        {anime === 'one-piece'
                            ? <img src={logoOp} alt="logo.png" />
                            : anime === 'kimetsu' ? < img src={logoKny} alt="logo.png" /> : ''}
                    </div>
                    : <div className="wi-character-card" onClick={handleLap}>
                        <img src={characters[lap].image} alt={characters[lap].name} />
                    </div>
            }
        </>
    )
}