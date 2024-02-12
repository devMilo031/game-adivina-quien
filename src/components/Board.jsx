import { useState } from "react"
import { CharacterCard } from "./CharacterCard"
import './styles/Board.css'



export function Board({ cards }) {

    const [board, setBoard] = useState(Array(10))

    console.log(board)
    return (
        <div className="wi-board">
        
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
            <CharacterCard characters={cards} />
        </div>
    )
}