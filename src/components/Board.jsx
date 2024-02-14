import { useState } from "react"
import { CharacterCard } from "./CharacterCard"
import './styles/Board.css'



export function GameBoard({ cards, anime }) {
    const [board, setBoard] = useState(Array(10).fill(0))

    return (
        <div className="contanainer-wi-board">
            <div className="wi-board">
                {
                    board.map(() => (
                        <CharacterCard characters={cards} anime={anime} />
                    ))
                }
            </div>
        </div>
    )
}